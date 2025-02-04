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
        <div className="p-0 max-w-[1200px] h-auto mx-auto relative">
            <div id="image-carousel">
                <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                        <div key={index} className="relative w-full">
                            <Image
                                src={image.default.src}
                                alt={`Slide ${index + 1}`}
                                layout="responsive"
                                width={500}
                                height={500}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 flex flex-col justify-start items-start p-5 text-white bg-black/50 text-[50px] box-border">
                                <h3 className = "w-[300px] font-extrabold pt-5 pl-[50px]">Lorem Ipsum & Dolor Sit Amet</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="absolute top-1/2 left-0 w-full flex justify-between z-10 text-white">
                <button className="bg-[#384C84] p-2 rounded-lg m-2" onClick={() => sliderRef.current.slickPrev()}>
                    <MdOutlineArrowBackIos/>
                </button>
                <button className="bg-[#384C84] p-2 rounded-lg m-2" onClick={() => sliderRef.current.slickNext()}>
                    <MdOutlineArrowForwardIos/>
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;
