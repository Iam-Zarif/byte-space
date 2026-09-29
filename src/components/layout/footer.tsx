import Image from "next/image";
import Link from "next/link";

import { footerLinks, legalLinks } from "@/data/footer-links";

import { FooterLinkGroup } from "./footer-link-group";
import { NewsletterForm } from "./newsletter-form";

export function Footer() {
	return (
		<footer
			data-site-footer
			className="border-gray-200 border-t bg-white px-5 pt-17.5 pb-8 sm:px-6"
		>
			<div className="mx-auto max-w-300">
				<div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-0">
					<div className="lg:w-126">
						<Link
							href="/"
							aria-label="ByteSpace home"
							className="inline-flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
						>
							<Image src="/brand/favicon.svg" alt="" width={29} height={32} />

							<span className="font-logo font-semibold text-2xl text-gray-950">
								ByteSpace
							</span>
						</Link>

						<p className="mt-5 font-body text-gray-700 text-sm leading-6">
							Stay Up to date with our latest features and releases by joining
							our newsletter.
						</p>

						<NewsletterForm />

						<p className="mt-6 max-w-118 font-body text-gray-700 text-xs leading-5">
							By subscribing, you agree to our Privacy Policy and consent to
							receive updates from our company.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:w-145 lg:grid-cols-3 lg:gap-x-12">
						{footerLinks.map((group) => (
							<FooterLinkGroup
								key={group.label}
								label={group.label}
								links={group.links}
							/>
						))}
					</div>
				</div>

				<div className="mt-32 border-gray-200 border-t pt-6">
					<div className="flex flex-col gap-5 font-body text-gray-700 text-xs sm:flex-row sm:items-center sm:justify-between">
						<p>@ 2023 ByteSpace. All rights reserved.</p>

						<nav aria-label="Legal">
							<ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
								{legalLinks.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
}
