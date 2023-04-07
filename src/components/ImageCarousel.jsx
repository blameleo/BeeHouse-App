import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel() {
  return (
    <Carousel
      autoPlay="true"
      infiniteLoop="true"
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      width={400}
    >
      <img
        className="rounded-xl shadow-xl border"
        src="public/img/test2.webp"
      />

      <img className="rounded-xl shadow-xl border" src="public/img/test3.jpg" />

      <img
        className="rounded-xl shadow-xl border"
        src="public/img/testimonials.png"
      />
    </Carousel>
  );
}
