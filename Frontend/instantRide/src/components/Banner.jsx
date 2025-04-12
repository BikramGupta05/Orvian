import React from "react";
import hpi from "../../public/hpi.jpg";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row">
        <div className=" w-full md:w-1/2">
          <div className="text-5xl md:text-7xl md:justify-content-center mt-10 md:mt-30">
            <h1>Book Your Ride</h1>
            <h1 className="text-red-500">Instantly</h1>
          </div>
          <div className="mt-6">
            <p>
              Add your trip details. Sit back{" "}
              <span className="text-red-500">&</span> Enjoy the ride.
            </p>
          </div>

          {/* location box */}
          <div className="mt-10 flex flex-col gap-[20px] w-full max-w-md ">
            <label className="input">
              <input type="search" className="grow" placeholder="Enter Your Location" />
              <FaMapLocationDot className="w-10 h-6"/>
            </label>
            <label className="input">
              
              <input type="text" className="grow" placeholder="Enter Destination" />
              <FaLocationArrow className="w-10 h-6"/>
            </label>
          </div>
          <button className="btn btn-neutral mt-6 bg-slate-700 border-0">See Price</button>
        </div>

        {/* Images */}
        <div className="hidden md:flex md:w-1/2  mt-10 rounded-[10px]">
          <img
            src={hpi}
            alt=""
            className="ml-20 w-[510px] h-[550px] object-cover rounded-[10px]"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
