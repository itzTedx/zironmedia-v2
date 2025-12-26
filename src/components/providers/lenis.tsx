"use client";
import { ReactNode, useEffect } from "react";

import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
	useEffect(() => {
		const lenis = new Lenis();
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

export default SmoothScroll;
