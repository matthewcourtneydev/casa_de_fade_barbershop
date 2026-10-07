import "./Gallery.css";

const featuredWork = [
  {
    number: "01",
    label: "Fade + Texture",
    src: "/images/gallery/gallery-fade-detail.png",
    alt: "Close-up of a finished fade and textured haircut",
    className: "gallery-card--fade",
  },
  {
    number: "02",
    label: "Clean Finish",
    src: "/images/gallery/gallery-curly-fade.png",
    alt: "Finished curly haircut with a clean fade",
    className: "gallery-card--curly",
  },
];

const supportingWork = [
  {
    number: "03",
    label: "Beard + Detail",
    src: "/images/gallery/gallery-beard-fade.png",
    alt: "Finished fade with detailed beard shaping",
    className: "gallery-card--beard",
  },
  {
    number: "04",
    label: "Cut + Shape",
    src: "/images/gallery/gallery-red-hair.png",
    alt: "Finished haircut with a hard part and beard detail",
    className: "gallery-card--red",
  },
  {
    number: "05",
    label: "In the Chair",
    src: "/images/gallery/gallery-barber-at-work.png",
    alt: "Barber working on a client's haircut",
    className: "gallery-card--chair",
  },
  {
    number: "06",
    label: "The Process",
    src: "/images/gallery/gallery-shop-process.png",
    alt: "Barber detailing a client's haircut",
    className: "gallery-card--process",
  },
];

function GalleryCard({ item, featured = false }) {
  return (
    <figure
      className={`gallery-card ${
        featured ? "gallery-card--featured" : "gallery-card--supporting"
      } ${item.className}`}
    >
      <div className="gallery-card__image">
        <img src={item.src} alt={item.alt} loading="lazy" />
      </div>

      <figcaption className="gallery-card__caption">
        <div className="gallery-card__index">
          <span>{item.number}</span>
          <i aria-hidden="true">/</i>
        </div>

        <span className="gallery-card__label">{item.label}</span>
      </figcaption>
    </figure>
  );
}

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__inner">
        <header className="gallery__header">
          <div className="gallery__eyebrow">
            <span className="gallery__eyebrow-line" />
            <span>Gallery</span>
          </div>

          <div className="gallery__header-layout">
            <h2 className="gallery__heading">
              THE WORK.
              <br />
              <span>UP CLOSE.</span>
            </h2>

            <div className="gallery__meta">
              <span>Selected Work</span>
              <span>Casa de Fades</span>
              <span>Rock Hill, SC</span>
            </div>
          </div>
        </header>

        <div className="gallery__featured">
          {featuredWork.map((item) => (
            <GalleryCard item={item} featured key={item.number} />
          ))}
        </div>

        <div className="gallery__supporting">
          {supportingWork.map((item) => (
            <GalleryCard item={item} key={item.number} />
          ))}
        </div>

        <footer className="gallery__footer">
          <span>Selected cuts &amp; details</span>
          <span>Casa de Fades — Rock Hill</span>
        </footer>
      </div>
    </section>
  );
}

export default Gallery;