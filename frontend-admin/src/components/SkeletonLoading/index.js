import React from "react";
import Skeleton from "react-loading-skeleton";

import { Container } from "./styles";

export default function SkeletonLoading() {
  return (
    <Container>
      <div style={{ fontSize: 20, lineHeight: 2.5 }}>
        <Skeleton />
        <Skeleton height={50} />
        <Skeleton height={278} />
        <Skeleton height={50} />
      </div>
      <div style={{ fontSize: 20, lineHeight: 2 }}>
        <Skeleton />
        <Skeleton />
        <Skeleton height={380} />
      </div>
    </Container>
  );
}
