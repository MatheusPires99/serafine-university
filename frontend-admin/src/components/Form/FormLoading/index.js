import React from "react";
import Skeleton from "react-loading-skeleton";

import { Container } from "./styles";

export default function SkeletonLoading() {
  return (
    <Container>
      <div>
        <Skeleton width={200} />
        <Skeleton height={45} count={4} />
        <Skeleton height={200} />
      </div>
    </Container>
  );
}
