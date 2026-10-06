import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage, referenceHead } from "@/components/reference-page";
export const Route = createFileRoute("/privacy-policy")({ head: () => referenceHead("privacy-policy"), component: PrivacyPage });
function PrivacyPage() { return <ReferencePage path="privacy-policy" />; }