import { LenisProvider } from "./lenis";
import { BProgressProvider } from "./progress";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<LenisProvider>
			<BProgressProvider>{children}</BProgressProvider>
		</LenisProvider>
	);
};
