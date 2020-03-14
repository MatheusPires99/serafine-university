import React from "react";
// import { Skeleton } from "react-loading-skeleton-placeholders";
import Skeleton from "react-loading-skeleton";

export default function TableLoading() {
  return (
    <div style={{ lineHeight: 3 }}>
      <Skeleton height={60} />
      <Skeleton height={30} count={10} />
    </div>
  );
}
