import Link from "next/link";

import { CONTACT } from "../data/constants";

export const ContactList = () => {
	return (
		<ul className="space-y-6">
			{CONTACT.map((contact) => (
				<li className="flex items-center gap-3" key={contact.label}>
					<span className="w-12 font-mono text-muted-foreground text-xs uppercase leading-none tracking-tight">
						{contact.label}
						<span className="font-bold text-brand-secondary">.</span>
					</span>
					<Link
						className="font-medium text-xl leading-none"
						href={contact.href}
					>
						{contact.value}
					</Link>
				</li>
			))}
		</ul>
	);
};
