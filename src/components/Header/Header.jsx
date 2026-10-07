import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./Header.css";

const BOOKSY_URL =
  "https://booksy.com/en-us/175045_chriss-the-barber_barber-shop_35253_rock-hill";

const INSTAGRAM_URL = "https://www.instagram.com/casadefadesbarbershop/";

const FACEBOOK_URL = "https://www.facebook.com/soycardic/";

function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t.navigation.home, href: "#home" },
    { label: t.navigation.services, href: "#services" },
    { label: t.navigation.gallery, href: "#gallery" },
    { label: t.navigation.about, href: "#about" },
    { label: t.navigation.contact, href: "#contact" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a
        className="site-header__brand"
        href="#home"
        aria-label="Casa de Fades home"
      >
        <img
          className="site-header__logo"
          src="/images/logo_transparent.png"
          alt="Casa de Fades Barbershop"
        />
      </a>

      <nav className="site-header__nav" aria-label="Primary navigation">
        {navItems.map((item, index) => (
          <a
            key={item.href}
            className={
              index === 0
                ? "site-header__link site-header__link--active"
                : "site-header__link"
            }
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="site-header__actions">
        <div className="language-switcher" aria-label="Select language">
          <button
            className={`language-switcher__button ${
              language === "en" ? "language-switcher__button--active" : ""
            }`}
            type="button"
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>

          <span className="language-switcher__divider" aria-hidden="true" />

          <button
            className={`language-switcher__button ${
              language === "es" ? "language-switcher__button--active" : ""
            }`}
            type="button"
            onClick={() => setLanguage("es")}
            aria-pressed={language === "es"}
          >
            ES
          </button>
        </div>

        <a
          className="header-book-button"
          href={BOOKSY_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span>{t.navigation.book}</span>
          <ArrowUpRight size={17} strokeWidth={1.8} />
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              className={
                index === 0
                  ? "mobile-menu__link mobile-menu__link--active"
                  : "mobile-menu__link"
              }
              href={item.href}
              onClick={handleNavClick}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__socials">
          <a
            href="https://www.instagram.com/casadefadesbarbershop/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Casa de Fades on Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://www.facebook.com/soycardic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Casa de Fades on Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <div className="mobile-menu__footer">
          <div className="mobile-menu__language">
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              English
            </button>

            <span>/</span>
            <button
              type="button"
              className={language === "es" ? "active" : ""}
              onClick={() => setLanguage("es")}
            >
              Español
            </button>
          </div>

          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noreferrer"
            className="mobile-menu__book"
            onClick={handleNavClick}
          >
            {t.navigation.book}
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
