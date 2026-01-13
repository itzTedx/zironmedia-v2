import Link from "next/link";

import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

export default function WorksPage() {
	return (
		<main>
			<header>
				<div className="dashed dashed-x container mx-auto grid max-w-7xl grid-cols-2 gap-12 py-12">
					<h1 className="font-semibold text-7xl text-primary">
						A closer look at our recent work.
					</h1>
					<div className="space-y-3">
						<p className="text-muted-foreground text-xl">
							Here’s a look at what we’ve been building with our clients. Every
							project is different, but what stays the same is the craft, speed,
							and thinking process behind it.
						</p>
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
					</div>
				</div>
			</header>
		</main>
	);
}
