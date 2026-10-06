import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage, referenceHead } from "@/components/reference-page";
export const Route = createFileRoute("/org-paid-accelerator-booking-application")({ head: () => referenceHead("org-paid-accelerator-booking-application"), component: ApplicationPage });
function ApplicationPage() { return <ReferencePage path="org-paid-accelerator-booking-application" />; }