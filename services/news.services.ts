import { API } from "./../constants/apiRoutes";
import { ObjectType } from "@/types/common.types";
import { createRoute } from "@/utils/common.utils";
import axios from "axios";

export const routeToApiMap: ObjectType = {
  newest: "newstories",
  top: "topstories",
  best: "beststories",
};

export const getAllNewsIds = async (type: string) => {
  const url = createRoute(API.STORIES_BY_TYPE, { type: routeToApiMap[type] });
  const { data } = await axios.get(url);
  return data;
};
export const getNewById = async (id: number) => {
  const url = createRoute(API.SINGLE_STORY, { id });
  const { data } = await axios.get(url);
  return data;
};
