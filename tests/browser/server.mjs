import { createGalleryServer } from "./gallery_server.mjs";

const server = createGalleryServer();
server.listen(4173, "127.0.0.1");

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
