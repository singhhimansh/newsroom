import { usePagination } from "@/hooks/pagination.hooks";
import React, { useCallback } from "react";
import Button from "./Button";
import { PaginationCompPropsType } from "@/types/pagination.types";

const Pagination: React.FC<PaginationCompPropsType<any>> = ({
  children,
  currentPage,
  totalPages,
  goToNextPage,
  goToPrevPage,
  goToSpecificPage,
}) => {
  return (

      <div
        style={{
          display: "flex",
          gap: "10px",
          fontSize: "0.8rem",
        }}
        className={"pagination-bar"}
      >
        {children && children}
        {!children && (
          <>
            <Button
              className={`paginationButton ${
                currentPage === 1 ? "disabled" : ""
              }`}
              onClick={goToPrevPage}
            >
              {"<"}
            </Button>
            <span>{`Page ${currentPage.toString().padStart(2, "0")} of ${totalPages}`}</span>
            <Button
              className={`paginationButton ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={goToNextPage}
            >
              {">"}
            </Button>
          </>
        )}
 
      </div>
  );
};

export default Pagination;
