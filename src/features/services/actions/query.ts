import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { SERVICES } from "@/features/services/constant";

import { ServiceMetadata } from "./types";

export function findServiceBySlug(slug: string) {
	return SERVICES.find((service) => service.slug === slug);
}

const root = (category: string) =>
	path.join(process.cwd(), "src", "content", "services", category);

export function getServiceBySlug(category: string, slug: string) {
	try {
		const filePath = path.join(root(category), `${slug}.mdx`);
		const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
		const { data, content } = matter(fileContent);

		const metadata = data as ServiceMetadata;

		return {
			metadata: {
				...metadata,
				slug,
			},
			content,
		};
	} catch {
		return null;
	}
}
