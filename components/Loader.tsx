import React from "react";

export const ShimmerLoader = ({ lines = 1 }) => {
  return (
    <>
      {
      Array.from({ length: lines }, () => "")?.map(() => (
        <div style={{ display: "flex", gap: "4px", flexDirection: "column", margin:'10px 0px' }}>
          <Shimmer width="100%" height="25px" />
          <Shimmer width="40%" height="15px" />
        </div>
      ))}
    </>
  );
};

export const Shimmer = ({ width = "100%", height = "20px" }) => {
  return (
    <div className="shimmer-wrapper" style={{ width, height }}>
      <div className="shimmer-effect"></div>
    </div>
  );
};
