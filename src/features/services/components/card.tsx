import { Frame, FramePanel } from "@/components/ui/frame";

import { cn } from "@/lib/utils";

export const Card = ({
	children,
	title,
	...props
}: React.ComponentProps<typeof FramePanel> & { title: string }) => {
	return (
		<Frame>
			<FramePanel
				className={cn("not-prose h-full *:mt-0", props.className)}
				{...props}
			>
				<h3 className="mb-3 font-semibold text-2xl tracking-tight">{title}</h3>
				<div className="text-base">{children}</div>
			</FramePanel>
		</Frame>
	);
};
