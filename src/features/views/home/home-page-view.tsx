import { Blogs } from "@/features/articles/views/blogs";
import { Achievements } from "@/features/views/home/achievements";
import { CtaBanner } from "@/features/views/home/cta-banner";
import { Experts } from "@/features/views/home/experts";
import { FAQ } from "@/features/views/home/faq";
import { Hero } from "@/features/views/home/hero";
import { Process } from "@/features/views/home/process";
import { Services } from "@/features/views/home/services";
import { Video } from "@/features/views/home/video";
import { VideoReel } from "@/features/views/home/video-reel";
import { WhyUs } from "@/features/views/home/why-us";

export function HomePageView() {
	return (
		<main>
			<Hero />
			<Achievements />
			<Services />
			<Process />
			<VideoReel />
			<WhyUs />
			<Experts />
			<Blogs />
			<FAQ />
			<CtaBanner />
			<Video />
		</main>
	);
}
