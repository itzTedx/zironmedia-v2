import { notFound } from "next/navigation";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { root } from "@/lib/root-mdx";

import { Blog, BlogMetadata } from "./types";

export function getBlogs(limit?: number): BlogMetadata[] {
	const files = fs.readdirSync(root("blogs"));

	let products = files.map((file) => getBlogMetadata(file));

	if (limit) {
		return products.slice(0, limit);
	}

	return products;
}

export function getBlogBySlug(slug: string): Blog {
	try {
		const filePath = path.join(root("blogs"), `${slug}.mdx`);
		const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
		const { data, content } = matter(fileContent);

		const metadata = data as BlogMetadata;

		return { metadata: { ...metadata, slug }, content };
	} catch {
		return notFound();
	}
}

export function getBlogMetadata(
	filepath: string
): BlogMetadata & { slug: string } {
	const slug = filepath.replace(/\.mdx$/, "");

	const filePath = path.join(root("blogs", filepath));

	const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
	const { data } = matter(fileContent);

	const metadata = data as BlogMetadata;

	return { ...metadata, slug };
}
