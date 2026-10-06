import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage, referenceHead } from "@/components/reference-page";
export const Route = createFileRoute("/terms-of-service")({ head: () => referenceHead("terms-of-service"), component: TermsPage });
function TermsPage() { return <ReferencePage path="terms-of-service" />; }