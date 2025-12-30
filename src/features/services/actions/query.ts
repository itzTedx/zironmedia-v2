import { SERVICES } from "@/data/constant";
import { slugify } from "@/lib/slugify";

export function findServiceBySlug(slug: string) {
	return SERVICES.find((service) => slugify(service.title) === slug);
}
