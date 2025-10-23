import { glob } from "glob";
import path from "path";

export default function sitemap(req) {
  const baseUrl =
    req?.headers?.origin ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:3000";

  const pages = glob
    .sync("app/**/page.jsx")
    .map((file) => path.dirname(file).replace("app", ""))
    .map((route) => route.replace(/\\/g, "/"))
    .map((route) => route.replace(/^\/+/, ""))
    .filter((route) => !route.includes("["));

  const urls = pages.map((route) => ({
    url: route === "" ? baseUrl : `${baseUrl}/${route}`,
    lastModified: new Date(),
  }));

  return urls;
}
