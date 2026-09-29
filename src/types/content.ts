export type Course = {
	id: string;
	slug: string;
	title: string;
	creator: string;
	image: string;
	category: string;
	lessons: number;
	duration: string;
	comments: number;
	level: string;
	rating: number;
	price: number;
	billingLabel: string;
	featured: boolean;
	students: string[];
	extraStudents: number;
};

export type Testimonial = {
	id: string;
	name: string;
	role: string;
	avatar: string;
	quote: string;
};

export type LearningCategory = {
	name: string;
	icon: string;
};
