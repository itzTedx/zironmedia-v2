import Image from "next/image";

export const BrandServed = () => {
	return (
		<div className="relative aspect-4/3 overflow-hidden bg-linear-0 from-gray-300 to-gray-100">
			<Image
				alt="Our website service we did for Direct Logic Systems"
				className="absolute top-14 left-1/2 z-30 -translate-x-1/2 rounded-lg object-contain"
				height={280}
				src="/images/direct.jpg"
				width={290}
			/>
		</div>
	);
};
