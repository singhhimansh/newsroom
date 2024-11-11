import React from "react";

import { NewsContainer } from "@/features/NewsContainer";
import { useRouter } from "next/router";
import { routeToApiMap } from "@/services/news.services";

const NewsList = () => {
  const router = useRouter();
  const type = router.query?.type as string;
  return <NewsContainer newsType={type} />;
};

export async function getStaticProps({ params }:{ params: any}) {
  const { type } = params;
  const validTypes = Object.keys(routeToApiMap);
  if (!validTypes.includes(type)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      type,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(routeToApiMap)?.map((r) => ({ params: { type: r } })),
    fallback: false, 
  };
}

export default NewsList;
