import Navbar from "@/features/Navbar";
import React from "react";

type PageLayoutType = {
  children?: React.ReactNode;
};

export const PageLayout: React.FC<PageLayoutType> = ({ children }) => {
  return (
    <div className={"main-container"}>
      <Navbar />
      {children}
    </div>
  );
};
