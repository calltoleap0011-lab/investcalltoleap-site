import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage, referenceHead } from "@/components/reference-page";
export const Route = createFileRoute("/contact")({ head: () => referenceHead("contact"), component: ContactPage });
function ContactPage() { return <ReferencePage path="contact" />; }