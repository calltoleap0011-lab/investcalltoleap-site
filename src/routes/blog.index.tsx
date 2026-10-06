import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage, referenceHead } from "@/components/reference-page";
export const Route = createFileRoute("/blog/")({
  validateSearch: (search: Record<string, unknown>) => ({ page: Math.max(1, Math.min(5, Number(search['page']) || 1)) }),
  head: () => referenceHead("blog"), component: BlogPage,
});
function BlogPage() { return <ReferencePage path="blog" />; }