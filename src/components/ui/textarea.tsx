import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			className={cn(
				"field-sizing-content inset-shadow-2xs flex min-h-16 w-full rounded-lg border border-border/80 bg-input/60 px-2.5 py-2 text-base outline-none transition-colors placeholder:text-muted-foreground hover:border-primary focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30",
				className
			)}
			data-slot="textarea"
			{...props}
		/>
	);
}

export { Textarea };
