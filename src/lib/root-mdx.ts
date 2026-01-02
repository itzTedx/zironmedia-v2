import path from "path";

export const root = (root: string, category?: string) =>
	path.join(process.cwd(), "src", "content", root, category ?? "");
