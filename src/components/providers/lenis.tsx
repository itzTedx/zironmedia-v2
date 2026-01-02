"use client";
import { ReactNode, useEffect } from "react";

import Lenis from "lenis";

export function LenisProvider({ children }: { children: ReactNode }) {
	useEffect(() => {
		const lenis = new Lenis({
			prevent(node) {
				return node.hasAttribute("data-scroll-locked");
			},
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
		document.body.classList.remove("loading");
		return () => lenis.destroy();
	}, []);
	return <>{children}</>;
}
