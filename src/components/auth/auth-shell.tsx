import Image from "next/image";
import type { ReactNode } from "react";
import { AuthShowcase } from "./auth-showcase";

type AuthShellProps = {
	eyebrow: string;
	description: string;
	children: ReactNode;
};

export function AuthShell({ eyebrow, description, children }: AuthShellProps) {
	return (
		<main className="hero-grid min-h-svh bg-primary text-white">
			<div className="mx-auto grid min-h-svh max-w-300 items-center gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_580px] lg:gap-14 lg:px-0 lg:py-12">
				<section className="relative hidden min-h-[850px] lg:block">
					<Image
						src="/brand/favicon.svg"
						alt="ByteSpace"
						width={31}
						height={34}
						priority
					/>
					<div className="mt-13 max-w-[485px]">
						<h1 className="font-heading font-medium text-[22px] tracking-[-0.5px]">
							{eyebrow}
						</h1>
						<p className="mt-3 font-body font-light text-[18px] leading-[1.65]">
							{description}
						</p>
					</div>
					<AuthShowcase />
				</section>
				<section className="flex items-center justify-center">
					{children}
				</section>
			</div>
		</main>
	);
}
