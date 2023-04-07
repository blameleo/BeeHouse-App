import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ImageCarousel from "../components/ImageCarousel";
import { IoLogoAmazon, IoLogoSass } from "react-icons/io5";
import { SiNetflix } from "react-icons/si";
import { SiUbereats } from "react-icons/si";
import { GoLogoGithub } from "react-icons/go";

export default function Landing() {
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

  return (
    <div className="bg-yellow-500">
      <div className="px-10 bg-yellow-500   pb-40">
        <Navbar />
        <div className="grid sm:grid-cols-2 place-items-center pt-20  h-96">
          <div className=" h-32 w-full">
            <p className="font-volkhorn sm:text-6xl text-3xl">
              {text}
              <Cursor cursorColor="white" />
            </p>
          </div>
          <div className="">
            <ImageCarousel />
          </div>
        </div>
      </div>

      <div className="bg-yellow-500 flex justify-around items-center  text-2xl w-4/6 mx-auto h-28 text-gray-700 font-semibold">
        <p>Trusted by :</p>
        <IoLogoAmazon />
        <SiNetflix />
        <SiUbereats />
        <IoLogoSass />
        <GoLogoGithub />
      </div>
    </div>
  );
}
