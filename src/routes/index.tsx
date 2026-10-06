import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QUICK_REPLY_HREF } from "@/lib/contact";
import logo from "@/assets/leap-0.png.asset.json";
import featured from "@/assets/leap-1.png.asset.json";
import steve from "@/assets/leap-2.png.asset.json";
import clarify from "@/assets/leap-3.png.asset.json";
import invest from "@/assets/leap-4.png.asset.json";
import accelerate from "@/assets/leap-5.png.asset.json";
import team from "@/assets/leap-6.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Investing | Call To Leap" },
    { name: "description", content: "Learn a simple, responsible way to invest with Steve Chen and the Call to Leap framework." },
    { property: "og:title", content: "Investing | Call To Leap" },
    { property: "og:description", content: "Find clarity, start investing, and build your financial future with Call to Leap." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const original = "";
function EmailButton() {
  return <Button asChild className="roadmap-button"><a href={QUICK_REPLY_HREF}>send an email for quicker replies</a></Button>;
}
function EmailBand() {
  return <section className="email-band"><p>Still unsure how to start? Get the $1M Investing Roadmap ⬇️</p><EmailButton /></section>;
}
const positive = ["You’re new to investing and don’t know where to start", "You’ve been saving money but feel unsure what to do next", "You want long-term growth, not gambling or day trading", "You prefer simple explanations over complex financial jargon", "You want to learn how to manage your own money responsibly"];
const negative = ["You’re looking for quick wins or get-rich-quick strategies", "You want someone else to manage your money for you", "You’re interested in high-risk trading or speculation", "You’re not ready to learn or take responsibility for your finances"];
const pillars = [
  { title: "Clarify", image: clarify.url, intro: <>You don’t need another strategy. You need <strong>clarity.</strong></>, points: ["Are overwhelmed with money", "Want a simple checklist", "Need an actionable roadmap to $1M"], ending: <>We help you understand where you are and how to actually get to your goals.</>, action: "Get Clarity", href: `${original}/financial-freedom-faster-sign-up?email=` },
  { title: "Invest", image: invest.url, intro: <>Once you’re clear, the next step is <strong>investing.</strong></>, points: ["Are ready to start investing the right way", "Want long-term growth, not hype", "Prefer simple systems over complex tactics"], ending: <>You’ll learn how to build a real portfolio with a simple <strong>3-ETF strategy.</strong></>, action: "Start Investing", href: "https://calltoleap.easywebinar.live/Beginners-Investing-Master-Class?email=" },
  { title: "Accelerate", image: accelerate.url, intro: <>Move faster with <strong>structure and accountability.</strong></>, points: ["Have capital ready to invest", "Want hands-on guidance, not guesswork", "Prefer coaching over trial and error"], ending: <>We help you execute confidently and avoid costly mistakes.</>, action: "See If You Qualify", href: `${original}/org-paid-accelerator-booking-application?email=` },
];
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <header className="site-header"><div className="site-container header-inner">
      <a className="brand" href="/"><img src={logo.url} alt="" />call to leap</a>
      <nav aria-label="Main navigation" className={`main-nav ${menuOpen ? "is-open" : ""}`}>
        <Link to="/">Home</Link><Link to="/financial-freedom-faster-sign-up">$1M Roadmap</Link><Link to="/investing-class-sign-up">Investing Class</Link><a className="login-link" href="https://invest.calltoleap.com/login">Members Log In</a>
      </nav>
      <Button variant="ghost" size="icon" className="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
    </div></header>
    <main>
      <section className="investing-hero"><div className="site-container">
        <h1>If investing feels <em>overwhelming</em>, start here.</h1>
        <p>This free <strong className="hero-highlight">$1M Investing Roadmap</strong> shows you the right next step based on where you’re at.<br />No jargon. No pressure. Just clarity.</p>
        <EmailButton />
      </div></section>
      <section className="featured"><div className="site-container"><p><strong>Featured in</strong></p><img src={featured.url} alt="Yahoo Finance, Bloomberg, CNBC, MarketWatch, Business Insider" /></div></section>
      <section className="about-section"><div className="site-container about-grid">
        <div className="about-copy"><h2 className="section-title">A simple, responsible way to start investing</h2>
          <p>I’m a former public school teacher who became a self-made millionaire by keeping investing simple and consistent.</p>
          <p>Today, my content has helped <strong>5+ million people</strong> learn how to invest with confidence, and <strong>5,000+ students</strong> build real portfolios without relying on a money manager.</p>
          <p>If you’re a beginner and want a clear, responsible path to financial freedom, <em>you’re in the right place.</em></p><p>-Steve</p>
        </div><img className="about-photo" src={steve.url} alt="Steve Chen, founder of Call to Leap" />
      </div></section>
      <section className="audience-section"><div className="site-container audience-grid">
        <div><h2>This is for you if…</h2><ul>{positive.map(text => <li key={text}>{text}</li>)}</ul></div>
        <div><h2>This might not be for you if…</h2><ul>{negative.map(text => <li key={text}>{text}</li>)}</ul></div>
      </div></section>
      <EmailBand />
      <section className="framework-section"><div className="site-container">
        <h2 className="section-title">The Call to Leap Framework</h2><p className="section-subtitle">A 3-step system that transforms your finances</p>
        <div className="framework-grid">{pillars.map(p => <article className="framework-item" key={p.title}><img src={p.image} alt="" loading="lazy" /><h3>{p.title}</h3><p>{p.intro}</p><p>This is for people who:</p><ul>{p.points.map(text => <li key={text}>{text}</li>)}</ul><p>{p.ending}</p><Button asChild className="roadmap-button"><a href={p.href}>{p.action}</a></Button></article>)}</div>
      </div></section>
      <section className="members-section"><div className="site-container"><h2 className="section-title">What Our Members Say</h2><div className="testimonial-grid">{["zqzhghf2n1", "58nuxyr76e"].map((id, index) => <iframe key={id} className="member-video" src={`https://fast.wistia.net/embed/iframe/${id}`} title={`Call to Leap member testimonial ${index + 1}`} loading="lazy" allow="autoplay; fullscreen" allowFullScreen />)}</div></div></section>
      <EmailBand />
      <section className="team-section"><div className="site-container"><h2 className="section-title">Meet the Team</h2><img src={team.url} alt="The Call to Leap team" loading="lazy" /></div></section>
      <section className="faq-section"><p>Have questions or want to see student results? Click here. ⬇️</p><Button asChild className="roadmap-button"><Link to="/faqs">FAQs &amp; Student Results</Link></Button></section>
    </main>
    <footer className="site-footer"><div className="site-container footer-inner"><div className="footer-brand"><img src={logo.url} alt="" /><span>© 2026 call to leap</span></div><nav aria-label="Footer navigation" className="footer-links"><Link to="/contact">Contact</Link><Link to="/faqs">FAQ's</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-of-service">Terms of Service</Link><Link to="/contact">Contact</Link><Link to="/blog" search={{ page: 1 }}>Blog</Link></nav></div></footer>
  </>;
}
