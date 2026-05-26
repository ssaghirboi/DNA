import type { MetadataRoute } from "next";

// TODO: replace with production domain when deployed
const BASE_URL = "https://www.yourdomain.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
