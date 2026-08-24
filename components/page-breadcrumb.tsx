import Link from "next/link";
import type { SeoBreadcrumbItem } from "@/lib/seo/types";

export function PageBreadcrumb({ items }: { items: SeoBreadcrumbItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav className="crumb" aria-label="Đường dẫn">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={`${item.path}-${index}`}>
            {index > 0 ? " / " : null}
            {isLast || item.path === "#" ? (
              item.name
            ) : (
              <Link href={item.path}>{item.name}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
