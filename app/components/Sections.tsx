import Img from "./Img";
import MenuTabs from "./MenuTabs";
import type { SiteContent } from "@/lib/content";

export function Nav({ content }: { content: SiteContent }) {
  return (
    <nav className="nav">
      <a href="#top" className="nav-brand">
        {content.brand}
      </a>
      <div className="nav-right">
        {content.nav.map((l) => (
          <a key={l.href} href={l.href} className="nav-link">
            {l.label}
          </a>
        ))}
        <a href={`tel:${content.phone.href}`} className="nav-phone">
          {content.phone.display}
        </a>
      </div>
    </nav>
  );
}

export function Hero({ hero }: { hero: SiteContent["hero"] }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="kicker kicker-line" data-hero>
          <span className="rule" aria-hidden />
          <span>{hero.kicker}</span>
        </div>
        <h1>
          <span className="hl">
            <span>{hero.titleLead}</span>
          </span>
          <span className="hl">
            <span>
              <em>{hero.titleEm}</em>
            </span>
          </span>
        </h1>
        <p className="hero-sub" data-hero>
          {hero.subhead}
        </p>
        <div className="hero-actions" data-hero>
          <a href={hero.primaryCta.href} className="btn btn-primary">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn btn-ghost">
            {hero.secondaryCta.label}
          </a>
        </div>
        <div className="hero-stats" data-hero>
          {hero.stats.map((s, i) => (
            <div className="stat" key={i}>
              <span className="value">{s.value}</span>
              <span className="label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-media">
        <Img
          src={hero.image}
          alt={hero.imageCaption}
          priority
          sizes="(max-width: 900px) 100vw, 48vw"
        />
      </div>
    </section>
  );
}

export function TonightStrip({ items }: { items: SiteContent["tonight"] }) {
  return (
    <section className="strip">
      {items.map((t, i) => (
        <div className="strip-cell reveal" data-reveal key={i}>
          <span className="k">{t.kicker}</span>
          <p>{t.text}</p>
        </div>
      ))}
    </section>
  );
}

export function MenuSection({ menu }: { menu: SiteContent["menu"] }) {
  return (
    <section className="menu" id="menu">
      <div className="menu-head reveal" data-reveal>
        <div className="menu-head-left">
          <span className="kicker">{menu.kicker}</span>
          <h2>{menu.heading}</h2>
        </div>
        <p className="note">{menu.note}</p>
      </div>
      <MenuTabs categories={menu.categories} tasting={menu.tasting} />
    </section>
  );
}

export function Story({ story }: { story: SiteContent["story"] }) {
  return (
    <section className="story" id="story">
      <div className="story-media reveal" data-reveal>
        <Img
          src={story.image}
          alt={story.imageCaption}
          sizes="(max-width: 900px) 100vw, 46vw"
        />
      </div>
      <div className="story-copy reveal" data-reveal>
        <span className="kicker">{story.kicker}</span>
        <h2>{story.heading}</h2>
        {story.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="story-quote">&ldquo;{story.quote}&rdquo;</p>
      </div>
    </section>
  );
}

export function Visit({ visit }: { visit: SiteContent["visit"] }) {
  return (
    <section className="visit" id="visit">
      <div className="visit-cell reveal" data-reveal>
        <span className="k">{visit.kicker}</span>
        <p className="visit-address">
          {visit.addressLines.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        <p className="visit-transit">{visit.transit}</p>
      </div>
      <div className="visit-cell reveal" data-reveal>
        <span className="k">Hours</span>
        <div className="hours">
          {visit.hours.map((h, i) => (
            <div className="hours-row" key={i}>
              <span>{h.day}</span>
              <span className={h.rest ? "t rest" : "t"}>{h.time}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="visit-media reveal" data-reveal>
        <Img
          src={visit.image}
          alt={visit.imageCaption}
          sizes="(max-width: 900px) 100vw, 33vw"
        />
      </div>
    </section>
  );
}

export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="footer">
      <span className="footer-brand">{content.brand}</span>
      <div className="footer-links">
        {content.footer.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.href.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {l.label}
          </a>
        ))}
      </div>
      <span className="footer-note">{content.footer.note}</span>
    </footer>
  );
}
