import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { root } from "@/lib/root-mdx";

import { ArticleMetadata } from "./types";

export function getArticles({ limit }: { limit?: number }): ArticleMetadata[] {
	const files = fs.readdirSync(root("blogs"));

	let products = files.map((file) => getArticleMetadata(file));

	if (limit) {
		return products.slice(0, limit);
	}

	return products;
}

export function getArticleMetadata(
	filepath: string
): ArticleMetadata & { slug: string } {
	const slug = filepath.replace(/\.mdx$/, "");

	const filePath = path.join(root("blogs", filepath));

	const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
	const { data } = matter(fileContent);

	const metadata = data as ArticleMetadata;

	return { ...metadata, slug };
}
