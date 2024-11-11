import React from "react";

import { NewsContainer } from "@/features/NewsContainer";

export default function News() {
  // No home route given, hence showing top news by default on this route
  return <NewsContainer newsType="top" />;
}
