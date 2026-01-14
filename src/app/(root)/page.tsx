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
				<div className="dashed dashed-x container max-w-7xl pt-12 sm:pt-16 md:pt-20">
					<Badge variant="secondary">Products</Badge>
					<h2>Smart tools built to help your business grow faster.</h2>
					<p>
						Get access to our products designed to connect, manage + scale your
						business from one ecosystem.
					</p>

					<div>
						{PRODUCTS.map((product) => (
							<div key={product.id}>{product.title}</div>
						))}
					</div>
				</div>
			</section>
			<Blogs />
		</main>
	);
}
