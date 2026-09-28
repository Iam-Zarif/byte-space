import { PartnersSection } from "@/components/home/partners/partners-section";
import { HeroSection } from "../components/home/hero/hero-section";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<PartnersSection />
			<section id="courses" />
			<section id="creators" />
		</>
	);
}
