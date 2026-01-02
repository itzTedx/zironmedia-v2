import { notFound } from "next/navigation";

import fs from "fs";
import path from "path";

import MDXContent from "@/components/markdown/mdx-component";

import { getServiceBySlug } from "@/features/services/actions/query";
import { Faq, FaqContent } from "@/features/services/components/faq";

export async function generateStaticParams() {
	const contentDir = path.join(process.cwd(), "src/content/services");
	const categories = fs.readdirSync(contentDir);

	const params: { category: string; slug: string }[] = [];

	categories.forEach((category) => {
		const files = fs.readdirSync(path.join(contentDir, category));
		files.map((file) => {
			params.push({
				category,
				slug: file.replace(".mdx", ""),
			});
		});
	});

	return params;
}

export default async function ServicePage({
	params,
}: PageProps<"/services/[category]/[slug]">) {
	const { category, slug } = await params;
	const service = getServiceBySlug(category, slug);

	if (!service) return notFound();

	return (
		<div>
			<header />
			<section className="py-12">
				<article className="prose prose-stone max-w-none">
					<MDXContent
						components={{
							Faq,
							FaqContent,
						}}
						source={service.content}
					/>
				</article>
			</section>
		</div>
	);
}
