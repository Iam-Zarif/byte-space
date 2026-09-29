import data from "./testimonials.json";

export type Testimonial = {
	id: string;
	name: string;
	role: string;
	avatar: string;
	quote: string;
};

export const testimonials: Testimonial[] = data;
