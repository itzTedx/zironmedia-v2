import Image from "next/image";

import { Noise } from "@/components/shared/noise";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { cn } from "@/lib/utils";

import { ARTICLES } from "../data/constants";

export const Articles = () => {
	return (
		<section className="dashed dashed-y relative py-14">
			<header className="mx-auto mb-14 flex max-w-7xl items-center justify-between">
				<h2 className="font-display font-semibold text-5xl tracking-tight">
					Learn and Get Inspired
				</h2>
				<Button className="w-40 justify-between bg-foreground shadow-button-neutral">
					More articles <IconArrowRightTag className="size-5" />
				</Button>
			</header>

			<div className="mx-auto grid max-w-7xl grid-cols-3 gap-4">
				{ARTICLES.map((article) => (
					<div className="group/article" key={article.id}>
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
				))}
			</div>

			<div className="absolute inset-x-0 top-0 -z-10 h-1/4 bg-linear-180 from-white" />
			<div className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-linear-0 from-white" />
		</section>
	);
};
