import { MetadataRoute } from "next";
import { locations } from "@/lib/location-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.estatesaleandcleanouts.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic location pages
  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...locationPages];
}

