import { CoursesSection } from "@/components/home/courses/courses-section";
import { PartnersSection } from "@/components/home/partners/partners-section";
import { HeroSection } from "../components/home/hero/hero-section";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<PartnersSection />
			<CoursesSection />
			<section id="creators" />
		</>
	);
}
