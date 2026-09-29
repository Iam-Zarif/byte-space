import type { Testimonial } from "@/data/testimonials";
import { TestimonialAvatar } from "./testimonial-avatar";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
	return (
		<figure className="rounded-3xl bg-white p-6">
			<figcaption>
				<TestimonialAvatar
					key={testimonial.avatar}
					src={testimonial.avatar}
					name={testimonial.name}
				/>
				<h3 className="mt-6 font-bold text-black text-xl leading-7">
					{testimonial.name}
				</h3>
				<p className="text-lg text-primary leading-7">{testimonial.role}</p>
			</figcaption>
			<blockquote className="mt-7 font-body text-gray-700 text-lg leading-7.25">
				&quot;{testimonial.quote}&quot;
			</blockquote>
		</figure>
	);
}
