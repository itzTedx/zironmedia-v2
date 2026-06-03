import Image from "next/image";
import Link from "next/link";

import { Noise } from "@/components/shared/noise";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

export const CtaBanner = () => {
	return (
		<section className="not-prose container py-12">
			<div className="mask-origin-content mask-auto mask-[url(/images/cta-mask.svg)] mask-no-repeat mask-center relative overflow-hidden rounded-3xl bg-linear-to-b from-brand-500 to-80% to-brand-secondary-400 p-12 text-center text-white md:p-20">
				<Noise className="opacity-20" />
				<Badge className="bg-card" variant="outline">
					Ready to grow? We’re ready to go
				</Badge>
				<h3 className="mx-auto mt-4 mb-3 max-w-4xl text-balance font-bold text-3xl uppercase sm:text-4xl md:text-5xl lg:text-6xl">
					Ready to Grow Your Business Online?
				</h3>
				<p className="mx-auto mb-6 max-w-2xl md:text-xl">
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
					Let’s Build Your Growth Engine <IconArrowRightTag />
				</Button>
				<div className="absolute left-1/2 z-10 aspect-7/3 w-[80%] -translate-x-1/2 rounded-[calc(var(--radius-3xl)+--spacing(1.5)-1px)] border border-card/20 bg-card/10 p-1.5 md:w-[85%] md:p-2.5 2xl:w-[50%]">
					<div className="relative aspect-5/3 overflow-hidden rounded-2xl">
						<Image
							alt="Logo design showcase by Ziron pro"
							className="object-cover"
							fill
							sizes="(max-width: 1536px) 85vw, 50vw"
							src="/images/services/logo-design.jpg"
						/>
					</div>
				</div>
				<p className="relative z-50 mt-36 md:mt-52">
					Focused on growth, built for performance.
				</p>
				<div className="absolute bottom-0 left-0 z-20 h-1/3 w-full bg-linear-to-t from-brand-secondary to-[#B362FF]/0" />
			</div>
		</section>
	);
};
