import { useEffect, useRef, useState } from "react";
import { useSearch } from "@tanstack/react-router";
import pages from "@/content/reference-pages.json";

type ReferencePageData = { src: string; title: string; description: string };
const referencePages: Record<string, ReferencePageData> = pages;

export function getReferencePage(path: string) {
  return referencePages[path];
}

export function referenceHead(path: string) {
  const page = getReferencePage(path);
  const title = page?.title ?? "Page unavailable | Call to Leap";
  const description = page?.description ?? "Call to Leap investing education.";
  return { meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}

export function ReferencePage({ path }: { path: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1800);
  const search = useSearch({ strict: false }) as Record<string, unknown>;
  const pageNumber = Number(search.page ?? 1);
  const page = getReferencePage(path === "blog" && pageNumber > 1 ? `blog?page=${pageNumber}` : path);
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow) return;
      if (event.data?.type === "reference-height" && typeof event.data.height === "number") {
        setHeight(Math.max(300, Math.min(150000, event.data.height)));
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
  if (!page) return <main className="site-container reference-unavailable"><h1>Page unavailable</h1><a href="/blog">Return to the blog</a></main>;
  return <iframe ref={frame} title={page.title} className="reference-page-frame" src={page.src} height={height} sandbox="allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups allow-forms" allow="fullscreen" />;
}