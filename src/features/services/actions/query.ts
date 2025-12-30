import { SERVICES } from "@/features/services/constant";

export function findServiceBySlug(slug: string) {
	return SERVICES.find((service) => service.slug === slug);
}
