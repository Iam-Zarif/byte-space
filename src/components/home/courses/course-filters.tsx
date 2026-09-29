import { FiMinus, FiPlus } from "react-icons/fi";
import type { CourseFiltersProps } from "@/types/components";
export function CourseFilters({
	categories,
	selected,
	expanded,
	onSelect,
	onToggle,
}: CourseFiltersProps) {
	return (
		<fieldset
			className="mx-auto mb-19 flex max-w-275 flex-wrap justify-center gap-4"
			aria-label="Course categories"
		>
			{categories
				.slice(0, expanded ? categories.length : 18)
				.map((category) => (
					<button
						key={category}
						type="button"
						aria-pressed={selected === category}
						onClick={() => onSelect(category)}
						className={`rounded-full px-4.5 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${selected === category ? "bg-lime text-black" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
					>
						{category}
					</button>
				))}
			<button
				type="button"
				aria-expanded={expanded}
				onClick={onToggle}
				className="flex items-center gap-1 px-1 text-primary text-sm"
			>
				{expanded ? (
					<FiMinus aria-hidden="true" />
				) : (
					<FiPlus aria-hidden="true" />
				)}
				{expanded ? "Less" : "More"}
			</button>
		</fieldset>
	);
}
