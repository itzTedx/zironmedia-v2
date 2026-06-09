import Image from "next/image";
import Link from "next/link";

import { Noise } from "@/components/shared/noise";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

export const CtaBanner = () => {
	return (
		<section className="group relative overflow-hidden bg-linear-to-b from-brand-400 to-80% to-brand-500">
			<div className="mx-auto grid max-w-7xl grid-cols-2 py-12">
				<Noise className="opacity-20" />

				<div className="relative z-30 max-w-4xl">
					<Badge
						className="border-muted-foreground/40! border-dashed text-muted-foreground shadow-none"
						variant="outline"
					>
						Ready to grow? We’re ready to go
					</Badge>
					<h2 className="mt-4 mb-3 text-balance font-bold font-display text-3xl uppercase sm:text-4xl md:text-5xl">
						Ready to Grow Your Business Online?
					</h2>
					<p className="mb-6 text-lg md:text-xl">
						If you’re looking for a digital marketing agency in Abu Dhabi, small
						business brands, offering SEO services Dubai affordable, paid ads,
						content, and social media, we’re here to help you scale.
					</p>
					<Button
						className="mb-12 justify-between md:w-72"
						data-label="CTA - Get in touch"
						data-location="rich_cta_block"
						data-track="cta_click"
						render={<Link className="gap-4" href="/contact" />}
						variant="secondary"
					>
						<h2 className="inline font-inherit text-inherit">
							Let’s Build Your Growth Engine
						</h2>{" "}
						<IconArrowRightTag />
					</Button>
				</div>
				<div className="squircle absolute -right-24 z-10 aspect-5/3 h-full rounded-[calc(var(--radius-3xl)+--spacing(2)-1px)] border border-card/20 bg-card/10 p-2">
					<div className="squircle relative aspect-5/3 overflow-hidden rounded-3xl">
						<Image
							alt="Logo design showcase by Ziron pro"
							className="object-cover"
							fill
							sizes="(max-width: 1536px) 85vw, 50vw"
							src="/images/services/logo-design.jpg"
						/>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 z-20 h-1/2 w-full bg-linear-to-t from-brand-500 to-[#B362FF]/0" />
			</div>
		</section>
	);
};
