import { useSectionHeading } from "@/hooks/use-section-heading";
import type { SectionHeadingProps } from "@/types/components";

export function SectionHeading({
	title,
	description,
	headingAs: Heading = "h2",
	layout = "stacked",
	className = "",
	titleClassName = "",
	descriptionClassName = "",
	id,
}: SectionHeadingProps) {
	const { layoutClassName } = useSectionHeading(layout);

	return (
		<div className={`${layoutClassName} ${className}`}>
			<Heading id={id} className={titleClassName}>
				{title}
			</Heading>
			{description ? (
				<div className={descriptionClassName}>{description}</div>
			) : null}
		</div>
	);
}
