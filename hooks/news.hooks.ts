import { QUERY_KEYS } from "@/constants/queryKeys";
import { getAllNewsIds, getNewById } from "@/services/news.services";
import { useQueries, useQuery } from "@tanstack/react-query";
import { usePagination } from "./pagination.hooks";


export const useGetAllNewsIds = ({ type }: { type: string }) => {
  const { data, isLoading, isFetching, isSuccess, refetch } = useQuery(
    [QUERY_KEYS.ALL_STORIES_ID, type],
    () => getAllNewsIds(type),
    {
      enabled: Boolean(type),
      onSuccess: (data) => {
        console.log(" fetched all ids data", data);
      },
      onError: (data) => {
        console.log(" error on all ids data", data);
      },
    }
  );

  return {
    data: data || [],
    isLoading: isLoading || isFetching,
    isSuccess,
    refetch,
  };
};

export const useGetAllStories = ({ ids }: { ids: number[] }) => {
  const res = useQueries({
    queries: (ids || [])?.map((id: number) => ({
      queryKey: [QUERY_KEYS.ALL_STORIES, id],
      queryFn: () => getNewById(id),
      //   staleTime: Infinity,
    })),
  });

  const data = (res || [])?.reduce((acc: any, r: any) => {
    if (r.isSuccess) {
      acc.push(r.data);
    } else {
      r.remove();
    }
    return acc;
  }, []);
  const isLoading = (res || [])?.some((r) => r.isLoading || r.isFetching);

  return { data, isLoading };
};

export const useGetPaginatedNews = ({
  type,
  pageSize = 20,
}: {
  type: string;
  pageSize?: number;
}) => {
  const { data: allIds, isLoading: isLoadingIds } = useGetAllNewsIds({
    type: type,
  });
  const { paginatedData, paginationProps } = usePagination<number>(allIds, pageSize);
  const { data: paginatedNewsList, isLoading: isLoadingNews } =
    useGetAllStories({
      ids: paginatedData,
    });

  return {
    newsList: paginatedNewsList,
    paginationProps,
    isLoading: isLoadingIds || isLoadingNews,
  };
};
