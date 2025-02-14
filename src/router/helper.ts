export function matchRoute(route: string, path: string): boolean {
  const regex = new RegExp(`^${route.replace(/:[^/]+/g, "[^/]+")}$`);
  return regex.test(path);
}
