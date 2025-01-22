import React from "react";
import "react-multi-carousel/lib/styles.css";
import ProductSlide from "../carousel/ProductSlide";
import { categories } from "../../utils/constant/categories";

const Categories = () => {
  return (
    <>
      <ProductSlide text={"Shop By Categories"} items={categories} slider="Categories" />
    </>
  );
};

export default Categories;
