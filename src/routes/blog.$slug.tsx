import { createFileRoute, notFound } from "@tanstack/react-router";
import { ReferencePage, getReferencePage, referenceHead } from "@/components/reference-page";
export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => { if (!getReferencePage(`blog/${encodeURIComponent(params.slug)}`) && !getReferencePage(`blog/${params.slug}`)) throw notFound(); },
  head: ({ params }) => referenceHead(getReferencePage(`blog/${encodeURIComponent(params.slug)}`) ? `blog/${encodeURIComponent(params.slug)}` : `blog/${params.slug}`),
  component: ArticlePage,
});
function ArticlePage() {
  const { slug } = Route.useParams();
  const path = getReferencePage(`blog/${encodeURIComponent(slug)}`) ? `blog/${encodeURIComponent(slug)}` : `blog/${slug}`;
  return <ReferencePage path={path} />;
}