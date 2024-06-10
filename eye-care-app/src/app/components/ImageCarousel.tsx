"use client";
import React, { useRef } from "react";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const images = [
    require("../images/activity_4.png"),
    require("../images/activity_4.png")
];

const ImageCarousel = () => {
    const sliderRef = useRef<any>();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div className="image-carousel-container">
            <div id="image-carousel">
                <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                        <div key={index} className="image-container">
                            <Image
                                src={image.default.src}
                                alt={`Slide ${index + 1}`}
                                layout="responsive"
                                width={500}
                                height={500}
                            />
                            <div className="text-overlay">
                                <h3>Lorem Ipsum & Dolor Sit Amet</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div id="button-container">
                <button className="carousel-button-prev" onClick={() => sliderRef.current.slickPrev()}>
                    <MdOutlineArrowBackIos className="arrow-icon"/>
                </button>
                <button className="carousel-button-next" onClick={() => sliderRef.current.slickNext()}>
                    <MdOutlineArrowForwardIos className="arrow-icon"/>
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;
