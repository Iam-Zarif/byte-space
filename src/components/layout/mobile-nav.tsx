"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import { NAV_LINKS } from "@/lib/constants";

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
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<div className="lg:hidden">
			<button
				type="button"
				aria-expanded={isOpen}
				aria-controls="mobile-navigation"
				aria-label="Open navigation menu"
				onClick={() => setIsOpen(true)}
				className="grid size-10 place-items-center rounded-full border border-white/20 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
			>
				<FiMenu aria-hidden="true" size={20} />
			</button>

			<div
				className={`fixed inset-0 z-60 transition ${
					isOpen
						? "visible bg-black/40 opacity-100"
						: "invisible bg-black/0 opacity-0"
				}`}
				aria-hidden={!isOpen}
				onClick={() => setIsOpen(false)}
			/>

			<nav
				id="mobile-navigation"
				aria-label="Mobile navigation"
				className={`fixed top-0 right-0 z-70 flex h-dvh w-4/5 flex-col bg-primary p-6 shadow-2xl transition-transform duration-300 ease-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex items-center justify-between">
					<span className="font-logo font-semibold text-white text-xl">
						ByteSpace
					</span>

					<button
						type="button"
						aria-label="Close navigation menu"
						onClick={() => setIsOpen(false)}
						className="grid size-10 place-items-center rounded-full border border-white/20 text-white"
					>
						<FiX aria-hidden="true" size={20} />
					</button>
				</div>

				<ul className="mt-10 space-y-2">
					{NAV_LINKS.map((item) => (
						<li key={item.href}>
							<Link
								href={item.href}
								onClick={() => setIsOpen(false)}
								className="block rounded-xl px-4 py-3 font-body text-base text-white transition-colors hover:bg-white/10"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				<div className="mt-auto border-white/15 border-t pt-5">
					<div className="flex gap-3">
						<Link
							href="/login"
							onClick={() => setIsOpen(false)}
							className="flex-1 rounded-full border border-white/25 px-4 py-3 text-center font-body text-sm text-white"
						>
							Sign In
						</Link>

						<Link
							href="/register"
							onClick={() => setIsOpen(false)}
							className="flex-1 rounded-full bg-lime px-4 py-3 text-center font-body font-medium text-black text-sm"
						>
							Join Us
						</Link>

						<button
							type="button"
							aria-label="Shopping bag"
							className="grid size-11 shrink-0 place-items-center rounded-full border border-white/25"
						>
							<FiShoppingBag
								aria-hidden="true"
								size={21}
								className="text-white"
							/>
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}
