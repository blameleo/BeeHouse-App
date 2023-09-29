import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ImageCarousel from "../components/ImageCarousel";
import { IoLogoAmazon, IoLogoSass } from "react-icons/io5";
import { SiNetflix } from "react-icons/si";
import { SiUbereats } from "react-icons/si";
import { GoLogoGithub } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

export default function Landing() {
  // useEffect(() => {
  //   setInterval(() => {
  //     setLoading(false);
  //   }, 1000);
  // });

  // const images = ["public/img/test3.jpg", "public/img/test2.webp", "public/img/testimonials.png"];
  const [text, count] = useTypewriter({
    words: [
      "Find the perfect model for your adverts!",
      "Earn money on the side without no hassle.",
      "Are you unemployed? Heres some work for you.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 3000,
  };

  return (
    <div className="bg-yellow-500 h-screen px-8">
      <Navbar />
      <div className="grid sm:grid-cols-2 h-[70vh]   place-items-center">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className=" h-32 w-full"
        >
          <p className="font-volkhorn sm:text-6xl text-3xl">
            {text}
            <Cursor cursorColor="white" />
          </p>
        </div>
        <div className="">
          <img className="   mx-auto" src="/img/prod2.png" />{" "}
          {/* <Slider {...settings}>
            <div className="">
              {" "}
              <img className="rounded-lg   border " src="/img/prod.png" />{" "}
            </div>
            <div>
              {" "}
              <img className="rounded-lg " src="/img/test2.jpg" />{" "}
            </div>

            <div>
              {" "}
              <img className="rounded-lg" src="/img/test3.jpg" />
            </div>
          </Slider>{" "} */}
        </div>
      </div>
      <div className="flex justify-around items-center  text-xl  pt-28    text-gray-700 ">
        <p>Trusted by :</p>
        <IoLogoAmazon />
        <SiNetflix />
        <SiUbereats />
        <IoLogoSass />
        <GoLogoGithub />
      </div>
      {/* <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup> */}
    </div>
  );
}
