import { Header } from "@/components/shared/header";

import { IndustriesCarousel } from "./components/industries-carousel";

export function Industries() {
	return (
		<section>
			<Header
				description="From real estate to startups, we deliver performance-driven growth solutions tailored to your industry dynamics across Abu Dhabi, Dubai, and the UAE."
				title="Industries We Serve"
			/>

			<div className="dashed dashed-x container max-w-7xl pb-12 md:pb-16 lg:pb-20">
				<IndustriesCarousel />
			</div>
		</section>
	);
}
