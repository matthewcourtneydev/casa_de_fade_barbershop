import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./Contact.css";

const BOOKSY_URL =
  "https://booksy.com/en-us/175045_chriss-the-barber_barber-shop_35253_rock-hill";

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Casa+de+Fades+Barbershop+2260+Cross+Pointe+Dr+Rock+Hill+SC+29730";

const INSTAGRAM_URL = "https://www.instagram.com/casadefadesbarbershop/";

const FACEBOOK_URL = "https://www.facebook.com/soycardic/";

function ContactMap({ t }) {
  return (
    <div className="contact-map">
      <svg
        className="contact-map__svg"
        viewBox="0 0 900 600"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <path
          className="map-road map-road--primary"
          d="M -40 125 C 120 148, 255 151, 375 134 C 520 113, 690 68, 950 38"
        />

        <path
          className="map-road map-road--secondary"
          d="M 112 -30 C 132 90, 150 185, 145 270 C 139 372, 103 475, 36 640"
        />

        <path
          className="map-road map-road--secondary"
          d="M 142 275 C 250 277, 330 246, 405 211 C 514 160, 640 143, 760 125 C 817 116, 873 104, 950 89"
        />

        <path
          className="map-road map-road--secondary"
          d="M 146 273 C 230 290, 300 323, 365 370 C 421 411, 473 459, 525 500"
        />

        <path
          className="map-road map-road--secondary"
          d="M 213 415 C 310 462, 405 510, 525 548"
        />

        <path
          className="map-road map-road--secondary"
          d="M 525 500 C 592 519, 658 553, 750 626"
        />

        <path
          className="map-road map-road--minor"
          d="M 505 188 C 526 272, 541 355, 525 478"
        />

        <circle className="map-roundabout" cx="525" cy="500" r="19" />

        <path
          className="map-water"
          d="M 720 325 C 741 309, 767 309, 780 329 C 793 350, 784 374, 775 397 C 766 421, 751 440, 731 434 C 710 428, 702 405, 704 380 C 706 357, 704 338, 720 325 Z"
        />

        <g className="map-labels">
          <text x="470" y="113" transform="rotate(-10 470 113)">
            {t.map.daveLyle}
          </text>

          <text x="104" y="205" transform="rotate(84 104 205)">
            {t.map.galleria}
          </text>

          <text x="510" y="184" transform="rotate(-11 510 184)">
            {t.map.crossPointe}
          </text>

          <text x="279" y="338" transform="rotate(36 279 338)">
            {t.map.oldSpringdale}
          </text>

          <text x="326" y="482" transform="rotate(26 326 482)">
            {t.map.bilwyn}
          </text>

          <text x="595" y="542" transform="rotate(28 595 542)">
            {t.map.springdale}
          </text>
        </g>

        <g className="map-location">
          <circle className="map-location__glow" cx="468" cy="333" r="44" />

          <circle className="map-location__circle" cx="468" cy="333" r="29" />

          <MapPin x="454" y="319" width="28" height="28" strokeWidth={1.6} />

          <g className="map-location__copy">
            <text className="map-location__name" x="510" y="329">
              {t.map.brand}
            </text>

            <text className="map-location__city" x="511" y="350">
              {t.map.city}
            </text>
          </g>
        </g>
      </svg>

      <a
        className="contact-map__click-target"
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={t.directionsLabel}
      />
    </div>
  );
}

function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__eyebrow">
          <span className="contact__eyebrow-line" />
          <span>{t.contact.eyebrow}</span>
        </div>

        <div className="contact__heading">
          <h2>
            {t.contact.headingTop}
            <br />
            <span>{t.contact.headingBottom}</span>
          </h2>
        </div>

        <div className="contact__content">
          <div className="contact__details">
            <div className="contact__info-grid">
              <div className="contact__find">
                <span className="contact__label">{t.contact.findUs}</span>

                <a
                  className="contact__address"
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    {t.contact.addressLineOne}
                    <br />
                    {t.contact.addressLineTwo}
                  </span>

                  <ArrowUpRight size={18} strokeWidth={1.4} />
                </a>
              </div>

              <div className="contact__hours">
                <span className="contact__label">{t.contact.hours}</span>

                <div className="contact__hours-row">
                  <span>{t.contact.schedule.weekdays}</span>

                  <strong>{t.contact.schedule.weekdaysHours}</strong>
                </div>

                <div className="contact__hours-row">
                  <span>{t.contact.schedule.sunday}</span>

                  <strong>{t.contact.schedule.sundayHours}</strong>
                </div>
              </div>
            </div>

            <div className="contact__phone-row">
              <a className="contact__phone" href="tel:+18034440118">
                <span className="contact__phone-icon">
                  <Phone size={19} strokeWidth={1.35} />
                </span>

                <span>{t.contact.phone}</span>
              </a>

              <p className="contact__note">
                {t.contact.appointmentNoteTop}
                <br />
                {t.contact.appointmentNoteBottom}
              </p>
            </div>

            <div className="contact__actions">
              <a
                className="contact__book"
                href={BOOKSY_URL}
                target="_blank"
                rel="noreferrer"
              >
                <span>{t.contact.book}</span>

                <ArrowUpRight size={20} strokeWidth={1.4} />
              </a>

              <a
                className="contact__directions"
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
              >
                <span>{t.contact.directions}</span>

                <ArrowUpRight size={17} strokeWidth={1.4} />
              </a>
            </div>
          </div>

          <ContactMap t={t.contact} />
        </div>

        <footer className="contact__footer">
          <div className="contact__footer-brand">
            <span>{t.contact.footer.brand}</span>
            <small>{t.contact.footer.type}</small>
          </div>

          <div className="contact__footer-socials">
            <a
              href="https://www.instagram.com/casadefadesbarbershop/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Casa de Fades on Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/soycardic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Casa de Fades on Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
              <span>Facebook</span>
            </a>
          </div>

          <span className="contact__footer-location">
            {t.contact.footer.location}
          </span>

          <span className="contact__copyright">
            {t.contact.footer.copyright}
          </span>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
