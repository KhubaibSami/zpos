import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import urdu from "../../assets/pos_urdu.jpg";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className=" bg-white ">
      <div
        className="absolute -mt-10 left-0 h-[100vh] w-1/4 bg-no-repeat bg-left"
        style={{ backgroundImage: `url(${left})` }}
      ></div>
      <div
        className="absolute right-0 -mt-32 h-[100vh] w-1/4 bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${right})` }}
      ></div>
      <div className="relative flex justify-center items-center flex-wrap md:flex-nowrap xl:gap-0 gap-8 py-8 lg:px-24 sm:px-2 text-center">
        <div
          className="flex flex-col items-start md:items-center sm:text-center lg:items-start lg:text-left gap-5 max-w-2xl"
          data-aos="fade-right"
        >
          <h1 className="font-bold xs:3xl sm:text-5xl md:text-4xl lg:text-4xl leading-tight md:leading-[8vh] lg:leading-[10vh]">
            <span className="text-blue-400">Z</span>
            <span className="text-red-500">Pos</span> Provide{" "}
            <span className="text-red-500">Best </span>
            <span className="text-blue-400"> Software</span> For Every{" "}
            <span className="text-red-500">Business</span>
          </h1>
          <p>
            ZPOS - best ERP, Stock Management, Point of sale & Invoice Software.
          </p>
          <p>
            We Help Business Succeed With Our Most Powerful Customization
            Software
          </p>
          <p className="text-red-500">Many companies trust our software</p>
          <p>We are here to help you run your Business more efficiently</p>
          <p>Our Software Makes your Work Life Easier.</p>
          <p className="text-blue-400">Save your time and resources</p>
          <img src={urdu} alt="urdu" className="w-[40vw]" />
        </div>
        <div className="flex flex-col items-center gap-4" data-aos="fade-left">
          <img
            src={banner1}
            alt="banner1"
            className="w-[45vw] max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
          />
          <img
            src={banner2}
            alt="banner2"
            className="w-[45vw] max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
