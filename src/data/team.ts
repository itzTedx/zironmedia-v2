import { MEDIA } from "@/data/media";

export type TeamCategory =
	| "All"
	| "Leadership"
	| "Strategy & Creative"
	| "Development"
	| "Marketing & Growth";

export interface TeamMember {
	id: string;
	name: string;
	role: string;
	category: Exclude<TeamCategory, "All">;
	image: string;
}

export const TEAM_CATEGORIES: TeamCategory[] = [
	"All",
	"Leadership",
	"Strategy & Creative",
	"Development",
	"Marketing & Growth",
];

export const TEAM_MEMBERS: TeamMember[] = [
	{
		id: "1",
		name: "Faris Al-Mazrouei",
		role: "Chief Executive Officer & Co-Founder",
		category: "Leadership",
		image: MEDIA.bento.branding,
	},
	{
		id: "2",
		name: "Sarah Lin",
		role: "Chief Technology Officer & Partner",
		category: "Leadership",
		image: MEDIA.bento.webDevDesign,
	},
	{
		id: "3",
		name: "Elena Rostova",
		role: "Head of Brand Strategy",
		category: "Strategy & Creative",
		image: MEDIA.blogs.corporateBranding,
	},
	{
		id: "4",
		name: "Marcus Vance",
		role: "Senior Full-Stack Engineer",
		category: "Development",
		image: MEDIA.featured.webDev,
	},
	{
		id: "5",
		name: "Tariq Zayed",
		role: "Lead SEO & Growth Strategist",
		category: "Marketing & Growth",
		image: MEDIA.featured.seo,
	},
	{
		id: "6",
		name: "Amara Okafor",
		role: "Senior UI/UX Designer",
		category: "Strategy & Creative",
		image: MEDIA.featured.uiUx,
	},
	{
		id: "7",
		name: "Karim Al-Hassan",
		role: "Performance Marketing Manager",
		category: "Marketing & Growth",
		image: MEDIA.bento.paidAds,
	},
];
