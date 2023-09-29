import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Swiper styles

export default function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="">
        {" "}
        <img className="" src="/img/test2.webp" />{" "}
      </div>
      <div>
        {" "}
        <img className=" " src="/img/test3.jpg" />{" "}
      </div>

      <div>
        {" "}
        <img className="" src="/img/testimonials.png" />
      </div>
    </Slider>
  );
}
