import dynamic from "next/dynamic";

import { Blogs } from "@/features/articles/views/blogs";
import { Achievements } from "@/features/views/home/achievements";
import { Feedback } from "@/features/views/home/feedback";
import { Hero } from "@/features/views/home/hero";
import { Services } from "@/features/views/home/services";
import { VideoReel } from "@/features/views/home/video-reel";
import { WhyUs } from "@/features/views/home/why-us";

const Video = dynamic(() =>
	import("@/features/views/home/video").then((mod) => mod.Video)
);

export default function Home() {
	return (
		<main>
			<Hero />
			<Feedback />

			<Achievements />

			<Services />

			<VideoReel />
			<WhyUs />
			<Blogs />
		</main>
	);
}
