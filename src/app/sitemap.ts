import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

const routes = [
  "/",
  "/about",
  "/projects",
  "/skills",
  "/education",
  "/experience",
  "/resume",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
