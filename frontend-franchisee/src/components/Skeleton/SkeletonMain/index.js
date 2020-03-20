import React from "react";
import Skeleton from "react-loading-skeleton";

import { Container } from "./styles";

export default function SkeletonMain() {
  return (
    <Container>
      <div>
        <Skeleton height={35} width={400} />
        <Skeleton height={150} />
        <br />
        <Skeleton height={25} width={400} />
        <Skeleton height={130} />
        <Skeleton width={220} height={44} />
        <br />
        <Skeleton height={25} width={400} />
        <Skeleton height={130} />
        <Skeleton width={220} height={44} />
      </div>
    </Container>
  );
}
