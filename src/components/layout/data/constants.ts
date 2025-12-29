import { IconCog } from "@/assets/icons/cog";
import { IconDesktopPoint } from "@/assets/icons/desktop";
import { IconNfc } from "@/assets/icons/nfc";
import { IconPlay } from "@/assets/icons/play";
import { IconPrinter } from "@/assets/icons/printer";
import {
	IconSocialFacebook,
	IconSocialInstagram,
	IconSocialLinkedIn,
	IconSocialWhatsapp,
} from "@/assets/icons/socials";
import { IconSpeaker } from "@/assets/icons/speaker";
import { IconTarget } from "@/assets/icons/target";

import { FooterMeta, NavLink, ServiceType, Social, Submenu } from "./types";

export const PRODUCTS: Submenu[] = [
	{
		id: "tap",
		icon: IconNfc,
		title: "Ziron Tap",
		description: "Tap. Scan. Connect.",
		href: "/",
	},
	{
		id: "crm",
		icon: IconNfc,
		title: "Ziron CRM",
		description: "Tap. Scan. Connect.",
		badge: "New • Get Early Access",
		href: "/",
	},
];

export const SERVICES: ServiceType[] = [
	{
		id: "1",
		icon: IconTarget,
		title: "Brand Strategy",
		description:
			"Crafting visual identities that feel clear, timeless, and true to your brand.",
		href: "/",
	},
	{
		id: "2",
		icon: IconDesktopPoint,
		title: "Websites",
		description:
			"Crafting visual identities that feel clear, timeless, and true to your brand.",
		href: "/",
	},
	{
		id: "3",
		icon: IconSpeaker,
		title: "Digital Marketing",
		description:
			"Crafting visual identities that feel clear, timeless, and true to your brand.",
		href: "/",
	},
	{
		id: "4",
		icon: IconPrinter,
		title: "Printing & Corporate Gifts",
		description:
			"Crafting visual identities that feel clear, timeless, and true to your brand.",
		href: "/",
	},
	{
		id: "5",
		icon: IconPlay,
		title: "Motion Design",
		description:
			"Crafting visual identities that feel clear, timeless, and true to your brand.",
		href: "/",
	},
	{
		id: "6",
		icon: IconCog,
		title: "Full-stack Marketing",
		description:
			"Crafting visual identities that feel clear, timeless, and true to your brand.",
		href: "/",
	},
];

export const NAV_LINKS: NavLink[] = [
	{
		label: "Products",
		href: "/",
		submenu: PRODUCTS,
	},
	{
		label: "Services",
		href: "/services",
		submenu: SERVICES,
	},
	{
		label: "Our works",
		href: "/",
	},
	{
		label: "Company",
		submenu: [
			{
				id: "1",
				icon: IconNfc,
				title: "About us",
				description: "Tap. Scan. Connect.",
				href: "/",
			},
			{
				id: "2",
				icon: IconNfc,
				title: "FAQs",
				description: "Tap. Scan. Connect.",
				href: "/",
			},
			{
				id: "3",
				icon: IconNfc,
				title: "Blogs",
				description: "Tap. Scan. Connect.",
				href: "/",
			},
		],
	},
] as const;

export const CONTACT = [
	{
		label: "Email",
		href: "mailto:info@zironmedia.com",
		value: "info@zironmedia.com",
	},
	{
		label: "Phone",
		href: "tel:+971 56 789 5432",
		value: "+971 56 789 5432",
	},
] as const;

export const FOOTER_LINKS = [
	{
		section: "LINKS",
		links: [
			{
				label: "Home",
				href: "/",
			},
			{
				label: "About",
				href: "/",
			},
			{
				label: "Products",
				href: "/",
			},
			{
				label: "Services",
				href: "/",
			},
			{
				label: "Contact",
				href: "/",
			},
		],
	},
	{
		section: "RESOURCES",
		links: [
			{
				label: "Our works",
				href: "/",
			},
			{
				label: "Blogs",
				href: "/",
			},
			{
				label: "Enquiry",
				href: "/",
			},
		],
	},
] as const;

export const PARTNERS = [
	{
		title: "Google Partner",
		src: "/images/partner/google.svg",
	},
	{
		title: "Meta Partner",
		src: "/images/partner/meta.svg",
	},
	{
		title: "Tiktok Partner",
		src: "/images/partner/tiktok.svg",
	},
] as const;

export const SOCIALS: Social[] = [
	{
		label: "Linkedin",
		href: "/",
		icon: IconSocialLinkedIn,
	},
	{
		label: "Facebook",
		href: "/",
		icon: IconSocialFacebook,
	},
	{
		label: "Instagram",
		href: "/",
		icon: IconSocialInstagram,
	},
	{
		label: "Whatsapp",
		href: "/",
		icon: IconSocialWhatsapp,
	},
] as const;

export const FOOTER_META: FooterMeta[] = [
	{
		label: "Enquiry",
		href: "/",
	},
	{
		label: "Privacy Policy",
		href: "/",
	},
	{
		label: "Sitemap",
		href: "/",
	},
];
