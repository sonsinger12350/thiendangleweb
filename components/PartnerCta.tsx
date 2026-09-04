import Link from "next/link";

type PartnerCtaAction = {
	href: string;
	label: string;
	variant?: "dark" | "ghost";
	external?: boolean;
};

export default function PartnerCta({
	kicker,
	title,
	body,
	actions,
}: {
	kicker: string;
	title: string;
	body?: string;
	actions: PartnerCtaAction[];
}) {
	return (
		<div className="cta partner-cta">
			<div>
				<div className="kicker">{kicker}</div>
				<h2>{title}</h2>
				{body ? <p className="partner-cta-body">{body}</p> : null}
			</div>
			<div className="partner-cta-actions">
				{actions.map((action) =>
					action.external ? (
						<a
							key={action.label}
							className={`btn ${action.variant ?? "dark"}`}
							href={action.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{action.label}
						</a>
					) : (
						<Link
							key={action.label}
							className={`btn ${action.variant ?? "dark"}`}
							href={action.href}
						>
							{action.label}
						</Link>
					),
				)}
			</div>
		</div>
	);
}
