import { PRODUCTS } from "@/components/layout/data/constants";
import { Badge } from "@/components/ui/badge";

import { Blogs } from "@/features/articles/views/blogs";
import { Achievements } from "@/features/views/home/achievements";
import { Feedback } from "@/features/views/home/feedback";
import { Hero } from "@/features/views/home/hero";
import { Services } from "@/features/views/home/services";
import { VideoReel } from "@/features/views/home/video-reel";
import { WhyUs } from "@/features/views/home/why-us";

// const Video = dynamic(() =>
// 	import("@/features/views/home/video").then((mod) => mod.Video)
// );

export default function Home() {
	return (
		<main>
			<Hero />
			<Feedback />

			<Achievements />

			<Services />

			<VideoReel />
			<WhyUs />
			<section className="dashed dashed-t">
				<div className="dashed dashed-x container max-w-7xl flex-col items-center justify-center pt-12 sm:pt-16 md:pt-20">
					<div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 text-center">
						<Badge variant="secondary">Products</Badge>
						<h2 className="font-bold text-6xl text-primary">
							Smart tools built to help your business grow faster.
						</h2>
						<p className="mt-3 text-balance text-xl">
							Get access to our products designed to connect, manage + scale
							your business from one ecosystem.
						</p>
					</div>

					<div className="mt-9 flex items-end justify-center gap-4">
						{PRODUCTS.map((product) => {
							const Icon = product.icon!;
							return (
								<div
									className="relative flex flex-col items-center rounded-t-xl px-9 py-6 text-card transition-transform hover:-translate-y-4 data-[product=crm]:bg-yellow-300/80 data-[product=tap]:bg-blue-500 data-[product=crm]:text-foreground"
									data-product={product.id}
									key={product.id}
								>
									<Icon />
									<h3>{product.title}</h3>

									<p>{product.description}</p>
								</div>
							);
						})}
						<div className="relative rounded-t-xl bg-card p-6 px-9 py-6 transition-transform hover:-translate-y-4">
							Coming Soon
						</div>
					</div>
				</div>
			</section>
			<Blogs />
		</main>
	);
}
