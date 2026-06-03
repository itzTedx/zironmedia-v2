import { FAQS } from "@/data/faqs";
import { Faq, FaqContent } from "@/features/services/components/faq";

export const FAQ = () => {
	const generalFaq = FAQS.find((cat) => cat.slug === "general");
	const faqItems = generalFaq?.items ?? [];

	return (
		<section className="py-12 md:py-16 lg:py-20">
			<div className="container mx-auto max-w-7xl">
				<Faq compact>
					{faqItems.map((item) => (
						<FaqContent key={item.question} title={item.question}>
							{item.answer}
						</FaqContent>
					))}
				</Faq>
			</div>
		</section>
	);
};
