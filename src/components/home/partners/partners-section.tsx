import Image from "next/image";
import partners from "@/data/partners.json";

export function PartnersSection() {
	return (
		<section
			aria-label="Our partners"
			className="bg-gray-50 px-5 py-14 sm:px-6 lg:py-20"
		>
			<div className="mx-auto flex max-w-300 flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:justify-between lg:gap-0">
				{partners.map((partner) => (
					<div
						key={partner.name}
						className="flex items-center gap-2"
					>
						<Image
							src={partner.image}
							alt=""
							width={40}
							height={40}
							className="size-10 object-contain opacity-60 grayscale"
						/>

						<span className="font-heading font-semibold text-[22px] text-gray-400">
							{partner.name}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}