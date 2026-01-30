import Link from "next/link";

import { Noise } from "@/components/shared/noise";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";
import { IconClock } from "@/assets/icons/clock";
import { IconPlay } from "@/assets/icons/play";

export const Hero = () => {
	return (
		<section className="dashed dashed-x relative mx-auto max-w-7xl">
			<Noise className="opacity-50" />
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 md:px-0 md:py-16">
				<Badge className="gap-2 uppercase tracking-normal">
					Dubai Digital Marketing Agency Driving Revenue Growth
				</Badge>
				{/* 
				<Badge className="gap-2 uppercase tracking-normal">
					<div className="size-1.5 rounded-full bg-violet-500" /> Ready to grow?
					We’re ready to go
				</Badge> */}
				<h2 className="text-center font-black font-display text-4xl text-primary uppercase md:text-6xl lg:text-8xl">
					Turn your brand into a revenue machine
				</h2>
				<p className="text-balance text-center font-medium text-lg text-muted-foreground leading-relaxed md:text-xl">
					We’re your full-stack creative & digital marketing partner from{" "}
					<span className="text-foreground">
						branding to websites, CRM software, social media, printing,
						corporate gifts,
					</span>{" "}
					and everything in between.
				</p>

				<div className="relative z-99 flex w-full items-center gap-4 md:w-auto">
					<Button
						asChild
						className="group w-full flex-1 justify-between gap-2 md:w-60"
						size="lg"
					>
						<Link href="/services">
							<span>
								Get started{" "}
								<span className="hidden font-normal text-primary-secondary md:inline">
									- it’s free
								</span>
							</span>
							<IconArrowRightTag className="size-5 transition-transform duration-300 ease-in group-hover:translate-x-1" />
						</Link>
					</Button>
					<Button
						asChild
						className="group justify-between md:w-52"
						size="lg"
						variant="outline"
					>
						<Link href="/our-works">
							<span>See us in action</span>
							<IconPlay className="hidden size-5 transition-transform duration-300 ease-in group-hover:translate-x-1 md:inline" />
						</Link>
					</Button>
				</div>
			</div>

			<ul className="dashed dashed-t flex flex-col items-center text-lg md:flex-row">
				<li className="dashed dashed-b md:dashed-b-0 flex w-full items-center justify-center gap-2 p-6">
					<div className="flex size-12 items-center justify-center rounded-lg bg-muted/20">
						<IconClock className="size-8" />
					</div>
					<p>48 Hours Delivery</p>
				</li>
				<li className="dashed dashed-b md:dashed-b-0 md:dashed-x flex w-full items-center justify-center gap-2 p-6">
					<div className="flex size-12 items-center justify-center rounded-lg bg-muted/20">
						<IconClock className="size-8" />
					</div>
					<p>One Partner for Digital & Print</p>
				</li>
				<li className="flex w-full items-center justify-center gap-2 p-6">
					<div className="flex size-12 items-center justify-center rounded-lg bg-muted/20">
						<IconClock className="size-8" />
					</div>
					<p>Scalable Creative Support</p>
				</li>
			</ul>
		</section>
	);
};
