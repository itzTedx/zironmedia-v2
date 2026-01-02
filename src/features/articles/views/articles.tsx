import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { getArticles } from "../actions/query";
import { ArticleCard } from "../components/article-card";

export const Articles = () => {
	const articles = getArticles({ limit: 3 });
	return (
		<section className="dashed dashed-y relative py-9 md:py-14">
			<header className="mx-auto mb-6 flex max-w-7xl flex-col gap-3 px-6 md:mb-14 md:flex-row md:items-center md:justify-between md:px-0">
				<h2 className="font-display font-semibold text-3xl tracking-tight md:text-5xl">
					Learn and Get Inspired
				</h2>
				<Button className="w-40 justify-between bg-foreground shadow-button-neutral">
					More articles <IconArrowRightTag className="size-5" />
				</Button>
			</header>

			<div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 md:px-0">
				{articles.map((article) => (
					<ArticleCard article={article} key={article.slug} />
				))}
			</div>

			<div className="absolute inset-x-0 top-0 -z-10 h-1/4 bg-linear-180 from-white" />
			<div className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-linear-0 from-white" />
		</section>
	);
};
