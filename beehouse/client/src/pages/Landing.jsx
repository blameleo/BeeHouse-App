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

  return (
    <div className="bg-yellow-500 h-screen px-8">
      <Navbar />
      <div className="grid sm:grid-cols-2   place-items-center h-[70vh] ">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className=" h-32 w-full "
        >
          <p className="font-volkhorn sm:text-6xl text-3xl">
            {text}
            <Cursor cursorColor="white" />
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1500" className=" ">
          <ImageCarousel />
        </div>
      </div>
      <div className="bg-yellow-500 flex justify-around items-center  text-2xl  mt-20    text-gray-700 font-semibold">
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
