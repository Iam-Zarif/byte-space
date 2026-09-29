import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NAV_LINKS } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
	return (
		<header
			data-site-header
			className="absolute inset-x-0 top-0 z-50 h-22 lg:h-30"
		>
			<div className="mx-auto flex size-full max-w-300 items-center justify-between px-5 sm:px-6 lg:px-0">
				<Link
					href="/"
					aria-label="ByteSpace home"
					className="flex shrink-0 items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
				>
					<Image
						src="/brand/favicon.svg"
						alt=""
						width={29}
						height={32}
						priority
					/>

					<span className="font-logo font-semibold text-white text-xl tracking-[-0.4px] lg:text-2xl">
						ByteSpace
					</span>
				</Link>

				<nav aria-label="Primary navigation" className="hidden lg:block">
					<ul className="flex items-center gap-6">
						{NAV_LINKS?.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="font-body font-light text-sm text-white transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="hidden items-center gap-6 lg:flex">
					<Link
						href="/login"
						className="font-body text-sm text-white transition-opacity hover:opacity-70"
					>
						Sign In
					</Link>

					<Link
						href="/register"
						className="font-body text-sm text-white transition-opacity hover:opacity-70"
					>
						Join Us
					</Link>

					<button
						type="button"
						aria-label="Shopping bag"
						className="grid size-6 place-items-center"
					>
						<FiShoppingBag
							aria-hidden="true"
							size={22}
							className="text-white"
						/>
					</button>
				</div>

				<MobileNav />
			</div>
		</header>
	);
}
