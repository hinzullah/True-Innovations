import React from "react";
import Rectangle from "../assets/Rectangle 22.png";

const FoodDetails = () => {
  return (
    <div>
      <img src={Rectangle} alt="" />
      <div>
        <h3 className="text-lg font-semibold">Food Name</h3>
        <p className="text-sm text-gray-600">Food description goes here.</p>
        <p className="text-lg font-medium text-[#FF7A18]">₦Price</p>
      </div>
    </div>
  );
};

export default FoodDetails;
