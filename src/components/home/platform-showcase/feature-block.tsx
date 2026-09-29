import type { ReactNode } from "react";
export function FeatureBlock({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<div className="max-w-[510px]">
			<h2 className="mb-8 font-bold text-3xl leading-[1.15] tracking-[-1px] sm:text-[40px]">
				{title}
			</h2>
			{children}
		</div>
	);
}
