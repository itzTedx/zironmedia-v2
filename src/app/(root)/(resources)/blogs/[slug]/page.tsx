import MDXContent from "@/components/markdown/mdx-component";

import { getBlogBySlug } from "@/features/articles/actions/query";
import { Faq, FaqContent } from "@/features/services/components/faq";
import Link from "next/link";

export default async function BlogPage({ params }: PageProps<"/blogs/[slug]">) {
	const { slug } = await params;

	const blog = getBlogBySlug(slug);
	 
	return (
		<div>
			<section className="py-9">			 
				<article className="prose prose-stone prose-lg mx-auto max-w-prose prose-a:text-primary prose-a:underline">
					<MDXContent source={blog.content} components={{a: (props) => <Link {...props}  />, Faq, FaqContent}}/>
				</article>
			</section>
		</div>
	);
}
