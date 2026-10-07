import { useLanguage } from "../../context/LanguageContext";
import "./About.css";

function About() {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="about__inner">
        <header className="about__header">
          <div className="about__eyebrow">
            <span className="about__eyebrow-line" />
            <span>{t.about.eyebrow}</span>
          </div>

          <div className="about__header-grid">
            <h2 className="about__heading">
              {t.about.headingTop}
              <br />
              <span>{t.about.headingBottom}</span>
            </h2>

            <div className="about__stat">
              <strong>{t.about.statNumber}</strong>

              <span>
                {t.about.statTop}
                <br />
                {t.about.statBottom}
              </span>
            </div>
          </div>
        </header>

        <div className="about__story">
          <div className="about__image-column">
            <figure className="about__image">
              <img
                src="/images/front_door.png"
                alt={t.about.imageAlt}
                loading="lazy"
              />
            </figure>

            <div className="about__image-caption">
              <span>{t.about.imageCaption.brand}</span>
              <span>{t.about.imageCaption.location}</span>
            </div>
          </div>

          <div className="about__copy">
            <span className="about__copy-label">
              {t.about.storyLabel}
            </span>

            <p className="about__lead">
              {t.about.lead}
            </p>

            <div className="about__body">
              <p>{t.about.paragraphOne}</p>
              <p>{t.about.paragraphTwo}</p>
            </div>

            <p className="about__closing">
              {t.about.closing}
            </p>
          </div>
        </div>

        <div className="about__timeline">
          {t.about.milestones.map((milestone) => (
            <article
              className="about__milestone"
              key={milestone.number}
            >
              <div className="about__milestone-top">
                <span className="about__milestone-number">
                  {milestone.number}
                </span>

                <span className="about__milestone-line" />
              </div>

              <h3>{milestone.title}</h3>

              <p>{milestone.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;