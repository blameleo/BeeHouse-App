import React , {useEffect, useState}from "react";
import Navbar from "../components/Navbar";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ImageCarousel from "../components/ImageCarousel";

export default function Landing() {
    // const images = ["public/img/test3.jpg", "public/img/test2.webp", "public/img/testimonials.png"];
  const [text, count] = useTypewriter({
    words: ["Find the perfect model for your adverts!", "Earn money on the side without no hassle.","Are you unemployed? Heres some work for you."],
    loop: true,
    delaySpeed: 2000,
  });


  
  return (
    <div className="px-10 bg-yellow-500 ">
      <Navbar />
      <div className="grid sm:grid-cols-2 place-items-center   h-96">
        <div className=" h-32 w-full">
          <p className="font-volkhorn sm:text-6xl text-3xl">
            {text}
            <Cursor cursorColor="white" />
          </p>
        </div>
        <div className="">
<ImageCarousel/>
        </div>
      </div>
    </div>
  );
}
