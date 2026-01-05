import { Metadata } from "next";
import Link from "next/link";

import MDXContent from "@/components/markdown/mdx-component";

import { getBlogBySlug, getBlogs } from "@/features/articles/actions/query";
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
		<div>
			<section className="py-9">
				<article className="prose prose-stone prose-lg mx-auto max-w-prose prose-a:text-primary prose-a:underline">
					<MDXContent
						components={{ a: (props) => <Link {...props} />, Faq, FaqContent }}
						source={blog.content}
					/>
				</article>
			</section>
		</div>
	);
}
