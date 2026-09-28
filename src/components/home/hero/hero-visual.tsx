import { CourseInfoCard } from "./course-info-card";
import { HappyStudentsCard } from "./happy-students-card";
import { HeroBackground } from "./hero-background";
import { HeroOrnaments } from "./hero-ornaments";
import { HeroPerson } from "./hero-person";
import { LearningProgressCard } from "./learning-progress-card";

export function HeroVisual() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<HeroBackground />
			<HeroOrnaments />
			<HeroPerson />
			<CourseInfoCard />
			<LearningProgressCard />
			<HappyStudentsCard />
		</div>
	);
}
