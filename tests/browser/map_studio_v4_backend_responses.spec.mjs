import { expect, test } from "@playwright/test";
import { build } from "esbuild";

const bundle = await build({
  stdin: {
    contents: 'export { MaticBackend } from "./frontend/map-studio-v4/backend";',
    resolveDir: process.cwd(),
  },
  bundle: true,
  format: "esm",
  write: false,
});

test("@safety shared JSON reader and area save reject malformed response envelopes", async ({ page }) => {
  await page.route("**/backend-responses.js", route => route.fulfill({
    contentType: "text/javascript",
    body: bundle.outputFiles[0].text,
  }));
  await page.goto("/");
  const result = await page.evaluate(async () => {
    const { MaticBackend } = await import("/backend-responses.js");
    let body = "{\"entries\":";
    const backend = new MaticBackend(() => ({
      fetchWithAuth: async () => new Response(body, { headers: { "Content-Type": "application/json" } }),
    }));
    const codeOf = async action => {
      try {
        await action();
        return null;
      } catch (error) {
        return error.code ?? error.name;
      }
    };
    const malformedJson = await codeOf(() => backend.catalog());
    body = "{}";
    const invalidAreaEnvelope = await codeOf(() => backend.saveArea("/api/matic_robot/areas", {
      areaId: null,
      name: "Test area",
      circles: [{ x: 0, y: 0, radius: 1 }],
      cleaningMode: "vacuum",
      coverageSetting: "standard",
    }));
    backend.dispose();
    return { malformedJson, invalidAreaEnvelope };
  });

  expect(result).toEqual({
    malformedJson: "invalid-json-response",
    invalidAreaEnvelope: "invalid-area-save-response",
  });
});

test("@safety full scene responses validate headers and truncated bodies for live and history reads", async ({ page }) => {
  await page.route("**/backend-responses.js", route => route.fulfill({
    contentType: "text/javascript",
    body: bundle.outputFiles[0].text,
  }));
  await page.goto("/");
  const result = await page.evaluate(async () => {
    const { MaticBackend } = await import("/backend-responses.js");
    let responseCase = "truncated-body";
    const backend = new MaticBackend(() => ({
      fetchWithAuth: async () => {
        const headers = {
          "Content-Type": "application/vnd.matic.slam-scene",
          "X-Matic-Revision": "2",
          "X-Matic-Floor-Coherent": "1",
        };
        if (responseCase === "content-type") headers["Content-Type"] = "application/octet-stream";
        if (responseCase === "revision-header") headers["X-Matic-Revision"] = "-1";
        if (responseCase === "floor-header") headers["X-Matic-Floor-Coherent"] = "yes";
        return new Response(new Uint8Array([0, 1, 2, 3]), { headers });
      },
    }));
    const cases = [
      ["truncated-body", "invalid-scene"],
      ["content-type", "invalid-scene-content-type"],
      ["revision-header", "invalid-scene-revision"],
      ["floor-header", "invalid-scene-floor-header"],
    ];
    const results = [];
    for (const source of ["live", "history"]) {
      for (const [name, expected] of cases) {
        responseCase = name;
        let code = null;
        try {
          await backend.scene("/api/matic_robot/scene", 1, true, source);
        } catch (error) {
          code = error.code ?? error.name;
        }
        results.push({ source, name, code, expected });
      }
    }
    backend.dispose();
    return results;
  });

  expect(result).toHaveLength(8);
  for (const { source, name, code, expected } of result) {
    expect(code, `${source}: ${name}`).toBe(expected);
  }
});

test("@safety area delete hands back a conflict body and fails other errors", async ({ page }) => {
  await page.route("**/backend-responses.js", route => route.fulfill({
    contentType: "text/javascript",
    body: bundle.outputFiles[0].text,
  }));
  await page.goto("/");
  const result = await page.evaluate(async () => {
    const { MaticBackend } = await import("/backend-responses.js");
    let response;
    const backend = new MaticBackend(() => ({ fetchWithAuth: async () => response() }));
    const remove = async () => {
      try {
        return { value: await backend.deleteArea("/api/matic_robot/areas", "rug") };
      } catch (error) {
        return { error: error.code ?? error.name };
      }
    };
    response = () => new Response(null, { status: 204 });
    const deleted = await remove();
    response = () => new Response("{\"plans\":[\"Rug only\"]}", {
      status: 409,
      headers: { "Content-Type": "application/json", "X-Matic-Areas-Conflict": "plan-would-be-empty" },
    });
    const conflict = await remove();
    response = () => new Response(null, { status: 500 });
    const failed = await remove();
    backend.dispose();
    return { deleted, conflict, failed };
  });

  expect(result).toEqual({
    deleted: {},
    conflict: { value: { plans: ["Rug only"] } },
    failed: { error: "area-delete-failed" },
  });
});
