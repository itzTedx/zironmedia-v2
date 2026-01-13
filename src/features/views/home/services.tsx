import Link from "next/link";

import { ServicesStickyCards } from "@/components/layout/sticky-card";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

export const Services = () => {
	return (
		<section className="relative">
			<header className="relative z-10 mx-auto max-w-7xl px-6 py-12 text-center md:px-0 md:py-28">
				<h2 className="shrink-0 font-bold font-display text-4xl text-primary tracking-tight md:text-6xl">
					With our services
				</h2>
				<p className="mx-auto mt-3 max-w-2xs text-balance text-muted-foreground text-xl">
					We help you achieve more at every stage of business growth.
				</p>
			</header>

			<ServicesStickyCards />
			{/* <ServicesLists /> */}

			<div className="flex items-center justify-center pb-9 md:py-12">
				<Button asChild className="text-muted-foreground" variant="secondary">
					<Link href="/services">
						Build your vision with us <IconArrowRightTag />
					</Link>
				</Button>
			</div>
			<div className="absolute inset-x-0 top-0 -z-10 h-1/4 bg-linear-180 from-white" />
			<div className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-linear-0 from-white" />
		</section>
	);
};
