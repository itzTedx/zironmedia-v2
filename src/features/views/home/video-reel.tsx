import Image from "next/image";

import { Noise } from "@/components/shared/noise";
import { Button } from "@/components/ui/button";

import { IconCaretRight } from "@/assets/icons/caret";
import { IconChevronRight } from "@/assets/icons/chevrons";
import { LogoMono } from "@/assets/logo";

export const VideoReel = () => {
	return (
		<section className="dashed dashed-t">
			<div className="dashed dashed-x mx-auto flex max-w-7xl items-center justify-center p-20">
				<div className="relative max-w-5xl overflow-hidden rounded-3xl shadow-lg">
					<Noise />
					<Image alt="" height={576} src="/images/reel.png" width={1024} />
					<div className="absolute top-0 z-10 flex size-full flex-col justify-between p-12">
						<LogoMono className="text-white" />

						<div className="max-w-sm space-y-8">
							<h3 className="text-balance font-medium text-3xl text-background">
								Why every modern Business needs a strong digital presence?
							</h3>
							<div className="flex items-center gap-3">
								<Button
									className="border-white/60 text-white backdrop-blur-lg"
									variant="outline"
								>
									Watch video <IconCaretRight />
								</Button>
								<Button className="text-white" variant="ghost">
									<div className="flex size-6 items-center justify-center rounded-md bg-white/20">
										<IconChevronRight />
									</div>
									Read case study
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
