import fs from "fs";
import path from "path";

export async function generateStaticParams() {
	const contentDir = path.join(process.cwd(), "src/content/services");
	const categories = fs.readdirSync(contentDir);

	const params: { category: string; slug: string }[] = [];

	categories.forEach((category) => {
		const files = fs.readdirSync(path.join(contentDir, category));
		files.map((file) => {
			params.push({
				category,
				slug: file.replace(".mdx", ""),
			});
		});
	});

	return params;
}

export default function ServicePage() {
	return <div>Service</div>;
}
