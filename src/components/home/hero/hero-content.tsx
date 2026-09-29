import { SectionHeading } from "@/components/ui/section-heading";
import { HeroSearch } from "./hero-search";

export function HeroContent() {
	return (
		<div className="relative z-30 mx-auto w-full max-w-300 px-5 pt-33 text-center sm:px-6 lg:px-0 lg:pt-42.25">
			<div className="mx-auto max-w-233.75">
				<SectionHeading
					headingAs="h1"
					title={
						<>
							Get Access to Hundreds
							<br className="hidden sm:block" /> Courses Available
						</>
					}
					description="Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses."
					titleClassName="font-heading font-semibold text-[42px] text-white leading-[1.08] tracking-[-1px] sm:text-[56px] lg:text-[78px] lg:leading-[1.2]"
					descriptionClassName="mx-auto mt-6 max-w-204.75 font-body font-light text-white/85 leading-[1.6] lg:mt-8"
				/>
				<HeroSearch />
			</div>
		</div>
	);
}
