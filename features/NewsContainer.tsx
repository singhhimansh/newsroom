import React from "react";
import { PageLayout } from "@/components/PageLayout";
import Pagination from "@/components/Pagination";
import NewsTile from "@/features/NewsTile";
import { useGetPaginatedNews } from "@/hooks/news.hooks";
import { ShimmerLoader } from "@/components/Loader";

export const NewsContainer: React.FC<{newsType: string}> = ({newsType}) => {
  const { newsList, isLoading, paginationProps } = useGetPaginatedNews({
    type: newsType,
  });
  return (
    <PageLayout>
      {isLoading && <ShimmerLoader lines={10} />}
      {!isLoading &&
        newsList?.length > 0 &&
        newsList?.map((news: any, idx:number) => (
          <NewsTile
            news={news}
            srno={(paginationProps.currentPage - 1) * paginationProps.pageSize + idx + 1}
          />
        ))}
      <Pagination {...paginationProps} />
    </PageLayout>
  );
}
