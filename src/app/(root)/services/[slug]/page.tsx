export default async function ServicePage({
	params,
}: PageProps<"/services/[slug]">) {
	const { slug } = await params;

	return <div>Service: {slug}</div>;
}
