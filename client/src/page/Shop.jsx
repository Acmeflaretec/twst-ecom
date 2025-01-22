import React from "react";
import Filter from "../component/shop/Filter";
import ProductList from "../component/shop/ProductList";
import ProductListPagination from "../component/shop/ProductListPagination";

const Shop = () => {
  return (
    <div className="w-full p-6">
      <div className="w-full md:w-1/2 ">
        <h1 className="text-center text-xl md:text-2xl">MIRAI</h1>
        <p className=" text-sm text-center md:text-left  md:text-lg font-thin ">
          Introducing MIRAI—A modern take on traditional Indian silhouettes,
          MIRAI is a beautiful juxtaposition of contemporary styles rooted in
          heritage fashion.Presenting our first-ever range of incredibly refined
          kurtas and meticulously elevated pyjamas crafted from some of the
          finest materials in the world
        </p>
      </div>
      <div className="w-full p-3  border border-gray-50 rounded-md flex items-center gap-3 mt-4">
        <Filter btnText="Remove All" />
        <Filter btnText="In Stock" />
        <Filter btnText="In Stock" />
        <Filter btnText="In Stock" />
      </div>
      <div
        className="w-full grid gap-4 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
                xl:grid-cols-5
                "
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <ProductList key={index} />
        ))}
      </div>
      <div>

      </div >
      
      <div className="mt-10">
      <ProductListPagination/>
      </div>
    </div>
  );
};

export default Shop;
