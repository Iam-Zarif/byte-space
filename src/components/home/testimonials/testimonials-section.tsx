import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialsSection() {
	return (
		<section
			aria-labelledby="testimonials-heading"
			className="bg-[#fafafa] px-5 pt-16 pb-14 sm:px-6 lg:pt-19"
			style={{
				backgroundImage:
					"radial-gradient(ellipse at 49% 27%, #e7ff91 0%, transparent 31%), radial-gradient(ellipse at 100% 38%, #ecffa8 0%, transparent 38%), radial-gradient(ellipse at 8% 92%, #becbf4 0%, transparent 30%)",
			}}
		>
			<div className="mx-auto max-w-300">
				<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
					<h2
						id="testimonials-heading"
						className="max-w-130 font-bold text-3xl text-black leading-[1.12] tracking-[-1px] sm:text-[44px]"
					>
						Discover What Our Community Is Saying
					</h2>
					<p className="font-body text-gray-700 text-lg leading-7.25">
						At ByteSpace, our vibrant community of learners and creators is at
						the heart of what we do. Hear directly from those who have
						experienced the transformative journey of learning and creating on
						our platform. Explore testimonials that reflect the diverse
						perspectives of enthusiastic learners and accomplished creators.
					</p>
				</div>
				<div className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-10">
					{testimonials.map((testimonial) => (
						<TestimonialCard key={testimonial.id} testimonial={testimonial} />
					))}
				</div>
			</div>
		</section>
	);
}
