import React from "react";
import C1 from "../../public/C1.png";
const Reservation = () => {
  return (
    <>
      <div className="">
        <p className=" md:px-25 px-5 text-3xl md:text-7xl md:justify-content-center mt-4 md:mt-5">
          Book Now <span className="text-red-400">Ride Later</span>
        </p>
        <div className="mt-5 md:mt-10 max-w-screen-2xl container mx-auto md:px-3 px-4 flex flex-col md:flex-row">
          <div>
            <div className="rounded-[10px]">
              <img
                src={C1}
                alt=""
                className=" md:ml-20 md:w-[610px] md:h-[380px] object-cover rounded-[10px]"
              />
            </div>
          </div>
          <div className="card md:w-156 bg-base-100 shadow-sm md:ml-10 ">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Benefits</h2>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xl">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Avoid last-minute hassles </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Options to choose your vehicle</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>set your time</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>on-time rides every time </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Book today, travel tomorrow — convenience redefined.{" "}
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="/scheduledride" className="btn btn-primary btn-block">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
