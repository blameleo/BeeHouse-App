import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


export default function ImageCarousel() {
 const images = ["public/img/test3.jpg", "public/img/test2.webp", "public/img/testimonials.png"];

  return (
    <Slider autoplay={3000}>
{
    images.map((item,index)=>{
        return <img key={index} src={item}/>
    })
}
</Slider>
  )
}
