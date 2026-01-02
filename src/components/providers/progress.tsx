"use client";

import type { ReactNode } from "react";

import { ProgressProvider } from "@bprogress/next/app";

export function BProgressProvider({ children }: { children: ReactNode }) {
	return (
		<ProgressProvider
			color="#B362FF"
			height="2px"
			memo
			options={{ showSpinner: false }}
			shallowRouting
		>
			{children}
		</ProgressProvider>
	);
}
