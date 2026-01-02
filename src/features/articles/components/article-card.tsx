import Image from "next/image";

import { Noise } from "@/components/shared/noise";

import { cn } from "@/lib/utils";

import { ArticleMetadata } from "../actions/types";

export const ArticleCard = ({ article }: { article: ArticleMetadata }) => {
	return (
		<div className="group/article">
			<div
				className={cn(
					"relative overflow-hidden rounded-2xl",
					article.isFeatured ? "aspect-4/5" : "aspect-5/4"
				)}
			>
				<Noise />
				<Image
					alt=""
					className="object-cover transition-[scale] group-hover/article:scale-110"
					fill
					src={article.image}
				/>
			</div>
			<h3 className="p-3 font-medium text-2xl">{article.title}</h3>
		</div>
	);
};
