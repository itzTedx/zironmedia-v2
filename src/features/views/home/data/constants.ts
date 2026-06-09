import { IconCheckmark } from "@/assets/icons/check";

import { MEDIA } from "@/data/media";

import {
	BrandServed,
	Experience,
	Growth,
} from "../components/achievement-cards";

export const ACHIEVEMENTS = [
	{
		id: 1,
		title: "600% Increase in Organic Traffic",
		description:
			"Advanced SEO strategy helped a UAE brand dominate competitive search terms.",
		card: Growth,
	},
	{
		id: 2,
		title: "5X Lead Growth via Paid Ads",
		description:
			"Optimized campaigns reduced CPL and increased qualified enquiries.",
		card: Experience,
	},
	{
		id: 3,
		title: "Complete Digital Transformation",
		description:
			"Website + SEO + CRM automation created a full-funnel growth engine.",
		card: BrandServed,
	},
];

export const FEATURED_ITEMS = [
	{
		id: 1,
		title: "Digital Marketing",
		alt: "Digital Marketing for your goals.",
		image: MEDIA.featured.marketing,
		icon: IconCheckmark,
	},
	{
		id: 2,
		title: "Branding",
		alt: "Logo Design for your Brand's Identity.",
		image: MEDIA.featured.logoDesign,
		icon: IconCheckmark,
	},
	{
		id: 3,
		title: "Website UI/UX Design",
		alt: "UI/UX Design for your website.",
		image: MEDIA.featured.uiUx,
		icon: IconCheckmark,
	},
	{
		id: 4,
		title: "Web Development",
		alt: "Website Development.",
		image: MEDIA.featured.webDev,
		icon: IconCheckmark,
	},
	{
		id: 5,
		title: "SEO & Content Marketing",
		alt: "SEO & Content Marketing for your website.",
		image: MEDIA.featured.seo,
		icon: IconCheckmark,
	},
	{
		id: 6,
		title: "Motion Graphics",
		alt: "Motion Graphics for your brand.",
		image: MEDIA.featured.motionGraphics,
		icon: IconCheckmark,
	},
];

export const CLIENTS = [
	{ src: MEDIA.clients.maxline, name: "Maxline Global Logistics" },
	{ src: MEDIA.clients.piptan, name: "Piptan Investments" },
	{ src: MEDIA.clients.hundredPower, name: "100 Power" },
	{ src: MEDIA.clients.qordzSvg, name: "Qordz" },
	{ src: MEDIA.clients.directLs, name: "Direct Logic Systems" },
	{ src: MEDIA.clients.sphereIt, name: "Sphere IT Global" },
	{ src: MEDIA.clients.mc, name: "MC-Bauchemie" },
	{ src: MEDIA.clients.simplyKf, name: "Simply KF" },
	{ src: MEDIA.clients.smartKitchen, name: "Smart Kitchen" },
	{ src: MEDIA.clients.m2mtek, name: "M2MTek" },
] as const;
