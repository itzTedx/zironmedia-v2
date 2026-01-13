import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

import { Suspense } from "react";

import { BreakpointIndicator } from "@/components/layout/breakpoint-indicator";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "@/components/providers";
import { Video } from "@/components/ui/video-player";

import { inter, mono, open } from "@/assets/fonts";

import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
	authors: [{ name: siteConfig.shortName, url: siteConfig.url }],
	creator: siteConfig.shortName,
	openGraph: {
		type: "website",
		locale: "en_AE",
		alternateLocale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [siteConfig.ogImage],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: "@",
	},
	metadataBase: new URL(siteConfig.url),
	alternates: { canonical: "/" },
};

export const viewport: Viewport = {
	themeColor: "#401CD8",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta content="Ziron Media" name="apple-mobile-web-app-title" />
			</head>
			<Providers>
				<body
					className={cn(
						"antialiased",
						inter.variable,
						open.className,
						mono.variable
					)}
				>
					<Navbar />

					{children}
					<Suspense>
						<Video />
					</Suspense>
					<Footer />
					<BreakpointIndicator />
				</body>
			</Providers>
		</html>
	);
}
