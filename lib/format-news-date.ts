const VN_TIME_ZONE = "Asia/Ho_Chi_Minh";

export function formatNewsDate(
	value?: string | null,
	separator = "/",
): string {
	if (!value) return "";

	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;

	const parts = new Intl.DateTimeFormat("en-GB", {
		timeZone: VN_TIME_ZONE,
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	}).formatToParts(date);

	const day = parts.find((part) => part.type === "day")?.value;
	const month = parts.find((part) => part.type === "month")?.value;
	const year = parts.find((part) => part.type === "year")?.value;
	if (!day || !month || !year) return value;

	return `${day}${separator}${month}${separator}${year}`;
}
