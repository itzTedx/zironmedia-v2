import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import fs from "fs";
import path from "path";

import MDXContent from "@/components/markdown/mdx-component";
import { Noise } from "@/components/shared/noise";
import { Button } from "@/components/ui/button";

import { getServiceBySlug } from "@/features/services/actions/query";
import { Faq, FaqContent } from "@/features/services/components/faq";
import { ImageGalley } from "@/features/services/components/image-gallery";
import { Section } from "@/features/services/components/section";
import { Cta } from "@/features/views/cta";
import { cn } from "@/lib/utils";

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
			<header className="dashed dashed-b relative w-full">
				<div className="dashed dashed-x container relative z-20 flex h-full flex-col justify-end space-y-6 py-12">
					<h1 className="font-semibold text-4xl text-primary tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl">
						{service.metadata.title}
					</h1>
					<div className="grid grid-cols-[1fr_0.5fr]">
						<p className="text-balance font-medium text-muted-foreground text-xl">
							{service.metadata.description}
						</p>
						<div>
							<Button>Book a call</Button>
						</div>
					</div>
					<div className="relative mt-6 aspect-video overflow-hidden rounded-3xl">
						<Image
							alt={service.metadata.title}
							className="pointer-events-none object-cover"
							fill
							src={service.metadata.image}
						/>
					</div>
				</div>
				<div className="absolute inset-x-0 bottom-0 z-10 mb-px h-3/4 bg-linear-to-t from-card" />
				<div className="absolute inset-x-0 top-0 z-10 h-3/4 bg-linear-to-b from-card" />
				<Noise />
			</header>

			<article className="prose prose-stone [&>div]:dashed [&>div]:dashed-x prose-xl max-w-none prose-a:text-primary prose-a:underline [&>div]:container [&>div]:py-12">
				<MDXContent
					components={{
						a: (props) => <Link {...props} />,
						hr: (props) => (
							<hr className="dashed border-transparent" {...props} />
						),
						Cta,
						Faq,
						FaqContent,
						Image: (props) => (
							<Image
								{...props}
								className={cn(
									"rounded-2xl transition-transform hover:-translate-y-2",
									props.className
								)}
							/>
						),
						ImageGalley,
						Section,
					}}
					source={service.content}
				/>
			</article>
		</div>
	);
}
