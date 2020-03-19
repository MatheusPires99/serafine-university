import React from "react";
import Skeleton from "react-loading-skeleton";

import { Container } from "./styles";

export default function SkeletonLoading() {
  return (
    <Container>
      <div style={{ fontSize: 20, lineHeight: 2.5 }}>
        <Skeleton />
        <Skeleton height={44} />
        <Skeleton height={44} />
        <Skeleton height={44} />
        <Skeleton height={250} />
      </div>
    </Container>
  );
}
