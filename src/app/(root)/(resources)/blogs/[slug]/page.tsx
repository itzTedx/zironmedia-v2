import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import MDXContent from "@/components/markdown/mdx-component";
import { Badge } from "@/components/ui/badge";

import { getBlogBySlug, getBlogs } from "@/features/articles/actions/query";
import { Blogs } from "@/features/articles/views/blogs";
import { Faq, FaqContent } from "@/features/services/components/faq";

export function generateStaticParams() {
	const blogs = getBlogs();
	return blogs.map((b) => ({
		slug: b.slug,
	}));
}

export async function generateMetadata({
	params,
}: PageProps<"/blogs/[slug]">): Promise<Metadata> {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);

	return {
		title: `${blog.metadata.title} - Ziron Media`,
		description: blog.metadata.description,
	};
}

export default async function BlogPage({ params }: PageProps<"/blogs/[slug]">) {
	const { slug } = await params;

	const blog = getBlogBySlug(slug);

	return (
		<main>
			<header>
				<div className="dashed dashed-x container space-y-12 py-12">
					<div className="mx-auto grid max-w-4xl">
						<div className="col-span-2 space-y-3">
							<div className="flex items-center gap-3">
								<time
									className="font-medium tracking-tight"
									dateTime={blog.metadata.date}
								>
									{blog.metadata.date}
								</time>
								<div className="size-1.5 rounded-full bg-brand-secondary" />{" "}
								<p className="text-muted-foreground">6 min read</p>
							</div>
							<h1 className="text-balance font-display font-semibold text-4xl text-primary uppercase sm:text-5xl md:text-6xl">
								{blog.metadata.title}
							</h1>
							<div className="flex flex-wrap gap-3 md:gap-4">
								{blog.metadata.tags.map((tag) => (
									<Badge key={tag}>
										<span className="size-1 rounded-full bg-brand-secondary" />{" "}
										{tag}
									</Badge>
								))}
							</div>
							<p className="font-medium text-lg text-muted-foreground md:text-xl">
								{blog.metadata.description}
							</p>
						</div>
					</div>
				</div>
				<div className="dashed dashed-y relative py-12">
					<div className="container">
						<div className="relative z-10 aspect-7/3 overflow-hidden rounded-2xl shadow-sm">
							<Image
								alt={blog.metadata.title}
								className="object-cover"
								fill
								src={blog.metadata.image}
							/>
						</div>
					</div>
					<div className="pointer-events-none absolute inset-0 mb-px bg-linear-0 from-white" />
				</div>
			</header>
			<section className="dashed dashed-x container grid py-12">
				<article className="prose prose-stone prose-lg mx-auto max-w-prose prose-hr:border-muted/60 prose-a:text-primary prose-a:underline">
					<MDXContent
						components={{ a: (props) => <Link {...props} />, Faq, FaqContent }}
						source={blog.content}
					/>
				</article>
			</section>
			<Blogs />
		</main>
	);
}
