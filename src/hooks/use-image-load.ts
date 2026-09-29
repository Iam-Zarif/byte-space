"use client";
import { useState } from "react";
export function useImageLoad() {
	const [status, setStatus] = useState<"loading" | "loaded" | "error">(
		"loading",
	);
	return {
		status,
		onLoad: () => setStatus("loaded"),
		onError: () => setStatus("error"),
	};
}
