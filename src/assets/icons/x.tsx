export const IconX = (props: SVGProps) => {
	return (
		<svg
			{...props}
			fill="none"
			height="18"
			viewBox="0 0 18 18"
			width="18"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14 4L4 14"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
			/>
			<path
				d="M4 4L14 14"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
			/>
		</svg>
	);
};
