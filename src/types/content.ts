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
