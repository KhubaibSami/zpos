import React from 'react';
import about from "../../assets/about-bg.png";
import card from "../../assets/card.png";
import icon4 from "../../assets/icon-04.png";
import icon2 from "../../assets/icon-02.png";
import icon3 from "../../assets/icon-03.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = () => {
  return (
    <div className=" bg-no-repeat bg-cover lg:h-full sm:h-[190vh]" style={{ backgroundImage: `url(${about})` }}>
      <div className='flex items-center justify-center'>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-24 xl:mx-60  '>
        <div>
        <img src={card} alt="card" className='h-[50vh] lg:[h-20vh] xl:h-[45vh] 2xl:h-[10vh]'
        data-aos="fade-right" />
        </div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8  lg:-ml-32 sm:ml-0'>
        

          <div className='flex text-white items-center gap-4' data-aos="fade-right">
            <img src={icon4} alt="icon4" />
            <div >
              <h1 className='font-extrabold'>Are future updates FREE?</h1>
              <p>Yes, all future LIFETIME updates are FREE</p>
            </div>
          </div>
          <div className='flex text-white items-center gap-4' data-aos="fade-right">
            <img src={icon2} alt="icon2" />
            <div>
              <h1 className='font-extrabold'>Are future updates FREE?</h1>
              <p>Yes, all future LIFETIME updates are FREE</p>
            </div>
          </div>
          <div className='flex text-white items-center gap-4' data-aos="fade-right">
            <img src={icon3} alt="icon3" />
            <div>
              <h1 className='font-extrabold'>Are future updates FREE?</h1>
              <p>Yes, all future LIFETIME updates are FREE</p>
            </div>
          </div>
          <div className='flex text-white items-center gap-4' data-aos="fade-right">
            <img src={icon4} alt="icon4" />
            <div>
              <h1 className='font-extrabold'>Are future updates FREE?</h1>
              <p>Yes, all future LIFETIME updates are FREE</p>
            </div>
        
          </div>


        </div>
      </div>
      </div>
    </div>
  );
};

export default Card;
