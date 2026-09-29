import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaDecorations } from "./cta-decorations";

export function CreatorCtaSection() {
	return (
		<section
			aria-labelledby="creator-cta-heading"
			className="hero-grid relative isolate overflow-hidden px-5 py-16 text-center text-white sm:px-6 lg:min-h-[488px] lg:pt-[84px] lg:pb-[83px]"
		>
			<CtaDecorations />
			<div className="relative z-10 mx-auto max-w-[970px]">
				<SectionHeading
					id="creator-cta-heading"
					title={
						<>
							Unlock Your Potential as a<br className="hidden sm:block" />{" "}
							Creator with ByteSpace
						</>
					}
					description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
					titleClassName="mx-auto max-w-[720px] font-bold text-3xl leading-[1.2] tracking-[-1px] sm:text-[48px]"
					descriptionClassName="mt-8 font-body text-base leading-[1.6] sm:text-lg lg:mt-10"
				/>
				<Link
					href="/register"
					className="mt-10 inline-flex min-h-[46px] items-center justify-center rounded-full bg-lime px-6 font-body text-black text-lg transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
				>
					Join as Creator
				</Link>
			</div>
		</section>
	);
}
