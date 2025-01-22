import React, { useState } from "react";
import { Pagination } from "flowbite-react";

const ProductListPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          previousLabel=""
          nextLabel=""
          onPageChange={onPageChange}
      
          showIcons
        />
      </div>
    </>
  );
};

export default ProductListPagination;
