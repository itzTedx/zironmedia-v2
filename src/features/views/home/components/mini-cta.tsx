import Link from "next/link";

import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { cn } from "@/lib/utils";

import { StarsBackground } from "./stars-background";

export const MiniCta = () => {
	return (
		<div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,var(--color-brand-950)_0%,#000_100%)]">
			<div className="dashed dashed-b-0 container relative z-10 flex max-w-7xl flex-col items-center justify-center gap-6 py-12 md:flex-row">
				<h4 className="text-center font-medium text-3xl text-muted">
					Ready to Grow Your Business Online?
				</h4>
				<Button render={<Link className="gap-4" href="/contact" />} size="xl">
					Book Consultation Today <IconArrowRightTag />
				</Button>
			</div>
			<StarsBackground
				className={cn("absolute inset-0 flex items-center justify-center")}
			/>
		</div>
	);
};
