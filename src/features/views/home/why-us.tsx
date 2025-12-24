import { Frame } from "@/components/ui/frame";

import { Wordmark } from "@/assets/logo";

export const WhyUs = () => {
	return (
		<section className="dashed dashed-b-0 mx-auto max-w-7xl">
			<header className="dashed dashed-b space-y-3 p-14 text-center">
				<h2 className="font-display font-semibold text-6xl tracking-tight">
					Why choose us
				</h2>
				<p className="mx-auto max-w-md text-balance">
					Check out what Ziron Media offers vs employees and other agencies.
					It’s quite a lot!
				</p>
			</header>
			<div className="mx-auto max-w-6xl py-14">
				<div className="grid grid-cols-4 gap-4 pb-3">
					<div />
					<div>
						<Wordmark />
					</div>
					<p>In-House Team</p>
					<p>Other Agencies</p>
				</div>

				<Frame>
					<div className="rounded-3xl bg-background shadow-sm">Cost</div>
				</Frame>
			</div>
			<div className="dashed dashed-t mx-auto max-w-7xl p-9" />
		</section>
	);
};
