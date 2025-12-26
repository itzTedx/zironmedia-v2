import Image from "next/image";

import { DashedStroke } from "@/components/shared/dashed-stroke";
import { LogoTimeline, logos } from "@/components/shared/logo-timeline";
import { Noise } from "@/components/shared/noise";

export const BrandServed = () => {
	return (
		<div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-linear-0 from-gray-300 to-gray-100 transition">
			<Noise />
			<Image
				alt="Our website service we did for Direct Logic Systems"
				className="absolute top-14 left-1/2 z-30 -translate-x-1/2 rounded-lg object-contain transition-[scale,translate] duration-300 ease-out group-hover/card:-translate-y-20 group-hover/card:scale-75"
				height={280}
				src="/images/direct.jpg"
				width={290}
			/>

			<Image
				alt="Our website service we did for Direct Logic Systems"
				className="absolute top-14 left-1/2 z-20 -translate-x-1/2 rounded-lg object-contain transition-[scale,translate] duration-300 ease-out group-hover/card:-translate-x-[calc(50%+5rem)] group-hover/card:-translate-y-20 group-hover/card:scale-60"
				height={280}
				src="/images/maxline.jpg"
				width={290}
			/>

			<Image
				alt="Our website service we did for Direct Logic Systems"
				className="absolute top-14 left-1/2 z-10 -translate-x-1/2 rounded-lg object-contain transition-[scale,translate] duration-300 ease-out group-hover/card:translate-x-[calc(-50%+5rem)] group-hover/card:-translate-y-20 group-hover/card:scale-60"
				height={280}
				src="/images/qordx.jpg"
				width={290}
			/>

			<div className="pointer-events-none absolute inset-0 bg-linear-0 from-brand-300 to-brand-100 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
		</div>
	);
};

export const Experience = () => {
	return (
		<div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-linear-0 from-gray-300 to-gray-100 transition">
			<Noise className="opacity-20" />
			<div className="absolute top-12 left-1/2 z-10 -translate-x-1/2 transition-transform group-hover/card:-translate-y-6 group-hover/card:scale-90">
				<svg
					className="text-muted-foreground/60 transition-colors group-hover/card:text-muted-foreground/40"
					fill="none"
					height="282"
					viewBox="0 0 237 282"
					width="237"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M119.948 282C56.2513 282 13.6492 252.556 0 214.403L59.1466 165.468C67.4188 195.326 90.9948 207.768 117.052 207.768C140.215 207.768 155.105 196.156 155.105 172.103C155.105 150.953 142.696 137.682 117.052 137.682C100.094 137.682 86.445 143.074 81.0681 159.662L80.6544 160.906L10.3403 153.856L21.0942 0H218.801V66.3529H88.9267L83.5497 140.171C93.0628 115.288 117.052 95.3823 155.518 95.3823C200.602 95.3823 237 121.509 237 180.812C237 242.188 187.78 282 119.948 282Z"
						fill="currentColor"
					/>
				</svg>
			</div>

			<LogoTimeline
				animateOnHover={true}
				className="relative z-50"
				height="h-[400px]"
				iconSize={20}
				items={logos}
			/>
			<div className="pointer-events-none absolute inset-0 bg-linear-0 from-fuchsia-300 to-fuchsia-100 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
		</div>
	);
};

export const Growth = () => {
	return (
		<div className="relative flex aspect-4/3 items-end justify-end overflow-hidden rounded-2xl bg-linear-0 from-gray-300 to-gray-100 p-6 transition">
			<Noise />
			<p className="relative z-50 font-medium text-3xl transition-colors group-hover/card:text-green-800">
				Growth
			</p>
			<div className="absolute top-0 left-0 z-20 w-full translate-y-26 transition-transform duration-500 ease-out group-hover/card:translate-y-3.5">
				<p className="p-2 text-end text-success">Highest (This month)</p>
				<DashedStroke className="[--color:var(--color-success)] [--size:2px]" />
			</div>
			<div className="absolute -bottom-2 left-0 z-10 -translate-x-5 transition-transform duration-500 ease-out group-hover/card:-translate-x-1/2">
				<svg
					fill="none"
					height="241"
					viewBox="0 0 747 241"
					width="747"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M31.7883 204.272C10.907 204.272 0.721008 240 0.721008 240H745.721V15.2426C745.721 15.2426 695.721 -7.50004 648.221 54.9998C609.081 106.5 565.701 54.7022 538.221 70.9997C514.221 85.233 508.221 130.5 467.221 130.5C418.721 130.5 425.651 102.5 374.721 102.5C323.791 102.5 328.221 172.57 291.221 172.57C259.497 172.57 259.546 150.5 234.221 150.5C208.896 150.5 206.914 185.439 180.221 187.5C161.093 188.977 144.345 159.486 123.463 172.57C102.582 185.653 96.979 220.375 76.0977 220.375C55.2163 220.375 52.6696 204.272 31.7883 204.272Z"
						fill="url(#paint0_linear_347_181)"
						fillOpacity="0.6"
					/>
					<path
						d="M0.721008 240C0.721008 240 10.907 204.272 31.7883 204.272C52.6696 204.272 55.2163 220.375 76.0977 220.375C96.979 220.375 102.582 185.653 123.463 172.57C144.345 159.486 161.093 188.977 180.221 187.5C206.914 185.439 208.896 150.5 234.221 150.5C259.546 150.5 259.497 172.57 291.221 172.57C328.221 172.57 323.791 102.5 374.721 102.5C425.651 102.5 418.721 130.5 467.221 130.5C508.221 130.5 514.221 85.233 538.221 70.9997C565.701 54.7022 609.081 106.5 648.221 54.9998C695.721 -7.50004 745.721 15.2426 745.721 15.2426"
						stroke="#008236"
						strokeWidth="1.5"
					/>
					<defs>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint0_linear_347_181"
							x1="373.221"
							x2="373.221"
							y1="5.7961e-06"
							y2="240"
						>
							<stop stopColor="#00C950" />
							<stop offset="1" stopColor="#00C950" stopOpacity="0" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className="pointer-events-none absolute inset-0 bg-linear-0 from-green-300 to-green-50 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
		</div>
	);
};
