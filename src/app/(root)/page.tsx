import { Articles } from "@/features/articles/views/articles";
import { Achievements } from "@/features/views/home/achievements";
import { Feedback } from "@/features/views/home/feedback";
import { Hero } from "@/features/views/home/hero";
import { Services } from "@/features/views/home/services";
import { VideoReel } from "@/features/views/home/video-reel";
import { WhyUs } from "@/features/views/home/why-us";

export default function Home() {
	return (
		<main>
			<Hero />
			<Feedback />

			<Achievements />

			<Services />

			<VideoReel />
			<WhyUs />
			<Articles />
		</main>
	);
}
