import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";
import { IconPlay } from "@/assets/icons/play";

export default function Home() {
	return (
		<main>
			<section className="mx-auto max-w-7xl border-x">
				<div className="mx-auto flex max-w-6xl flex-col items-center gap-4 py-24">
					<Badge className="gap-2">
						<div className="size-1.5 rounded-full bg-violet-500" /> Ready to
						grow? We’re ready to go
					</Badge>
					<h1 className="text-center font-bold font-display text-8xl text-primary uppercase">
						Turn your brand into a revenue machine
					</h1>
					<p className="text-balance text-center font-medium text-2xl text-muted-foreground leading-relaxed">
						We’re your full-stack creative & digital marketing partner from{" "}
						<span className="text-foreground">
							branding to websites, CRM software, social media, printing,
							corporate gifts,
						</span>{" "}
						and everything in between.
					</p>

					<div className="flex items-center gap-4">
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

				<div />
			</section>
		</main>
	);
}
