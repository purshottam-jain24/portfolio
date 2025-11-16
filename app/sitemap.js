import { glob } from "glob";
import path from "path";

export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://purshottam.is-a.dev";

  const pageFiles = glob.sync("app/**/page.jsx");

  const routes = pageFiles
    .map((file) => path.dirname(file).replace("app", ""))
    .map((route) => route.replace(/\\/g, "/"))
    .map((route) => route.replace(/^\/+/, ""))
    .filter((route) => !route.includes("["))
    .map((route) => route || "");

  const urls = routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return urls;
}
