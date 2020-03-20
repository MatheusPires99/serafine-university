import React from "react";
import Skeleton from "react-loading-skeleton";

import { Container } from "./styles";

export default function SkeletonMain() {
  return (
    <Container>
      <div>
        <Skeleton count={5} />
      </div>
    </Container>
  );
}
