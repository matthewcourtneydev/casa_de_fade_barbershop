import { ArrowDown } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./Hero.css";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero__image-column">
        <img
          className="hero__image"
          src="/images/hero_image_one.png"
          alt={t.hero.imageAlt}
        />

        <div
          className="hero__image-shade"
          aria-hidden="true"
        />
      </div>

      <div className="hero__red-panel">
        <div className="hero__panel-top">
          <span>{t.hero.panel.established}</span>
          <span>{t.hero.panel.location}</span>
        </div>

        <div className="hero__secondary-image-wrapper">
          <img
            className="hero__secondary-image"
            src="/images/hero_image_two.png"
            alt={t.hero.secondaryImageAlt}
          />
        </div>

        <div className="hero__panel-copy">
          <span>{t.hero.panel.precision}</span>
          <span>{t.hero.panel.style}</span>
          <span>{t.hero.panel.confidence}</span>
        </div>
      </div>

      <img
        className="hero__title-graphic hero__title-graphic--desktop"
        src="/images/hero_title_desktop.png"
        alt={t.hero.titleAlt}
      />

      <img
        className="hero__title-graphic hero__title-graphic--mobile"
        src="/images/hero_title_mobile.png"
        alt=""
        aria-hidden="true"
      />

      <div className="hero__location">
        <span>{t.hero.eyebrow}</span>
        <span className="hero__location-line" />
      </div>

      <a
        className="hero__scroll"
        href="#services"
        aria-label={t.hero.scrollLabel}
      >
        <span>{t.hero.scroll}</span>
        <ArrowDown size={16} strokeWidth={1.5} />
      </a>
    </section>
  );
}

export default Hero;