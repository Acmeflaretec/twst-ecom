import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PiShareFatBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
// import men from "../../asset/men.jpg";

import Accordion from "./Accordion";
import ProductQuality from "../product/ProductQuality";
import FeatureProductSlide from "../carousel/FeatureProductSlide";
import { categories } from "../../utils/constant/categories";
import { Browse } from "../../utils/constant/browse";
import ProductReview from "../product/ProductReview";
import axiosInstance from '../../axios';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState()

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axiosInstance.get(`/products/client/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    // return <p className="text-red-500">{error}</p>;
    return toast.error(error)
  }
  const handleSizeSelect = (size) => {
    setSelectedSize(size);

 };

  console.log('product single', product);

  return (
    <>
      <div className="w-full p-6  lg:flex justify-center gap-3">
        {product && (
          <>
            <div className="w-full lg:w-1/2 p-4  grid grid-cols-2 gap-3  lg:h-screen overflow-scroll productPhoto">
              {product?.image && product?.image?.map(val =>
                <img
                  src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${val}`}
                  alt={val}
                  className="w-full h-auto object-cover rounded-md"
                />
                // <img src={men} alt="prod_Photo" height="" /> 
              )}
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
                    {product?.name}
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    {product?.subheading}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-semibold">₹ {product?.sale_rate}
                    <span className=" font-light text-gray-500 text-sm line-through mx-3">
                      ₹{product?.price}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    MRP inclusive of all taxes
                  </p>
                </div>

                <div className="mt-6">
                  {product?.sizes?.length > 0 &&
                    <>
                      <p className="font-medium">
                        SELECT SIZE & FIT
                        <span className="text-textColor"> Last few left</span>
                      </p>
                      <div className="flex gap-2 mt-2">
                        {product?.sizes.map((sizeObj, index) => (
                          sizeObj?.quantity > 0 &&
                          <button
                            key={index}
                            onClick={() => handleSizeSelect(sizeObj.sizes, index)}
                            className="border rounded-lg px-4 py-2 text-sm hover:border-black focus:border-black"
                          >
                            {sizeObj.sizes?.toUpperCase()}
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
                    </>
                  }
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
                  <Accordion items={product} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <ProductQuality />
      <ProductReview data={product} />

      {/* <FeatureProductSlide text="You may also like" items={categories} /> */}

      <div className="w-full p-4 lg:p-8 bg-secondary">
        <FeatureProductSlide
          text="More from the collection"
          items={product?.variantProduct}
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
