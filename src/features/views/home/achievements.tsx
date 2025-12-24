import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

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
				{Array.from({ length: 3 }).map((_, i) => (
					<Card key={`card-${i + 1}`}>
						<CardContent>
							<div className="aspect-4/3 bg-linear-0 from-gray-300 to-gray-100">
								Business Card
							</div>
							<CardHeader>
								<CardTitle>50+ Brands Served</CardTitle>
								<CardDescription>
									Helping businesses across various industries achieve their
									goals
								</CardDescription>
							</CardHeader>
						</CardContent>
					</Card>
				))}
			</div>
			<div className="dashed dashed-t-0 mx-auto max-w-7xl p-9" />
		</section>
	);
};
