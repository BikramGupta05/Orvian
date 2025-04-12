import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Shed1 from "../../public/Shed1.png";

import { FaMapLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
const ScheduledRide = () => {
  const filterData = list.filter((data) => data.category === "Bbike");
  const filterDataCar = list.filter((data) => data.category === "Bcar");
  const filterDataAuto = list.filter((data) => data.category === "Bauto");
  const filterDataTaxi = list.filter((data) => data.category === "Btaxi");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row">
        <div>
          <div className="  text-3xl md:text-5xl md:justify-content-center mt-6 md:mt-10">
            Set Your Time, Enjoy the <span className="text-red-500"> Ride</span>
          </div>
          <div>
            <div className="mt-10  flex flex-col gap-[20px] w-full max-w-md ">
            <input type="datetime-local" className="input"/>
              <label className="input">
                <input
                  type="search"
                  className="grow"
                  placeholder="Enter Your Location"
                />
                <FaMapLocationDot className="w-10 h-6" />
              </label>
              <label className="input">
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Destination"
                />
                <FaLocationArrow className="w-10 h-6" />
              </label>
            </div>
            <button className="btn btn-neutral mt-6 bg-slate-700 border-0">
              See Price
            </button>
          </div>
        </div>

        <div className="   mt-10 rounded-[10px]">
          <img
            src={Shed1}
            alt=""
            className=" md:ml-20 md:w-[710px] md:h-[380px] object-cover rounded-[10px]"
          />
        </div>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-25 px-4">
        <div>Book Now Ride Later</div>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
        <div>Book Now Ride Later</div>
        <div>
          <Slider {...settings}>
            {filterDataCar.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
        <div>Book Now Ride Later</div>
        <div>
          <Slider {...settings}>
            {filterDataAuto.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
        <div>Book Now Ride Later</div>
        <div>
          <Slider {...settings}>
            {filterDataTaxi.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ScheduledRide;
