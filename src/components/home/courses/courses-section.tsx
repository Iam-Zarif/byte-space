import { SectionHeading } from "@/components/ui/section-heading";
import { CourseExplorer } from "./course-explorer";
export function CoursesSection() {
	return (
		<section
			id="courses"
			aria-labelledby="courses-heading"
			className="bg-white px-5 py-20 sm:px-6"
		>
			<div className="mx-auto max-w-300">
				<SectionHeading
					id="courses-heading"
					title={
						<>
							Discover Your Passion,
							<br />
							Build Your Skills
						</>
					}
					description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
					titleClassName="font-bold text-3xl text-[#080c20] leading-[1.15] tracking-[-1px] sm:text-[44px]"
					descriptionClassName="mx-auto mt-5 mb-11 max-w-230 text-base text-gray-400 leading-7"
				/>
				<CourseExplorer />
			</div>
		</section>
	);
}
