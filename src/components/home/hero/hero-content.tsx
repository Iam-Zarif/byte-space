import { HeroSearch } from "./hero-search";

export function HeroContent() {
	return (
		<div className="relative z-30 mx-auto w-full max-w-300 px-5 pt-33 text-center sm:px-6 lg:px-0 lg:pt-42.25">
			<div className="mx-auto max-w-233.75">
				<h1 className="font-heading font-semibold text-[42px] text-white leading-[1.08] tracking-[-1px] sm:text-[56px] lg:text-[78px] lg:leading-[1.2]">
					Get Access to Hundreds
					<br className="hidden sm:block" /> Courses Available
				</h1>

				<p className="mx-auto mt-6 max-w-204.75 font-body font-light text-white/85 leading-[1.6] lg:mt-8">
					Unlock your creativity, gain valuable knowledge, and grow your
					business with our wide range of courses.
				</p>

				<HeroSearch />
			</div>
		</div>
	);
}
