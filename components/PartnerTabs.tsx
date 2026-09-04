"use client";

import { useEffect, useState } from "react";
import { PARTNER_TABS, type PartnerTabId } from "@/lib/partner";

function isTabId(value: string): value is PartnerTabId {
	return PARTNER_TABS.some((tab) => tab.id === value);
}

export default function PartnerTabs({
	children,
}: {
	children: React.ReactNode;
}) {
	const [active, setActive] = useState<PartnerTabId>("cung-ung");
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const fromHash = window.location.hash.replace(/^#/, "");
		if (isTabId(fromHash)) {
			setActive(fromHash);
		}
		setReady(true);
	}, []);

	function select(id: PartnerTabId) {
		setActive(id);
		window.history.replaceState(null, "", `#${id}`);
		document
			.getElementById("partner-tabbar")
			?.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	return (
		<>
			<div className="partner-tabbar" id="partner-tabbar">
				<div className="wrap">
					<nav
						className="partner-tabs"
						role="tablist"
						aria-label="Nội dung đồng hành"
					>
						{PARTNER_TABS.map((tab) => (
							<button
								key={tab.id}
								type="button"
								role="tab"
								id={`tab-${tab.id}`}
								aria-selected={active === tab.id}
								aria-controls={tab.id}
								className={
									active === tab.id
										? "partner-tab is-active"
										: "partner-tab"
								}
								onClick={() => select(tab.id)}
							>
								{tab.label}
							</button>
						))}
					</nav>
				</div>
			</div>
			<div
				className="partner-panels"
				data-ready={ready ? "true" : undefined}
				data-active={active}
			>
				{children}
			</div>
		</>
	);
}
