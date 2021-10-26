import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slick } from "./Props";

export default function SlickSlider() {
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
            <Slick
              p='"Morbi quis posuere lacus. Morbi et metus sit amet tellus dapibus aliquam. Morbi consectetur magna vel turpis lobortis lorem iopsum dolor sit commodo."'
              img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-4.jpg"
              name="John Deo"
              position="Web Developer,UK"
            ></Slick>
          </h3>
        </div>
        <div>
          <h3>
            <Slick
              p='"Curabitur sollicitudin mi et sagittis egestas. Curabitur pellentesque nibh id enim hendrerit, at mollis neque rutrum. Sed nibh velit, tristique et dolor vitae."'
              img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5.jpg"
              name="Rubik Nanda"
              position="Web Developer,UK"
            ></Slick>
          </h3>
        </div>
        <div>
          <h3>
            <Slick
              p='"Vestibulum in lobortis purus. Quisque sem turpis, hendrerit quis lacinia nec, rutrum nec velit. Nullam lobortis rhoncus tincidunt lorem ispun dnascetur ridiculus mus."'
              img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-6.jpg"
              name="Barry Watson"
              position="Web Developer,UK"
            ></Slick>
          </h3>
        </div>
        <div>
          <h3>
            <Slick
              src=""
              p='"I started at stage zero. With Geeks I was able to start learning online and eventually build up enough knowledge and skills to transition into a well-paying career."'
              img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1.jpg"
              name=" Barry Watson"
              position="Web Developer,UK"
            ></Slick>
          </h3>
        </div>
        <div>
          <h3>
            <Slick
              p='"Sed pretium risus magna, ac efficitur nunc rutrum imperdiet. Vivamus sed ante sed mi fermentum tempus. Nullam finibus augue eget felis efficitur semper."'
              img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2.jpg"
              name=" Linda Shenoy"
              position="Web Developer,UK"
            ></Slick>
          </h3>
        </div>
        <div>
          <h3>
            <Slick
              p='"Sed pretium risus magna, ac efficitur nunc rutrum imperdiet. Vivamus sed ante sed mi fermentum tempus. Nullam finibus augue eget felis efficitur semper."'
              img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3.jpg"
              name="Jean Watson"
              position="Web Developer,UK"
            ></Slick>
          </h3>
        </div>
      </Slider>
    </div>
  );
}
