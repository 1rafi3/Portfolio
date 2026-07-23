export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export function formatDateRange(
  start: string,
  end: string | "present",
): string {
  const startDate = formatDate(start);
  const endDate = end === "present" ? "Present" : formatDate(end);
  return `${startDate} — ${endDate}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
