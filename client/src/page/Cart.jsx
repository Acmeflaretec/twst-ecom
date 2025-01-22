import React from "react";
import men from "../asset/men.jpg";
import CartList from "../component/cart/CartList";
import Summary from "../component/cart/Summary";
import FeatureProductSlide from '../component/carousel/FeatureProductSlide'
import {categories} from '../utils/constant/categories'

const Cart = () => {
  return (
    <>
      <div className="w-full  flex flex-col lg:flex-row gap-0 lg:gap-3">
        <div className="w-full lg:w-2/3 p-6 shadow-md rounded-lg  h-96 overflow-scroll  productPhoto">
          <h2 className="text-xl lg:text-2xl font-bold mb-6">Your Bag</h2>

          <CartList img={men} />
          <CartList img={men} />
          <CartList img={men} />
          <CartList img={men} />
          <CartList img={men} />
        </div>

       <Summary/>
      </div>
      <FeatureProductSlide items={categories} text="You may also like"/>
    </>
  );
};

export default Cart;
