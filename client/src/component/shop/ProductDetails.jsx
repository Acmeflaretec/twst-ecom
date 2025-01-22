import React from "react";
// import { useParams } from "react-router-dom";
import { PiShareFatBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import men from "../../asset/men.jpg";

import Accordion from "./Accordion";
import ProductQuality from "../product/ProductQuality";
import FeatureProductSlide from "../carousel/FeatureProductSlide";
import { categories } from "../../utils/constant/categories";
import { Browse } from "../../utils/constant/browse";

const ProductDetails = () => {
  //   const { id, name } = useParams();

  return (
    <>
      <div className="w-full p-6  lg:flex justify-center gap-3">
        <div className="w-full lg:w-1/2 p-4  grid grid-cols-2 gap-3  lg:h-screen overflow-scroll productPhoto">
          <img src={men} alt="prod_Photo" height="" />
          <img src={men} alt="prod_Photo" height="" />
          <img src={men} alt="prod_Photo" height="" />
          <img src={men} alt="prod_Photo" height="" />
        </div>
        <div className="w-full lg:w-1/2  ">
          <div className="p-4 md:p-8 max-w-screen-lg mx-auto relative">
            <div className="absolute top-0 right-0 lg:top-4 lg:right-4 flex gap-2">
              <button
                className="w-5 h-5  lg:w-10 lg:h-10 rounded-sm border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                aria-label="Share"
              >
                <PiShareFatBold />
              </button>
              <button
                className="w-5 h-5  lg:w-10 lg:h-10  rounded-sm border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                aria-label="Like"
              >
                <CiHeart />
              </button>
            </div>

            <div>
              <h1 className=" text-lg lg:text-xl md:text-2xl font-bold">
                Scorpio Cotton Melange Shirt
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Semi Casual Men's Brown Cotton Melange Woven Regular Fit Shirt
              </p>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold">₹ 4,590</p>
              <p className="text-sm text-gray-500">
                MRP inclusive of all taxes
              </p>
            </div>

            <div className="mt-6">
              <p className="font-medium">
                SELECT SIZE & FIT
                <span className="text-textColor"> Last few left</span>
              </p>
              <div className="flex gap-2 mt-2">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="border rounded-lg px-4 py-2 text-sm hover:border-black focus:border-black"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm">
                <a href="/shop" className="text-blue-500 underline">
                  Find my size?
                </a>
                <a href="/about" className="text-blue-500 underline">
                  Size Chart
                </a>
              </div>
            </div>

            <div className="mt-6 bg-red-100 text-red-600 text-center p-2 rounded-md">
              Subscribe for 15% off on your first purchase
            </div>

            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <button className="w-full bg-black text-white py-2 rounded-md">
                ADD TO BAG
              </button>
              <button className="w-full border border-black text-black py-2 rounded-md">
                BUY IT NOW
              </button>
            </div>

            {/* this accordian component contain the delivery component like the input for enter the pincode and the checking button and the feature component like the 60 days delivery and freedeliver component */}
            <div className="mt-8">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
      <ProductQuality />

      <FeatureProductSlide text="You may also like" items={categories} />

      <div className="w-full p-4 lg:p-8 bg-secondary">
        <FeatureProductSlide
          text="More from the collection"
          items={categories}
        />
      </div>
      <div className="w-full p-6">
        <p>Browse More</p>
        <div className="flex  gap-3 flex-wrap">
          {Browse.map((item) => (
            <button
              key={item?.id}
              className="py-2 px-4 rounded-md border border-black text-sm sm:text-base w-auto sm:w-auto hover:bg-gray-400 hover:text-white"
            >
              {item?.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
