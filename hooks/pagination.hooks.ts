import { UsePaginationReturnType } from "@/types/pagination.types";
import { useState, useMemo, useCallback, useEffect } from "react";


export const usePagination = <T>(data: T[], pageSize: number) : UsePaginationReturnType<T> => {

  const [currentPage, setCurrentPage] = useState<number>(0);

  const totalPages = useMemo(
    () => Math.ceil(data.length / pageSize),
    [data.length, pageSize]
  );
  useEffect(() => {
    if (totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages]);
  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const goToPrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, [totalPages]);

  const goToSpecificPage = useCallback(
    (pageNo: number) => {
      setCurrentPage(pageNo);
    },
    [totalPages]
  );

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return data.slice(start, end);
  }, [currentPage, data, pageSize]);

  return {
    paginatedData,
    paginationProps: {
      currentPage,
      totalPages,
      goToSpecificPage,
      goToNextPage,
      pageSize,
      data,
      goToPrevPage,
    },
  };
};
