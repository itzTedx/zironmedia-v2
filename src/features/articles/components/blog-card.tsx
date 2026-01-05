import Image from "next/image";
import Link from "next/link";

import { Noise } from "@/components/shared/noise";

import { cn } from "@/lib/utils";

import { BlogMetadata } from "../actions/types";

export const BlogCard = ({
	blog,
	index,
}: {
	blog: BlogMetadata;
	index?: number;
}) => {
	return (
		<Link
			className={cn(
				"group/blog relative h-fit",
				index === 0 && "order-3",
				index === 2 && "order-1",
				blog.isFeatured && "order-2"
			)}
			href={`/blogs/${blog.slug}`}
		>
			<div
				className={cn(
					"relative overflow-hidden rounded-2xl",
					blog.isFeatured ? "aspect-4/5" : "aspect-5/4"
				)}
			>
				<Noise />
				<Image
					alt={blog.title}
					className="object-cover transition-[scale] group-hover/blog:scale-110"
					fill
					src={blog.image}
				/>
			</div>
			<h3 className="p-3 font-medium text-2xl tracking-tight">{blog.title}</h3>
		</Link>
	);
};
