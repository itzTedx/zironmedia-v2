import type { MetadataRoute } from "next";

import { BASE_URL } from "@/data/site-config";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/test/", "/api/", "/health"],
		},
		sitemap: `${BASE_URL}/sitemap.xml`,
	};
}
