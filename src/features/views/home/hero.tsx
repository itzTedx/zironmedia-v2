import Link from "next/link";

import { Noise } from "@/components/shared/noise";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Featured } from "./featured";

interface HeroProps {
	badgeLabel?: string;
	heading?: string;
	subheading?: string;
}

export const Hero = ({ badgeLabel, heading, subheading }: HeroProps) => {
	// const bg = "bg-[radial-gradient(ellipse_400%_240%_at_50%_100%,#fff,#fff_10%,15%,#c7c5fd_16%,rgba(154,103,250,.6)_17%,21%,#264cab_28%,35%,#00031d_45%,#00031d)]"
	const badgeNode = badgeLabel ? (
		badgeLabel
	) : (
		<>
			AI-Powered Digital Marketing & Growth Agency{" "}
			<span className="text-brand-400">in Abu Dhabi And Dubai</span>
		</>
	);

	const headingNode =
		heading ??
		"We Make Your Brand As a Revenue Machine With Top Notch Marketing Solutions in Under The Sun";

	const subheadingNode = subheading ? (
		subheading
	) : (
		<>
			As a leading digital marketing agency serving Abu Dhabi and Dubai, we help
			startups, SMEs, and enterprise brands attract the right audience, convert
			leads into customers, and build long-term brand authority.
		</>
	);

	return (
		<section className="relative bg-[radial-gradient(ellipse_400%_240%_at_50%_100%,#fff,#fff_10%,15%,#c7c5fd_16%,rgba(154,103,250,.6)_17%,21%,#264cab_28%,35%,#00031d_45%,#00031d)]">
			<Noise className="opacity-20" />
			<div className="dashed dashed-x relative mx-auto max-w-7xl">
				<div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 md:px-0 lg:py-20">
					<Badge className="h-auto min-h-7 max-w-[90vw] flex-wrap justify-center gap-2 whitespace-normal text-balance px-3 py-1.5 text-center md:max-w-none">
						<span className="size-1.5 shrink-0 rounded-full bg-brand-400" />{" "}
						<h1 className="tracking-wide">{badgeNode}</h1>
					</Badge>

					<h2 className="text-center font-bold font-display text-4xl text-primary text-shadow-[-1px_-1px_var(--color-brand-600)] uppercase md:text-5xl lg:text-6xl">
						{headingNode}
					</h2>
					<p className="text-balance text-center font-medium text-muted leading-relaxed sm:text-lg md:text-xl">
						{subheadingNode}
					</p>

					<div className="relative z-99 flex w-full flex-col items-start gap-4 sm:flex-row md:w-auto">
						<Button
							className="group h-auto w-full justify-between gap-4 whitespace-normal py-3 text-left duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:px-6 sm:w-auto sm:py-0 sm:text-center"
							data-label="Hero - Book Consultation"
							data-location="hero_primary"
							data-track="cta_click-hero-book_a_call"
							render={<Link href="/contact" />}
							size="lg"
						>
							{/* <PhoneIcon className="size-5 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-x-3" /> */}
							<span>Book Growth Consultation Today</span>
						</Button>

						<Button
							className="group w-full bg-card text-secondary duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:px-6 sm:w-auto"
							data-label="Hero - See us in action"
							data-location="hero_secondary"
							data-track="cta_click-hero-see_us_in_action"
							render={<Link href="/our-works" />}
							size="lg"
							variant="ghost"
						>
							<span>See us in action</span>
						</Button>
					</div>
				</div>
			</div>
			<Featured />
		</section>
	);
};
