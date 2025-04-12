import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarH from "../../public/CarH.png";
import BikeH from "../../public/BikeH.png";
import TaxiH from "../../public/TaxiH.png";
import AutoH from "../../public/AutoH.png";

const Services = () => {
  const settings = {
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
      <div className="px-4 mt-6 md:px-25">
        <p className="text-3xl md:text-4xl">Our Services</p>
        <div className="flex mt-5 gap-[30px]"></div>
        <div>
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="px-4 py-3">
              <div className="card bg-base-100 w-[vw] shadow-sm overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <figure>
                  <img src={BikeH} alt="Bike" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title flex justify-between">
                    <button className=" hover:underline cursor-pointer">
                      Bikes
                    </button>
                    <div className="badge badge-secondary">20% 0ff</div>
                  </h2>
                  <p>
                    Dodge the traffic, feel the breeze — book a bike instantly!
                    Speed through the city with ease and style.
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline bg-green-300 cursor-pointer hover:bg-green-500">
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="px-4 py-3">
              <div className="card bg-base-100 w-[vw] shadow-sm overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <figure>
                  <img src={CarH} alt="Car" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-between">
                    <button className=" hover:underline cursor-pointer">
                      Cars
                    </button>
                    <div className="badge badge-secondary">10% off</div>
                  </h2>
                  <p>
                    Need comfort and class? Book your car ride in seconds!
                    Luxury, safety, and convenience — all just a click away
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline  bg-green-300 cursor-pointer hover:bg-green-500">
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="px-4 py-3">
              <div className="card bg-base-100 w-[vw] shadow-sm overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <figure>
                  <img src={AutoH} alt="Auto" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-between">
                    <button className=" hover:underline cursor-pointer">
                      Auto Rishkaw
                    </button>
                    <div className="badge badge-secondary max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      30% off
                    </div>
                  </h2>
                  <p>
                    Quick, convenient, and budget-friendly — book your auto now!
                    Perfect for short rides, with maximum value and comfort.
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline  bg-green-300 cursor-pointer hover:bg-green-500">
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="px-4 py-3">
              <div className="card bg-base-100 w-[vw] shadow-sm overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <figure>
                  <img src={TaxiH} alt="Taxi" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-between">
                    <button className=" hover:underline cursor-pointer">
                      Taxi
                    </button>
                    <div className="badge badge-secondary max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      30% off
                    </div>
                  </h2>
                  <p>
                    Reliable rides, right on time — your taxi is just a tap
                    away! No delays, no hassle — just smooth, on-demand travel.
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline  bg-green-300 cursor-pointer hover:bg-green-500">
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Services;
