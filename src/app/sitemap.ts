import { MetadataRoute } from "next";

const LAST_MODIFIED = new Date("2024-01-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://album-giveaway.vercel.app",
      lastModified: LAST_MODIFIED,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://album-giveaway.vercel.app/about",
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
