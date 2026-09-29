import type { ReactNode } from "react";
import type { Course, Testimonial } from "./content";

export type AuthFieldProps = {
	id: string;
	label: string;
	type?: "text" | "email" | "password";
	placeholder: string;
	autoComplete: string;
};

export type AuthFormCardProps = {
	mode: "login" | "register";
	eyebrow: string;
	title: ReactNode;
	buttonLabel: string;
	footerText: string;
	footerLinkLabel: string;
	footerHref: string;
};

export type AuthShellProps = {
	eyebrow: string;
	description: string;
	children: ReactNode;
};

export type CourseCardProps = { course: Course };
export type CourseFiltersProps = {
	categories: string[];
	selected: string;
	expanded: boolean;
	onSelect: (category: string) => void;
	onToggle: () => void;
};
export type CourseGridProps = { courses: Course[] };
export type CourseImageProps = { src: string; title: string };
export type CourseMetaProps = { course: Course };
export type StudentStackProps = { students: string[]; extra: number };
export type CategoryCardProps = { name: string; icon: string };
export type OrnamentProps = {
	src: string;
	width: number;
	height: number;
	className: string;
};
export type TestimonialAvatarProps = { src: string; name: string };
export type TestimonialCardProps = { testimonial: Testimonial };
export type FooterLinkGroupProps = {
	label: string;
	links: readonly { label: string; href: string }[];
};
export type RevenueCardProps = {
	title: string;
	period: string;
	amount: string;
	compact?: boolean;
};
export type ShowcaseOrnamentProps = { className: string };
export type ErrorPageProps = { reset: () => void };
export type MiniCourseCardProps = { className: string; featured?: boolean };

export type SectionHeadingLayout = "stacked" | "split";
export type SectionHeadingProps = {
	title: ReactNode;
	description?: ReactNode;
	headingAs?: "h1" | "h2";
	layout?: SectionHeadingLayout;
	className?: string;
	titleClassName?: string;
	descriptionClassName?: string;
	id?: string;
};
