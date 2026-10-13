// Outline geometry the startup contract check needs. Turning an outline into
// circles is the outline editor's, so it ships in that lazy chunk.
export interface AreaPoint { readonly x: number; readonly y: number }
export interface AreaOutline {
  readonly points: readonly AreaPoint[];
  readonly closed: boolean;
}

export const edgeDistance = (p: AreaPoint, a: AreaPoint, b: AreaPoint): number => {
  const dx = b.x - a.x, dy = b.y - a.y;
  const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1)));
  return Math.hypot(p.x - a.x - t * dx, p.y - a.y - t * dy);
};

const cross = (a: AreaPoint, b: AreaPoint, c: AreaPoint): number =>
  (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

export const validOutline = ({ points, closed }: AreaOutline): boolean => {
  if (points.length > 64 || (closed && points.length < 3)
    || points.some((p) => !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.abs(p.x) > 10000 || Math.abs(p.y) > 10000)) return false;
  const count = closed ? points.length : points.length - 1;
  for (let i = 0; i < count; i++) {
    const a = points[i]!, b = points[(i + 1) % points.length]!;
    if (Math.hypot(a.x - b.x, a.y - b.y) < .01) return false;
    for (let j = i + 2; j < count; j++) {
      if (closed && i === 0 && j === count - 1) continue;
      const c = points[j]!, d = points[(j + 1) % points.length]!;
      if (Math.min(edgeDistance(a, c, d), edgeDistance(b, c, d), edgeDistance(c, a, b), edgeDistance(d, a, b)) < .00001
        || (cross(a, b, c) * cross(a, b, d) < 0 && cross(c, d, a) * cross(c, d, b) < 0)) return false;
    }
  }
  return !closed || Math.abs(points.reduce((sum, a, i) => {
    const b = points[(i + 1) % points.length]!;
    return sum + a.x * b.y - b.x * a.y;
  }, 0)) > .01;
};
