import Image from "next/image";
import { RiSignalTowerFill } from "react-icons/ri";
import type { CategoryCardProps } from "@/types/components";

const ICONS: Record<string, string> = {
	design: "/features/Frame.svg",
	development: "/features/Style=Filled.svg",
	software: "/features/Style=Filled (1).svg",
	business: "/features/Style=Round.svg",
	photography: "/features/Style=Outlined.svg",
};

export function CategoryCard({ name, icon }: CategoryCardProps) {
	const src = ICONS[icon];
	return (
		<article className="flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-3xl border border-gray-200 bg-white">
			<div className="grid size-15 place-items-center rounded-full bg-lime">
				{src ? (
					<Image
						src={src}
						alt=""
						width={32}
						height={32}
						className="size-8 object-contain"
					/>
				) : (
					<RiSignalTowerFill
						aria-hidden="true"
						className="size-8 text-gray-950"
					/>
				)}
			</div>
			<h3 className="text-center font-body font-normal text-gray-950 text-lg">
				{name}
			</h3>
		</article>
	);
}
