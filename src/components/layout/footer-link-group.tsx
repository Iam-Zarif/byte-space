import Link from "next/link";

type FooterLinkGroupProps = {
	label: string;
	links: readonly {
		label: string;
		href: string;
	}[];
};

export function FooterLinkGroup({ label, links }: FooterLinkGroupProps) {
	return (
		<nav aria-label={label}>
			<ul className="space-y-4.5">
				{links.map((link) => (
					<li key={link.label}>
						<Link
							href={link.href}
							className="inline-block font-body text-gray-700 text-sm leading-5 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-3"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
