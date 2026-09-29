// src/lib/constants.ts

export const NAV_LINKS = [
	{ label: "Home", href: "/" },
	{ label: "Courses", href: "#courses" },
	{ label: "Creators", href: "#creators" },
];

export const FOOTER_LINKS = {
	courses: [
		"Featured Courses",
		"Featured Categories",
		"Business",
		"IT",
		"Design",
	],
	categories: ["Development", "Marketing", "Photography", "Finance", "Sport"],
	company: [
		"Become a Creator",
		"Affiliate Program",
		"Contact",
		"Help",
		"About",
	],
};

export const COURSE_FILTERS = [
	"Featured",
	"Music",
	"Drawing & Painting",
	"Marketing",
	"Animation",
	"Social Media",
	"UI/UX Design",
	"Creative Marketing",
	"Digital Illustration",
	"Film & Video",
	"Crafts",
	"Freelance & Entrepreneurship",
	"Graphic Design",
	"Photography",
	"Productivity",
	"Web Development",
	"Data Science",
	"Cooking",
] as const;
