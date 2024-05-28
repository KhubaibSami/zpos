import React, { useEffect } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import image from "../../assets/about-bg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-full h-screen lg:h-[50vh] 2xl:h-[30vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center text-white gap-8 lg:gap-32" data-aos="fade-right">
        <div className="text-center lg:text-left" >
          <h1 className="text-4xl font-bold mt-32">Contact Us, ZOPS.PK</h1>
          <p className="my-6">ZPOS makes it easy to give customers Contact Us.</p>
          <div className="my-4">
            <h2 className="flex justify-center lg:justify-start items-center">
              <span className="font-bold text-2xl">Call us :</span>
              <MdOutlinePhone className="text-2xl mx-2" />
              <span>+92-306-4423412</span>
            </h2>
            <h2 className="flex justify-center lg:justify-start items-center">
              <span className="font-bold text-2xl">Email Us:</span>
              <IoMdEye className="text-2xl mx-2" />
              <span>info@zpos.pk</span>
            </h2>
          </div>
        </div>
        <form className="w-full max-w-md mt-12 px-4 py-12 bg-white rounded-2xl" data-aos="fade-left">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full lg:w-1/2 p-2 border-2 border-white rounded-full bg-transparent placeholder-gray-700 text-black"
              style={{ background: "#D1F3FF" }}
            />
            <input
              type="phone"
              placeholder="Your Phone"
              className="w-full lg:w-1/2 p-2 border-2 border-white rounded-full bg-transparent placeholder-gray-700 text-black"
              style={{ background: "#D1F3FF" }}
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mt-4 border-2 border-white rounded-full bg-transparent placeholder-gray-700 text-black"
            style={{ background: "#D1F3FF" }}
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 mt-4 border-2 border-white rounded-xl bg-transparent placeholder-gray-700 text-gray-800"
            style={{ background: "#D1F3FF" }}
          />
          <button
            type="submit"
            className="w-full p-2 mt-4 bg-blue-500 text-white font-bold hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
