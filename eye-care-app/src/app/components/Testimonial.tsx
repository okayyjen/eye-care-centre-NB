"use client";
import React, { useRef } from "react";
import CenterAligner from "./CenterAligner";
import { testimonials } from "../data/testimonials";
import Image from 'next/image'

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type Props={};

export default function Testimonial({}: Props){
    const sliderRef = useRef<any>();

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000
  };
    return <div className="">
                <section id="testimonials-container">
                    <h1 id="testimonial-text">
                        Testimonials
                    </h1>
                    <div id="rating-container">
                        <div className="star-image-container">
                            <Image className="star-image"
                            src={require("../images/star.png")}
                            alt="star"
                            layout="responsive"
                            />
                            <Image className="star-image"
                            src={require("../images/star.png")}
                            alt="star"
                            layout="responsive"
                            />
                            <Image className="star-image"
                            src={require("../images/star.png")}
                            alt="star"
                            layout="responsive"
                            />
                            <Image className="star-image"
                            src={require("../images/star.png")}
                            alt="star"
                            layout="responsive"
                            />
                            <Image className="star-image"
                            src={require("../images/star.png")}
                            alt="star"
                            layout="responsive"
                            />
                            
                            
                        </div>
                    </div>
                    
                    <Slider {...settings}>
                        {testimonials.map((single, index) => {
                            return (
                                <div key={index}>

                                    <section className="bg-white px-10 pt-6 pb-8 sm:px-20 sm:pt-8 sm:pb-12 flex flex-col items-center rounded-xl overflow-hidden">

                                        <div className="text-center space-y-3 text-[16px] sm:text-[18px]">

                                            <div className="text-blue-900 text-[40px]">
                                                <FaQuoteLeft />
                                            </div>
                                            <p className="leading-[30px]">
                                                {single.testimonial}
                                            </p>
                                            <div className="text-blue-900 text-[40px]">
                                                <FaQuoteRight className="ml-auto" />
                                            </div>
                                        </div>

                                    </section>
                                </div>
                            )
                        })}
                    </Slider>

                </section>
            </div>;
}