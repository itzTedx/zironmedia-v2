import Link from "next/link";
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
			<header>
				{/* <div className="relative aspect-video h-12">
					<Image
						alt={service.metadata.title}
						fill
						src={service.metadata.image}
					/>
				</div> */}
			</header>
			<section className="py-12">
				<article className="prose prose-stone max-w-none prose-a:text-primary prose-a:underline">
					<MDXContent
						components={{
							a: (props) => <Link {...props} />,
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
