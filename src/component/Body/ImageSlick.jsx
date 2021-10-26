import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageSlickprops } from "./Props";

export default function ImageSlick() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>
            <ImageSlickprops
              img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/instructor-img-1.jpg"
              h1="Mary Roberts"
              h2="Professional WebDeveloper"
            ></ImageSlickprops>
          </h3>
        </div>
        <div>
          <h3>
            <ImageSlickprops
              img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/instructor-img-2.jpg"
              h1="Esther Howard"
              h2="Developer of Bootcamp"
            ></ImageSlickprops>
          </h3>
        </div>
        <div>
          <h3>
            <ImageSlickprops
              img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/instructor-img-3.jpg"
              h1="Ross Johnson"
              h2="Engineering Architect"
            ></ImageSlickprops>
          </h3>
        </div>
        <div>
          <h3>
            <ImageSlickprops
              img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/instructor-img-4.jpg"
              h1="James Davies"
              h2="WebDeveloper and Designer"
            ></ImageSlickprops>
          </h3>
        </div>
      </Slider>
    </div>
  );
}
