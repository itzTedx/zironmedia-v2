import { ContactList } from "@/components/layout/ui/contant-list";
import { Socials } from "@/components/layout/ui/socials";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ContactForm } from "@/features/contact/components/contact-form";

export default function ContactPage() {
	return (
		<main>
			<section className="dashed dashed-x mx-auto max-w-7xl py-12">
				<div className="container grid grid-cols-2 gap-4">
					<div>
						<Badge>Let’s Build Something That Works for Your Brand</Badge>
						<h1 className="font-bold font-display text-7xl text-primary uppercase tracking-tight">
							The right design partner for your next project
						</h1>
						<p className="text-balance text-muted-foreground text-xl">
							Whether you’re planning a new launch, refreshing your brand,
							scaling your marketing, or bringing your ideas to life across
							digital and print — we’re ready.
						</p>
						<ContactList />
						<Socials className="text-muted-foreground" />
					</div>
					{/* Contact Form */}
					<Card className="shadow-sm">
						<CardHeader className="p-6 pb-0">
							<CardTitle>Send us a Message</CardTitle>
						</CardHeader>
						<CardContent className="p-6">
							<ContactForm />
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}
