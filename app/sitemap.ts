import type { MetadataRoute } from "next";

const baseUrl = "https://n12oyan.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/home",
    "/sales",
    "/inventory",
    "/employees",
    "/reports",
    "/settings/dashboard",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));
}
