import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage, referenceHead } from "@/components/reference-page";
export const Route = createFileRoute("/faqs")({ head: () => referenceHead("faqs"), component: FaqsPage });
function FaqsPage() { return <ReferencePage path="faqs" />; }