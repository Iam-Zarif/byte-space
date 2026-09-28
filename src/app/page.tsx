import { CoursesSection } from "@/components/home/courses/courses-section";
import { LearningPathsSection } from "@/components/home/learning-paths/learning-paths-section";
import { PartnersSection } from "@/components/home/partners/partners-section";
import { PlatformShowcaseSection } from "@/components/home/platform-showcase/platform-showcase-section";
import { HeroSection } from "../components/home/hero/hero-section";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<PartnersSection />
			<CoursesSection />
			<LearningPathsSection />

			<PlatformShowcaseSection />
		</>
	);
}
