export const footerLinks = [
	{
		label: "Courses and categories",
		links: [
			{ label: "Featured Courses", href: "/#courses" },
			{ label: "Featured Categories", href: "/#categories" },
			{ label: "Business", href: "/#business" },
			{ label: "IT", href: "/#it" },
			{ label: "Design", href: "/#design" },
		],
	},
	{
		label: "Topics",
		links: [
			{ label: "Development", href: "/#development" },
			{ label: "Marketing", href: "/#marketing" },
			{ label: "Photography", href: "/#photography" },
			{ label: "Finance", href: "/#finance" },
			{ label: "Sport", href: "/#sport" },
		],
	},
	{
		label: "Company",
		links: [
			{ label: "Become a Creator", href: "/register" },
			{ label: "Affiliate Program", href: "/#affiliate" },
			{ label: "Contact", href: "/#contact" },
			{ label: "Help", href: "/#help" },
			{ label: "About", href: "/#about" },
		],
	},
] as const;

export const legalLinks = [
	{ label: "Privacy Policy", href: "/privacy-policy" },
	{ label: "Terms of Service", href: "/terms-of-service" },
	{ label: "Cookies Settings", href: "/cookies" },
] as const;
