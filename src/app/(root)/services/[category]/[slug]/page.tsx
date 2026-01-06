import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import fs from "fs";
import path from "path";

import MDXContent from "@/components/markdown/mdx-component";
import { Noise } from "@/components/shared/noise";

import { getServiceBySlug } from "@/features/services/actions/query";
import { Faq, FaqContent } from "@/features/services/components/faq";
import { Section } from "@/features/services/components/section";
import { Cta } from "@/features/views/cta";

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
			<header className="relative w-full md:h-[calc(100svh-3.75rem)]">
				<div className="dashed dashed-x container relative z-20 flex h-full flex-col justify-end space-y-6 py-20">
					<h1 className="font-medium text-4xl text-card sm:text-5xl md:text-6xl lg:text-7xl">
						{service.metadata.title}
					</h1>
					<p className="text-balance font-medium text-muted text-xl">
						{service.metadata.description}
					</p>
				</div>
				<div className="absolute inset-x-0 bottom-0 z-10 h-3/4 bg-linear-to-t from-foreground" />
				<Noise />
				<Image
					alt={service.metadata.title}
					className="pointer-events-none object-cover"
					fill
					src={service.metadata.image}
				/>
			</header>

			<article className="prose prose-stone [&>div]:dashed [&>div]:dashed-x prose-xl max-w-none prose-a:text-primary prose-a:underline [&>div]:container [&>div]:py-12">
				<MDXContent
					components={{
						a: (props) => <Link {...props} />,
						Cta,
						Faq,
						FaqContent,
						Section,
					}}
					source={service.content}
				/>
			</article>
		</div>
	);
}
