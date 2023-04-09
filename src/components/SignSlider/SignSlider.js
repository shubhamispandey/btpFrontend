import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SignSlider.css";

const SignSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const sliderData = [
    {
      desc: "Simply unbelievable! I am really satisfied with the files safety and security they Provide.",
      user: {
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        name: "Timson K",
        title: "Freelancer",
      },
    },
    {
      desc: "Amazingly amazing I'm happy with the file security they provide. This is wonderful.",
      user: {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Maria R",
        title: "Coder",
      },
    },
    {
      desc: "Truly amazing I appreciate the file security they provide. In every way, this is fantastic ",
      user: {
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "John M",
        title: "Software Developer",
      },
    },
  ];
  return (
    <Slider {...settings}>
      {sliderData.map((el, id) => (
        <div className="login__slider__item" key={id}>
          <p>{el.desc}</p>
          <div className="login__slider__user">
            <div className="login__slider__user--img">
              <img src={el.user.img} alt="" />
            </div>
            <div className="login__slider__user--desc">
              <h4>{el.user.name}</h4>
              <p>{el.user.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SignSlider;
