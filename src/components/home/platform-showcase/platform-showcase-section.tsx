import { FaCheckCircle } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/section-heading";
import { CreatorVisual } from "./creator-visual";
import { GrowthVisual } from "./growth-visual";

const benefits = [
	"Share Your Expertise",
	"Monetize Your Passion",
	"Flexibility and Autonomy",
	"Build a Community",
];
export function PlatformShowcaseSection() {
	return (
		<section
			id="creators"
			aria-label="Learn and create with ByteSpace"
			className="overflow-hidden bg-[#fafafa] px-5 py-20 sm:px-6"
			style={{
				backgroundImage:
					"radial-gradient(ellipse at 25% 0%, #eaff9c 0%, transparent 30%), radial-gradient(ellipse at 0% 50%, #dce2f9 0%, transparent 25%), radial-gradient(ellipse at 0% 90%, #eaff9c 0%, transparent 25%), radial-gradient(ellipse at 90% 100%, #d1dbfa 0%, transparent 30%)",
			}}
		>
			<div className="mx-auto grid max-w-[1200px] items-center gap-x-16 gap-y-12 md:grid-cols-2">
				<div className="max-w-127.5">
					<SectionHeading
						title="Your Path to Professional Growth Starts Here!"
						description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
						titleClassName="mb-8 font-bold text-3xl leading-[1.15] tracking-[-1px] sm:text-[40px]"
						descriptionClassName="max-w-[430px] text-left text-base text-gray-700 leading-7"
					/>
					<dl className="mt-10 flex gap-12">
						{[
							["12K", "Students"],
							["70+", "Courses"],
							["16", "Creators"],
						].map(([value, label]) => (
							<div key={label}>
								<dt className="font-bold text-3xl text-primary">{value}</dt>
								<dd className="mt-1 text-gray-700 text-sm">{label}</dd>
							</div>
						))}
					</dl>
				</div>
				<GrowthVisual />
				<div className="order-4 md:order-none">
					<CreatorVisual />
				</div>
				<div className="max-w-127.5">
					<SectionHeading
						title="Create & Manage Courses Easily."
						description={
							<>
								<strong className="text-gray-950">ByteSpace</strong> supports
								individuals or entities in the creation, publication, and
								administration of educational courses.
							</>
						}
						titleClassName="mb-8 font-bold text-3xl leading-[1.15] tracking-[-1px] sm:text-[40px]"
						descriptionClassName="text-left text-base text-gray-700 leading-7"
					/>
					<ul className="mt-8 space-y-3">
						{benefits.map((benefit) => (
							<li key={benefit} className="flex items-center gap-2 text-base">
								<FaCheckCircle
									aria-hidden="true"
									className="shrink-0 text-primary"
								/>
								{benefit}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
