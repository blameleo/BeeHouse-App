import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";

export default function ModelCardCarousel() {
  const applications = useSelector((state) => state.application.applications);

  return (
    <div>
      {applications.map((application) => {
        const url1 = application?.modelUserId?.imageUrl1;
        const url2 = application?.modelUserId?.imageUrl3;
        const url3 = application?.modelUserId?.imageUrl3;
        return (
          <div>
            <div>
              <Carousel
                autoPlay="true"
                infiniteLoop="true"
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                width={100}
                className=" "
              >
                <img className="rounded-xl shadow-xl border " src={url1} />

                <img className="rounded-xl shadow-xl border" src={url2} />

                <img className="rounded-xl shadow-xl border" src={url3} />
              </Carousel>
            </div>
          </div>
        );
      })}
    </div>
  );
}
