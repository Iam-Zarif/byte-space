import { FiMinus, FiPlus } from "react-icons/fi";

type Props = {
	categories: string[];
	selected: string;
	expanded: boolean;
	onSelect: (category: string) => void;
	onToggle: () => void;
};
export function CourseFilters({
	categories,
	selected,
	expanded,
	onSelect,
	onToggle,
}: Props) {
	return (
		<fieldset
			className="mx-auto mb-[76px] flex max-w-[1100px] flex-wrap justify-center gap-4"
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
						className={`rounded-full px-[18px] py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${selected === category ? "bg-lime text-black" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
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
