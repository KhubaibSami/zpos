import React from "react";
import card1 from "../../assets/zpos_t1.png";
import card2 from "../../assets/zpos_t2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SoftwareCard = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="text-3xl font-extrabold" data-aos="zoom-in">
        <span className="text-blue-500" >ZPOS</span> <span className="text-red-500">Software</span>
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 lg:gap-10 2xl:gap-96 my-20">
        <div className="group relative shadow-[2px_2px_10px_1px_rgba(0,0,0,0.2)] px-10 py-10 rounded-2xl overflow-hidden" data-aos="fade-up">
          <img src={card2} alt="" className="w-32 transition duration-500 ease-in-out group-hover:opacity-0 " />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 ">
            <h1 className="text-xl font-bold text-center">Business Management</h1>
            <p className="text-center">Your business completely managed</p>
          </div>
        </div>
        <div className="group relative shadow-[2px_2px_10px_1px_rgba(0,0,0,0.2)] px-10 py-10 rounded-2xl overflow-hidden" data-aos="fade-up">
          <img src={card1} alt="" className="w-32 transition duration-500 ease-in-out group-hover:opacity-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            <h1 className="text-xl font-bold text-center">Another Feature</h1>
            <p className="text-center">Description of another feature</p>
          </div>
        </div>
        <div className="group relative shadow-[2px_2px_10px_1px_rgba(0,0,0,0.2)] px-10 py-10 rounded-2xl overflow-hidden" data-aos="fade-up">
          <img src={card2} alt="" className="w-32 transition duration-500 ease-in-out group-hover:opacity-0 " />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            <h1 className="text-xl font-bold text-center">Business Management</h1>
            <p className="text-center">Your business completely managed</p>
          </div>
        </div>
        <div className="group relative shadow-[2px_2px_10px_1px_rgba(0,0,0,0.2)] px-10 py-10 rounded-2xl overflow-hidden " data-aos="fade-up">
          <img src={card1} alt="" className="w-32 transition duration-500 ease-in-out group-hover:opacity-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            <h1 className="text-xl font-bold text-center">Another Feature</h1>
            <p className="text-center">Description of another feature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCard;
