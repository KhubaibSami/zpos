import React from "react";
import table from "../../assets/blue.png";
import ProgressBar from "@ramonak/react-progress-bar";
import AOS from "aos";
import "aos/dist/aos.css";

const Software = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center mx-28">
        <h1 className="text-3xl font-extrabold">
          Why Are Our <span className="text-blue-500">Softwares</span> Best Than{" "}
          <span className="text-red-500">Other</span>?
        </h1>
        <div className="grid lg:grid-cols-2 gap-10 sm:grid-cols-1" >
          <img 
            src={table} 
            alt="" 
            className="my-20 rounded-3xl h-4/5 xl:h-3/5 "
            data-aos="fade-right"
          />
          <div     data-aos="fade-left">
            <p className="leading-[6vh] mt-9">
              <b>ZPos</b> is seriously and thoroughly invested by our 18 years of
              experience in the business. <br /> We’re adding & improving it
              continuously, done many releases, many features.
            </p>
            <p className="leading-[6vh] mt-8">
              ZPos is for those who are serious and really want to grow their
              business. You will find yourself a bargain when you buy ZPos.
            </p>
            <h2 className="mb-4 text-lg">
              <b>Multiple Business/Shops</b>
              <span className="text-blue-500 font-extrabold ml-20">90%</span>
            </h2>
            <ProgressBar completed={90} bgColor="#ef4444" labelColor="transparent" height="10px" className="mb-6 w-2/3 sm:w-full"/>
            <h2 className="mb-4 text-lg">
              <b>Sales</b>
              <span className="text-blue-500 font-extrabold ml-32">60%</span>
            </h2>
            <ProgressBar completed={60} bgColor="#ef4444" labelColor="transparent" height="10px" className="mb-6 w-2/3 sm:w-full"/>
            <h2 className="mb-4 text-lg">
              <b>Reports</b>
              <span className="text-blue-500 font-extrabold ml-32">75%</span>
            </h2>
            <ProgressBar completed={75} bgColor="#ef4444" labelColor="transparent" height="10px" className="mb-6 w-2/3 sm:w-full"/>
            <h2 className="mb-4 text-lg">
              <b>Manage Expenses</b>
              <span className="text-blue-500 font-extrabold ml-32">80%</span>
            </h2>
            <ProgressBar completed={80} bgColor="#ef4444" labelColor="transparent" height="10px" className="w-2/3 sm:w-full"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Software;
