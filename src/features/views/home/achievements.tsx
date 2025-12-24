import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { ACHIEVEMENTS } from "./data/constants";

export const Achievements = () => {
	return (
		<section className="dashed dashed-y">
			<header className="dashed dashed-t-0 mx-auto max-w-7xl p-14 text-center">
				<h2 className="font-display font-semibold text-6xl tracking-tight">
					Our Achievement
				</h2>
				<p className="text-">
					Curious about what we've accomplished? Let our track record speak for
					itself.
				</p>
			</header>
			<div className="dashed dashed-t-0 mx-auto grid max-w-7xl grid-cols-3 gap-4 p-14">
				{ACHIEVEMENTS.map((ach) => {
					const AchievementCard = ach.card;
					return (
						<Card key={`card-${ach.id}`}>
							<CardContent>
								<AchievementCard />
								<CardHeader>
									<CardTitle>{ach.title}</CardTitle>
									<CardDescription>{ach.description}</CardDescription>
								</CardHeader>
							</CardContent>
						</Card>
					);
				})}
			</div>
			<div className="dashed dashed-t-0 mx-auto max-w-7xl p-9" />
		</section>
	);
};
