import { SectionHeading } from "@/components/ui/section-heading";
import categories from "@/data/categories.json";

import { CategoryCard } from "./category-card";

export function LearningPathsSection() {
	return (
		<section
			aria-labelledby="learning-paths-heading"
			className="bg-white px-5 pt-12 pb-[120px] sm:px-6"
		>
			<div className="mx-auto w-full max-w-[1200px]">
				<SectionHeading
					id="learning-paths-heading"
					className="mx-auto max-w-[1040px]"
					title="Explore Diverse Learning Paths at Bytespace"
					description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
					titleClassName="font-bold text-3xl text-[#080c20] leading-[1.15] tracking-[-1px] sm:text-[36px]"
					descriptionClassName="mx-auto mt-5 mb-11 max-w-230 text-base text-gray-400 leading-7"
				/>

				<div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
					{categories.map((category) => (
						<CategoryCard
							key={category.name}
							name={category.name}
							icon={category.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
