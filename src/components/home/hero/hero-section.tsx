import { HeroContent } from "./hero-content";
import { HeroVisual } from "./hero-visual";

export function HeroSection() {
	return (
		<section
			aria-labelledby="hero-heading"
			className="hero-grid relative isolate min-h-225 overflow-hidden bg-primary lg:h-256 lg:min-h-0"
		>
			<div id="hero-heading" className="contents">
				<HeroContent />
			</div>

			<HeroVisual />
		</section>
	);
}
