<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the recreated investing homepage in the index route and preserve original external destinations for other pages, since this project recreates the supplied page rather than its external services.
- Import downloaded reference media through asset JSON pointers to keep original imagery CDN-hosted.
- Centralize the quick-reply mailto destination in a browser-safe contact module so every replacement CTA addresses the same recipient.
