import { PropsWithChildren } from "react";

interface SectionProps {
	children: React.ReactNode;
	title: string;
}
function Section({ children, title }: SectionProps) {
	return (
		<section className="grid gap-6 md:grid-cols-[1.5fr_2fr]">
			<SectionTitle>{title}</SectionTitle>
			<SectionContent>{children}</SectionContent>
		</section>
	);
}

function SectionTitle({ children }: PropsWithChildren) {
	return (
		<h2 className="not-prose h-fit text-balance font-semibold text-5xl text-primary leading-tight tracking-tight md:sticky md:top-20">
			{children}
		</h2>
	);
}

function SectionContent({ children }: PropsWithChildren) {
	return <div className="*:first:mt-0">{children}</div>;
}

export { Section, SectionTitle, SectionContent };
