"use client";

import * as React from "react";

import { AnimatePresence, type HTMLMotionProps, motion } from "motion/react";

import { type UseIsInViewOptions, useIsInView } from "@/hooks/use-is-in-view";
import { getStrictContext } from "@/lib/get-strict-context";

type RotatingTextContextType = {
	currentText: string;
	y: number;
	isInView: boolean;
};

const [RotatingTextProvider, useRotatingText] =
	getStrictContext<RotatingTextContextType>("RotatingTextContext");

type RotatingTextContainerProps = React.ComponentProps<"div"> & {
	text: string | string[];
	duration?: number;
	y?: number;
	delay?: number;
	onChange?: (index: number, currentText: string) => void;
} & UseIsInViewOptions;

function RotatingTextContainer({
	ref,
	text,
	y = -50,
	duration = 2000,
	delay = 0,
	style,
	inView = false,
	inViewMargin = "0px",
	inViewOnce = true,
	onChange,
	...props
}: RotatingTextContainerProps) {
	const [index, setIndex] = React.useState(0);

	const { ref: localRef, isInView } = useIsInView(
		ref as React.Ref<HTMLDivElement>,
		{
			inView,
			inViewOnce,
			inViewMargin,
		}
	);

	React.useEffect(() => {
		if (!Array.isArray(text)) return;
		if (inView && !isInView) return;

		let intervalId: ReturnType<typeof setInterval> | undefined;

		const timeoutId = setTimeout(() => {
			setIndex((prev) => (prev + 1) % text.length);
			intervalId = setInterval(
				() => setIndex((prev) => (prev + 1) % text.length),
				duration
			);
		}, delay);

		return () => {
			clearTimeout(timeoutId);
			if (intervalId) clearInterval(intervalId);
		};
	}, [text, duration, delay, inView, isInView]);

	const currentText = Array.isArray(text) ? text[index] : text;

	React.useEffect(() => {
		if (!Array.isArray(text)) return;
		if (typeof onChange === "function") {
			onChange(index, currentText);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index, currentText]);

	return (
		<RotatingTextProvider value={{ currentText, y, isInView }}>
			<div
				ref={localRef}
				style={{
					overflow: "hidden",
					paddingBlock: "0.25rem",
					...style,
				}}
				{...props}
			/>
		</RotatingTextProvider>
	);
}

type RotatingTextProps = Omit<HTMLMotionProps<"div">, "children">;

function RotatingText({
	transition = { duration: 0.3, ease: "easeOut" },
	...props
}: RotatingTextProps) {
	const { currentText, y, isInView } = useRotatingText();

	return (
		<AnimatePresence mode="wait">
			{isInView && (
				<motion.div
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y }}
					initial={{ opacity: 0, y: -y }}
					key={currentText}
					transition={transition}
					{...props}
				>
					{currentText}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export {
	RotatingText,
	RotatingTextContainer,
	type RotatingTextContainerProps,
	type RotatingTextContextType,
	type RotatingTextProps,
	useRotatingText,
};
