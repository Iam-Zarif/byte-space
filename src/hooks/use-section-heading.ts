import type { SectionHeadingLayout } from "@/types/components";

const layoutClasses: Record<SectionHeadingLayout, string> = {
	stacked: "text-center",
	split: "grid items-center gap-8 lg:grid-cols-2 lg:gap-10",
};

export function useSectionHeading(layout: SectionHeadingLayout = "stacked") {
	return { layoutClassName: layoutClasses[layout] };
}
