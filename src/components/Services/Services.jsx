import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./Services.css";

const BOOKSY_URL =
  "https://booksy.com/en-us/175045_chriss-the-barber_barber-shop_35253_rock-hill";

function Services() {
  const { t } = useLanguage();

  return (
    <section className="services" id="services">
      <div className="services__inner">
        <header className="services__intro">
          <div className="services__eyebrow">
            <span className="services__eyebrow-line" />
            <span>{t.services.eyebrow}</span>
          </div>

          <div className="services__intro-grid">
            <h2 className="services__heading">
              {t.services.headingTop}
              <br />
              <span>{t.services.headingBottom}</span>
            </h2>

            <div className="services__intro-copy">
              <p>{t.services.intro}</p>

              <a
                className="services__intro-link"
                href={BOOKSY_URL}
                target="_blank"
                rel="noreferrer"
              >
                {t.services.availability}

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>
        </header>

        <div className="services__offerings">
          {t.services.offerings.map((service) => (
            <article
              className="service-offering"
              key={service.number}
            >
              <div
                className="service-offering__index"
                aria-hidden="true"
              >
                <span>{service.number}</span>

                <span className="service-offering__index-slash">
                  /
                </span>
              </div>

              <div className="service-offering__content">
                <h3>{service.name}</h3>

                <div
                  className="service-offering__keywords"
                  aria-label={service.keywords.join(", ")}
                >
                  {service.keywords.map((keyword, index) => (
                    <span key={keyword}>
                      {index > 0 && (
                        <span
                          className="service-offering__separator"
                          aria-hidden="true"
                        >
                          /
                        </span>
                      )}

                      {keyword}
                    </span>
                  ))}
                </div>

                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="services__booking-note">
          <p>{t.services.pricingNote}</p>

          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span>{t.services.booksy}</span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.4}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;