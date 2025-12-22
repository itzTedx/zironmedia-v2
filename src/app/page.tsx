import { Badge } from "@/components/ui/badge";

export default function Home() {
	return (
		<main>
			<section>
				<div className="mx-auto flex max-w-6xl flex-col items-center gap-4 py-24">
					<Badge>
						<div className="size-1.5 rounded-full bg-violet-500" /> Ready to
						grow? We’re ready to go
					</Badge>
					<h1 className="text-center font-bold font-display text-8xl uppercase">
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
				</div>
			</section>
		</main>
	);
}
