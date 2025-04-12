import React from "react";
import { ImStarFull } from "react-icons/im";
const Cards = ({item}) => {
  return (
    <>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm max-h-120 max-w-70 mx-7">
          <figure>
            <img
              src={item.image}
              alt={item.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-between">
              {item.name}
              <div className="badge badge-secondary ">3<ImStarFull /></div>
            </h2>
            <p>
              {item.titile}
            </p>
            <div className="card-actions flex justify-between">
            <div className="badge badge-outline border-black">${item.price}</div>
              <div className="badge badge-outline bg-green-300 cursor-pointer hover:bg-green-500">Book Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
