import { createFileRoute } from "@tanstack/react-router";
import { ReferencePage, referenceHead } from "@/components/reference-page";
export const Route = createFileRoute("/financial-freedom-faster-sign-up")({ head: () => referenceHead("financial-freedom-faster-sign-up"), component: RoadmapPage });
function RoadmapPage() { return <ReferencePage path="financial-freedom-faster-sign-up" />; }