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
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-4 py-16">
				<Badge className="gap-2">
					<div className="size-1.5 rounded-full bg-violet-500" /> Ready to grow?
					We’re ready to go
				</Badge>
				<h1 className="text-center font-bold font-display text-8xl text-primary uppercase">
					Turn your brand into a revenue machine
				</h1>
				<p className="text-balance text-center text-muted-foreground text-xl leading-relaxed">
					We’re your full-stack creative & digital marketing partner from{" "}
					<span className="text-foreground">
						branding to websites, CRM software, social media, printing,
						corporate gifts,
					</span>{" "}
					and everything in between.
				</p>

				<div className="relative z-99 flex items-center gap-4">
					<Button className="w-60 justify-between" size="lg">
						<span>
							Get started{" "}
							<span className="font-normal text-primary-secondary">
								- it’s free
							</span>
						</span>
						<IconArrowRightTag className="size-5" />
					</Button>
					<Button
						className="w-52 justify-between text-muted-foreground"
						size="lg"
						variant="secondary"
					>
						<span>See us in action</span>
						<IconPlay className="size-5" />
					</Button>
				</div>
			</div>

			<ul className="dashed dashed-t flex items-center text-lg">
				<li className="flex w-full items-center justify-center gap-2 p-6">
					<div className="flex size-12 items-center justify-center rounded-lg bg-muted/20">
						<IconClock className="size-8" />
					</div>
					48 Hours Delivery
				</li>
				<li className="dashed dashed-x flex w-full items-center justify-center gap-2 p-6">
					<div className="flex size-12 items-center justify-center rounded-lg bg-muted/20">
						<IconClock className="size-8" />
					</div>
					One Partner for Digital & Print
				</li>
				<li className="flex w-full items-center justify-center gap-2 p-6">
					<div className="flex size-12 items-center justify-center rounded-lg bg-muted/20">
						<IconClock className="size-8" />
					</div>
					Scalable Creative Support
				</li>
			</ul>
		</section>
	);
};
