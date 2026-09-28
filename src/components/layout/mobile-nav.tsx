"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import { NAV_LINKS } from "@/src/lib/constants";

export function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);

		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [isOpen]);

	return (
		<div className="lg:hidden">
			<button
				type="button"
				aria-expanded={isOpen}
				aria-controls="mobile-navigation"
				aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
				onClick={() => setIsOpen((previous) => !previous)}
				className="relative grid size-10 place-items-center rounded-full border border-white/20 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
			>
				{isOpen ? (
					<FiX aria-hidden="true" size={20} />
				) : (
					<FiMenu aria-hidden="true" size={20} />
				)}
			</button>

			{isOpen && (
				<nav
					id="mobile-navigation"
					aria-label="Mobile navigation"
					className="absolute inset-x-5 top-[76px] rounded-2xl border border-white/15 bg-primary/95 p-5 shadow-2xl backdrop-blur-md sm:inset-x-6"
				>
					<ul className="space-y-1">
						{NAV_LINKS.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									onClick={() => setIsOpen(false)}
									className="block rounded-lg p-3 font-body text-base text-white transition-colors hover:bg-white/10"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>

					<div className="mt-4 flex items-center gap-3 border-white/15 border-t pt-4">
						<Link
							href="/login"
							onClick={() => setIsOpen(false)}
							className="flex-1 rounded-full border border-white/25 px-4 py-2.5 text-center font-body text-sm text-white"
						>
							Sign In
						</Link>

						<Link
							href="/register"
							onClick={() => setIsOpen(false)}
							className="flex-1 rounded-full bg-lime px-4 py-2.5 text-center font-body font-medium text-black text-sm"
						>
							Join Us
						</Link>

						<button
							type="button"
							aria-label="Shopping bag"
							className="grid size-10 shrink-0 place-items-center rounded-full border border-white/25"
						>
							<FiShoppingBag
								aria-hidden="true"
								size={22}
								className="text-white"
							/>
						</button>
					</div>
				</nav>
			)}
		</div>
	);
}
