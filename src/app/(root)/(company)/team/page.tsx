import type { Metadata } from "next";

import { TeamPageView } from "@/features/company/views/team-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	buildBreadcrumbSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Meet Our Expert Team | ZironPro Digital Agency Dubai, UAE",
	description:
		"Meet the developers, designers, strategists, and growth managers at ZironPro. We build conversion-focused digital systems that UAE brands trust.",
	path: "/team",
	keywords: [
		"ZironPro team",
		"digital agency experts Dubai",
		"marketing specialists UAE",
		"web developers Dubai",
		"UI UX designers Dubai",
		"branding team UAE",
	],
});

export default function TeamPage() {
	const webPageSchema = buildWebPageSchema(
		"Meet Our Expert Team | ZironPro Digital Agency Dubai, UAE",
		"Meet the developers, designers, strategists, and growth managers at ZironPro. We build conversion-focused digital systems that UAE brands trust.",
		"/team"
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Team", path: "/team" },
	]);

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-team-webpage" />
			<JsonLdScript data={breadcrumbSchema} id="schema-team-breadcrumb" />
			<TeamPageView />
		</>
	);
}
