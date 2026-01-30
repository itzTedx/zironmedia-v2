import { IconCog } from "@/assets/icons/cog";
import { IconDesktopPoint } from "@/assets/icons/desktop";
import { IconPlay } from "@/assets/icons/play";
import { IconPrinter } from "@/assets/icons/printer";
import { IconSpeaker } from "@/assets/icons/speaker";
import { IconTarget } from "@/assets/icons/target";

export const SERVICES = [
	{
		id: 1,
		slug: "branding",
		icon: IconTarget,
		title: "Brand Strategy",
		alt: "Brand strategy services—logo design, visual identity, and brand guidelines",
		description:
			"Building strong, memorable brands through strategy, identity design, and consistent visual systems.",
		image: "/images/services/logo-design.jpg",
		lists: [
			{
				title: "Logo Design",
				slug: "logo-design",
				image: "/images/services/logo-design.jpg",
			},
			{
				title: "Brand Guidelines",
				slug: "brand-guidelines",
				image: "/images/services/brand-guidelines.webp",
			},
			{
				title: "Pitch Decks",
				slug: "pitch-decks",
				image: "/images/services/pitch-deck.png",
			},
			{
				title: "Packaging Design",
				slug: "packaging-design",
				image: "/images/services/package/package-2.webp",
			},
			{
				title: "Brand Revamps",
				slug: "brand-revamps",
				image: "/images/services/branding.jpg",
			},
		],
	},
	{
		id: 2,
		slug: "websites",
		icon: IconDesktopPoint,
		title: "Websites",
		description:
			"Designing and developing fast, scalable, and conversion-focused websites that grow with your business.",
		alt: "Website design and development-fast, scalable, conversion-focused sites",
		image: "/images/services/web-dev.webp",
		lists: [
			{
				title: "Website Design & Development",
				slug: "design-and-dev",
				image: "/images/services/web-dev.webp",
			},
			{
				title: "Web Revamps",
				slug: "web-revamps",
				image: "/images/services/website.jpg",
			},
			{
				title: "Search Engine Optimization (SEO)",
				slug: "seo",
				image: "/images/services/seo.webp",
			},
			{
				title: "Website Management",
				slug: "management",
				image: "/images/services/website.jpg",
			},
		],
	},
	{
		id: 3,
		slug: "marketing",
		icon: IconSpeaker,
		title: "Digital Marketing",
		description:
			"Driving visibility, engagement, and leads through data-driven digital marketing strategies.",
		alt: "Digital marketing services—SEO, social media, content, and paid ads",
		image: "/images/services/social.jpg",
		lists: [
			{
				title: "Social Media Creatives",
				slug: "social-media",
				image: "/images/services/social.jpg",
			},
			{
				title: "Content Strategy",
				slug: "content-strategy",
				image: "/images/services/content-strategy.webp",
			},
			{
				title: "Paid Ads",
				slug: "paid-ads",
				image: "/images/services/paid-ads.webp",
			},
		],
	},
	{
		id: 4,
		slug: "printing",
		icon: IconPrinter,
		title: "Printing & Corporate Gifts",
		description:
			"High-quality printing and branded merchandise that enhance visibility and leave a lasting impression.",
		alt: "Printing and corporate gifts—branded merchandise and marketing collateral",
		image: "/images/services/corporate-gifts.webp",
		lists: [
			{
				title: "Offset & Digital Printing",
				slug: "offset-and-digital",
				image: "/images/services/offset-digital.webp",
			},
			{
				title: "Merchandise",
				slug: "merchandise",
				image: "/images/services/merchandise.webp",
			},
			{
				title: "Custom Corporate Gifts",
				slug: "custom-corporate-gifts",
				image: "/images/services/corporate-gifts.webp",
			},
			{
				title: "Stationary & Corporate Identity",
				slug: "stationary-and-corporate-identity",
				image: "/images/services/stationary-corporate-identity.webp",
			},
			{
				title: "Stickers",
				slug: "stickers",
				image: "/images/services/stickers.webp",
			},
		],
	},
	{
		id: 5,
		slug: "motion",
		icon: IconPlay,
		title: "Motion Design",
		description:
			"Bringing stories to life through engaging motion graphics and impactful video content.",
		alt: "Motion design—explainer videos, motion graphics, and brand videos",
		image: "/images/services/motion.webp",
		lists: [
			{
				title: "Motion Graphics",
				slug: "motion-graphics",
				image: "/images/services/motion-graphics.webp",
			},
			{
				title: "Explainer Videos",
				slug: "explainer-videos",
				image: "/images/services/motion.avif",
			},
			{
				title: "Brand Launch Videos",
				slug: "brand-launch-videos",
				image: "/images/services/brand-launch.webp",
			},
		],
	},
	{
		id: 6,
		slug: "full-stack",
		icon: IconCog,
		title: "Full-stack Marketing",
		description:
			"End-to-end marketing solutions that align strategy, content, and execution for scalable growth.",
		alt: "Full‑stack marketing—end‑to‑end strategy, content, and campaign execution",
		image: "/images/services/full-stack.webp",
		lists: [
			{
				title: "Marketing & Growth Strategy",
				slug: "marketing-and-growth-strategy",
				image: "/images/services/marketing-growth.webp",
			},
			{
				title: "Emails & Newsletters",
				slug: "emails-and-newsletters",
				image: "/images/services/email-newsletter.webp",
			},
			{
				title: "Copywriting",
				slug: "copywriting",
				image: "/images/services/copy-writing.webp",
			},
			{
				title: "Technical Content Writing",
				slug: "technical-content-writing",
				image: "/images/services/tech-content-writing.webp",
			},
			{
				title: "Campaigns",
				slug: "campaigns",
				image: "/images/services/campaigns.webp",
			},
			{
				title: "Social Media Management",
				slug: "social-media-management",
				image: "/images/services/social-media-management.webp",
			},
			{
				title: "Community, Events, Podcasts",
				slug: "community-events-podcasts",
				image: "/images/services/events-podcasts.webp",
			},
			{
				title: "Strategic Partnerships",
				slug: "strategic-partnerships",
				image: "/images/services/strategic-partnerships.webp",
			},
		],
	},
] as const;
