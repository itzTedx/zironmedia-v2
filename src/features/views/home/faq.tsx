import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconCalender } from "@/assets/icons/calender";

import { FAQS } from "@/data/faqs";

export const FAQ = () => {
	const generalFaq = FAQS.find((cat) => cat.slug === "general");
	const faqItems = generalFaq?.items ?? [];

	return (
		<section className="">
			<div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 py-12 sm:gap-8 md:gap-12 md:py-16 lg:gap-16 lg:py-20">
				<div className="sticky top-20 h-fit rounded-lg border border-muted/50 bg-card p-6">
					<Badge>Frequently Asked Questions</Badge>
					<h2 className="my-3 font-display font-semibold text-4xl text-foreground tracking-tight">
						Still have questions?
					</h2>
					<p className="mb-6 text-lg text-muted-foreground leading-normal">
						Have other questions or just want to chat? Book a call and let's
						figure it out together.
					</p>
					<Button
						className="border-border text-foreground"
						data-label="FAQ - Book a call"
						data-location="services_faq"
						data-track="cta_click"
						variant="outline"
					>
						<IconCalender className="text-muted-foreground" />
						Book a call
					</Button>
				</div>
				<div>
					<Accordion>
						{faqItems.map((faq) => (
							<AccordionItem key={faq.question} value={faq.question}>
								<AccordionTrigger>{faq.question}</AccordionTrigger>
								<AccordionPanel>{faq.answer}</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
};
