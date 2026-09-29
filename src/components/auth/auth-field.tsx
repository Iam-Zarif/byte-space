type AuthFieldProps = {
	id: string;
	label: string;
	type?: "text" | "email" | "password";
	placeholder: string;
	autoComplete: string;
};

export function AuthField({
	id,
	label,
	type = "text",
	placeholder,
	autoComplete,
}: AuthFieldProps) {
	return (
		<label htmlFor={id} className="block font-body text-gray-950 text-sm">
			<span>{label}</span>
			<input
				id={id}
				name={id}
				type={type}
				required
				autoComplete={autoComplete}
				placeholder={placeholder}
				className="mt-2 h-[53px] w-full rounded-[12px] border border-gray-200 bg-white px-6 font-body text-base outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/15"
			/>
		</label>
	);
}
