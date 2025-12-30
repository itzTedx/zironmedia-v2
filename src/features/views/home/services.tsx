import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { ServicesLists } from "./components/service-list";

export const Services = () => {
	return (
		<section className="relative">
			<header className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row md:px-0 md:py-16">
				<h2 className="shrink-0 text-center font-display font-semibold text-4xl uppercase tracking-tight md:text-left md:text-6xl lg:text-8xl">
					With our services
				</h2>
				<p className="max-w-2xs text-balance text-center text-muted-foreground md:text-right">
					We help you achieve more at every stage of business growth.
				</p>
			</header>

			<ServicesLists />

			<div className="flex items-center justify-center py-12">
				<Button className="text-muted-foreground" variant="secondary">
					Build your vision with us <IconArrowRightTag />
				</Button>
			</div>
			<div className="absolute inset-x-0 top-0 -z-10 h-1/4 bg-linear-180 from-white" />
			<div className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-linear-0 from-white" />
		</section>
	);
};
