export type BlogMetadata = {
	title: string;
	description: string;
	image: string;
	isFeatured?: boolean;
	slug: string;
};

export type Blog = {
	metadata: BlogMetadata;
	content: string;
};
