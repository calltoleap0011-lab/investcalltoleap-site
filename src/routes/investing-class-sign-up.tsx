import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage, referenceHead } from "@/components/reference-page";
export const Route = createFileRoute("/investing-class-sign-up")({ head: () => referenceHead("investing-class-sign-up"), component: InvestingClassPage });
function InvestingClassPage() { return <ReferencePage path="investing-class-sign-up" />; }