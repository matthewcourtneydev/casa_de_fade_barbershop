import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useScrollAnimations() {
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /*
       * ============================================================
       * DESKTOP + TABLET
       * ============================================================
       */

      mm.add("(min-width: 801px)", () => {
        /*
         * ==========================================================
         * HERO
         * ==========================================================
         */

        /*
         * CASA DE FADES title
         *
         * IMPORTANT:
         * Use pixel Y movement instead of yPercent.
         *
         * The title is already positioned in Hero.css with:
         * transform: translateY(-50%);
         *
         * Using yPercent here can interfere with that transform and
         * cause the title to start in the wrong position.
         *
         * GSAP now preserves the CSS resting position and simply
         * adds vertical movement as the hero scrolls away.
         */

        gsap.to(".hero__title-graphic--desktop", {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        /*
         * Main photograph parallax.
         */

        gsap.fromTo(
          ".hero__image",
          {
            yPercent: 0,
            scale: 1,
          },
          {
            yPercent: 9,
            scale: 1.035,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        );

        /*
         * Right portrait travels upward slightly faster.
         */

        gsap.fromTo(
          ".hero__secondary-image-wrapper",
          {
            yPercent: 0,
          },
          {
            yPercent: -16,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 1.1,
              invalidateOnRefresh: true,
            },
          }
        );

        /*
         * Small hero details fade upward.
         */

        gsap.fromTo(
          [
            ".hero__panel-top",
            ".hero__panel-copy",
            ".hero__location",
            ".hero__scroll",
          ],
          {
            y: 0,
            opacity: 1,
          },
          {
            y: -28,
            opacity: 0,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "70% top",
              scrub: 1,
            },
          }
        );

        /*
         * ==========================================================
         * SERVICES
         * ==========================================================
         */

        gsap.fromTo(
          ".services__heading",
          {
            x: -95,
            opacity: 0.35,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".services__intro",
              start: "top 94%",
              end: "top 55%",
              scrub: 0.9,
            },
          }
        );

        gsap.fromTo(
          ".services__intro-copy",
          {
            x: 70,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".services__intro",
              start: "top 92%",
              end: "top 57%",
              scrub: 0.9,
            },
          }
        );

        gsap.fromTo(
          ".services__eyebrow",
          {
            x: -35,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".services",
              start: "top 94%",
              end: "top 72%",
              scrub: 0.7,
            },
          }
        );

        /*
         * Service offerings.
         */

        gsap.utils.toArray(".service-offering").forEach((offering, index) => {
          const direction = index % 2 === 0 ? -1 : 1;

          gsap.fromTo(
            offering,
            {
              x: direction * 65,
              y: 18,
              opacity: 0.2,
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              ease: "none",
              immediateRender: false,
              scrollTrigger: {
                trigger: offering,
                start: "top 95%",
                end: "top 72%",
                scrub: 0.75,
              },
            }
          );
        });

        /*
         * ==========================================================
         * GALLERY
         * ==========================================================
         */

        gsap.fromTo(
          ".gallery__heading",
          {
            y: 70,
            opacity: 0.3,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".gallery__header",
              start: "top 92%",
              end: "top 58%",
              scrub: 0.9,
            },
          }
        );

        gsap.fromTo(
          ".gallery__eyebrow",
          {
            x: -35,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".gallery__header",
              start: "top 94%",
              end: "top 72%",
              scrub: 0.7,
            },
          }
        );

        gsap.fromTo(
          ".gallery__meta",
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".gallery__header",
              start: "top 90%",
              end: "top 62%",
              scrub: 0.8,
            },
          }
        );

        gsap.utils.toArray(".gallery-card").forEach((card, index) => {
          const image = card.querySelector(".gallery-card__image img");
          const caption = card.querySelector(".gallery-card__caption");

          const xOffset = index % 2 === 0 ? -28 : 28;

          gsap.fromTo(
            card,
            {
              x: xOffset,
              y: 60,
              opacity: 0,
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              ease: "none",
              immediateRender: false,
              scrollTrigger: {
                trigger: card,
                start: "top 96%",
                end: "top 70%",
                scrub: 0.75,
              },
            }
          );

          if (image) {
            gsap.fromTo(
              image,
              {
                yPercent: -3,
                scale: 1.04,
              },
              {
                yPercent: 3,
                scale: 1.04,
                ease: "none",
                immediateRender: false,
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              }
            );
          }

          if (caption) {
            gsap.fromTo(
              caption,
              {
                y: 14,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                ease: "none",
                immediateRender: false,
                scrollTrigger: {
                  trigger: card,
                  start: "top 84%",
                  end: "top 68%",
                  scrub: 0.6,
                },
              }
            );
          }
        });

        /*
         * ==========================================================
         * ABOUT
         * ==========================================================
         */

        gsap.fromTo(
          ".about__heading",
          {
            y: 70,
            opacity: 0.3,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".about__header",
              start: "top 92%",
              end: "top 56%",
              scrub: 0.9,
            },
          }
        );

        gsap.fromTo(
          ".about__eyebrow",
          {
            x: -35,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".about",
              start: "top 94%",
              end: "top 72%",
              scrub: 0.7,
            },
          }
        );

        gsap.fromTo(
          ".about__stat",
          {
            x: 45,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".about__header",
              start: "top 90%",
              end: "top 58%",
              scrub: 0.8,
            },
          }
        );

        /*
         * Door column entrance.
         */

        gsap.fromTo(
          ".about__image-column",
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".about__story",
              start: "top 94%",
              end: "top 60%",
              scrub: 0.9,
            },
          }
        );

        /*
         * Door photograph parallax.
         */

        gsap.fromTo(
          ".about__image img",
          {
            yPercent: -4,
            scale: 1.025,
          },
          {
            yPercent: 4,
            scale: 1.025,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".about__image",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.25,
            },
          }
        );

        /*
         * Story copy.
         */

        gsap.fromTo(
          ".about__copy",
          {
            y: 85,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".about__story",
              start: "top 92%",
              end: "top 55%",
              scrub: 0.9,
            },
          }
        );

        /*
         * Timeline.
         */

        gsap.utils.toArray(".about__milestone").forEach((milestone, index) => {
          gsap.fromTo(
            milestone,
            {
              y: 40 + index * 8,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              immediateRender: false,
              scrollTrigger: {
                trigger: milestone,
                start: "top 95%",
                end: "top 76%",
                scrub: 0.65,
              },
            }
          );
        });

        /*
         * ==========================================================
         * CONTACT
         * ==========================================================
         */

        gsap.fromTo(
          ".contact__heading",
          {
            y: 70,
            opacity: 0.3,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".contact",
              start: "top 92%",
              end: "top 58%",
              scrub: 0.9,
            },
          }
        );

        gsap.fromTo(
          ".contact__eyebrow",
          {
            x: -35,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".contact",
              start: "top 94%",
              end: "top 72%",
              scrub: 0.7,
            },
          }
        );

        gsap.fromTo(
          ".contact__details",
          {
            x: -70,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".contact__content",
              start: "top 92%",
              end: "top 60%",
              scrub: 0.9,
            },
          }
        );

        gsap.fromTo(
          ".contact-map",
          {
            x: 75,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".contact__content",
              start: "top 92%",
              end: "top 58%",
              scrub: 0.9,
            },
          }
        );

        /*
         * Map parallax.
         */

        gsap.fromTo(
          ".contact-map__svg",
          {
            xPercent: 2,
            yPercent: 1,
          },
          {
            xPercent: -2,
            yPercent: -1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".contact-map",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          }
        );

        /*
         * Map marker.
         */

        gsap.fromTo(
          ".map-location",
          {
            scale: 0.65,
            opacity: 0,
            transformOrigin: "468px 333px",
          },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".contact-map",
              start: "top 78%",
              end: "top 55%",
              scrub: 0.65,
            },
          }
        );

        gsap.fromTo(
          ".contact__footer",
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".contact__footer",
              start: "top 98%",
              end: "top 88%",
              scrub: 0.6,
            },
          }
        );
      });

      /*
       * ============================================================
       * MOBILE
       * ============================================================
       */

      mm.add("(max-width: 800px)", () => {
        /*
         * Hero title.
         *
         * Mobile doesn't use the desktop translateY(-50%) positioning,
         * so a normal Y animation is safe here too.
         */

        gsap.to(".hero__title-graphic--mobile", {
          y: -55,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.fromTo(
          ".hero__image",
          {
            yPercent: 0,
            scale: 1,
          },
          {
            yPercent: 5,
            scale: 1.02,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        );

        /*
         * Generic mobile entrance helper.
         */

        const mobileReveal = (
          selector,
          trigger = selector,
          distance = 38
        ) => {
          gsap.fromTo(
            selector,
            {
              y: distance,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              immediateRender: false,
              scrollTrigger: {
                trigger,
                start: "top 94%",
                end: "top 74%",
                scrub: 0.65,
              },
            }
          );
        };

        mobileReveal(
          ".services__heading",
          ".services__intro",
          45
        );

        gsap.utils
          .toArray(".service-offering")
          .forEach((offering) => {
            mobileReveal(offering, offering, 30);
          });

        mobileReveal(
          ".gallery__heading",
          ".gallery__header",
          45
        );

        gsap.utils.toArray(".gallery-card").forEach((card) => {
          mobileReveal(card, card, 35);

          const image = card.querySelector(".gallery-card__image img");

          if (image) {
            gsap.fromTo(
              image,
              {
                yPercent: -2,
                scale: 1.025,
              },
              {
                yPercent: 2,
                scale: 1.025,
                ease: "none",
                immediateRender: false,
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              }
            );
          }
        });

        mobileReveal(
          ".about__heading",
          ".about__header",
          45
        );

        mobileReveal(
          ".about__stat",
          ".about__stat",
          30
        );

        mobileReveal(
          ".about__image-column",
          ".about__image-column",
          35
        );

        mobileReveal(
          ".about__copy",
          ".about__copy",
          40
        );

        gsap.utils
          .toArray(".about__milestone")
          .forEach((milestone) => {
            mobileReveal(milestone, milestone, 30);
          });

        mobileReveal(
          ".contact__heading",
          ".contact",
          45
        );

        mobileReveal(
          ".contact__details",
          ".contact__details",
          35
        );

        mobileReveal(
          ".contact-map",
          ".contact-map",
          35
        );

        mobileReveal(
          ".contact__footer",
          ".contact__footer",
          25
        );
      });
    });

    /*
     * Refresh once images/fonts settle.
     */

    const refresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refresh);

    const timer = window.setTimeout(refresh, 300);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(timer);

      ctx.revert();
    };
  }, []);
}

export default useScrollAnimations;