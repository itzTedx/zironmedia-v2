import { IconDesktopPoint } from "@/assets/icons/desktop";
import { IconNfc } from "@/assets/icons/nfc";
import {
	IconSocialFacebook,
	IconSocialInstagram,
	IconSocialLinkedIn,
	IconSocialWhatsapp,
} from "@/assets/icons/socials";
import { IconSpeaker } from "@/assets/icons/speaker";
import { IconTarget } from "@/assets/icons/target";

import { FooterMeta, NavLink, Social } from "./types";

export const NAV_LINKS: NavLink[] = [
	{
		label: "Products",
		href: "/",
		submenu: [
			{
				icon: IconNfc,
				title: "Ziron Tap",
				description: "Tap. Scan. Connect.",
				href: "/",
			},
			{
				icon: IconNfc,
				title: "Ziron CRM",
				description: "Tap. Scan. Connect.",
				badge: "New • Get Early Access",
				href: "/",
			},
		],
	},
	{
		label: "Services",
		href: "/",
		submenu: [
			{
				icon: IconTarget,
				title: "Brand Strategy",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
			{
				icon: IconDesktopPoint,
				title: "Websites",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
			{
				icon: IconSpeaker,
				title: "Digital Marketing",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
			{
				icon: IconSpeaker,
				title: "Printing & Corporate Gifts",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
			{
				icon: IconSpeaker,
				title: "Motion Design",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
			{
				icon: IconSpeaker,
				title: "Full-stack Marketing",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
		],
	},
	{
		label: "Our works",
		href: "/",
	},
	{
		label: "Company",
		href: "/",
		submenu: [
			{
				icon: IconNfc,
				title: "Ziron Tap",
				description: "Tap. Scan. Connect.",
				href: "/",
			},
			{
				icon: IconNfc,
				title: "Ziron CRM",
				description: "Tap. Scan. Connect.",
				badge: "New • Get Early Access",
				href: "/",
			},
		],
	},
];

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
