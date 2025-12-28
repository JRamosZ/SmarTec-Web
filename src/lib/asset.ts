export function asset(path: string) {
  const isProd = process.env.WEB_SMARTEC_PROD === "true";
  if (isProd && path.startsWith("/")) return path.slice(1);
  return path;
}
