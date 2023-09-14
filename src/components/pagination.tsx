"use client";

import {
  ChevronFirst,
  ChevronLeft,
  ChevronRight,
  ChevronLast,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

type Props = {
  total: number;
  current: number;
};

const Pagination = ({ total, current }: Props) => {
  return (
    <div className="my-4 flex justify-center gap-2">
      <Button size="icon">
        <ChevronFirst />
      </Button>
      <Button size="icon">
        <ChevronLeft />
      </Button>

      <Button size="icon">
        <ChevronRight />
      </Button>
      <Button size="icon">
        <ChevronLast />
      </Button>
    </div>
  );
};

export default Pagination;
