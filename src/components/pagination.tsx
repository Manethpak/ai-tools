"use client";

import {
  ChevronFirst,
  ChevronLeft,
  ChevronRight,
  ChevronLast,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Props = {
  total: number;
  current: number;
};

const Pagination = ({ total, current }: Props) => {
  current = Number(current ?? 1);
  const router = useRouter();
  const last = Math.ceil(total / 30);
  console.log(last);
  console.log(current);

  const handleChange = (page: number) => {
    const currentUrl = new URL(window.location.href);

    currentUrl.searchParams.set("page", page.toString());

    router.push(currentUrl.pathname + currentUrl.search);
  };

  return (
    <div className="my-4 flex justify-center gap-2">
      <Button
        size="icon"
        onClick={() => handleChange(1)}
        disabled={current === 1}
      >
        <ChevronFirst />
      </Button>
      <Button
        size="icon"
        disabled={current === 1}
        onClick={() => {
          if (current === 1) return;
          handleChange(current - 1);
        }}
      >
        <ChevronLeft />
      </Button>

      {Array.from({ length: last < 5 ? last : 5 }, (_, i) => {
        if (current < 3) return i + 1;
        if (current > last - 2) return i + last - 4;
        return i + current - 2;
      }).map((v, i) => {
        return (
          <Button
            key={i}
            size="icon"
            variant={v === current ? "secondary" : "default"}
            onClick={() => handleChange(v!)}
          >
            {v}
          </Button>
        );
      })}

      <Button
        size="icon"
        onClick={() => {
          handleChange(current + 1);
        }}
        disabled={current === last}
      >
        <ChevronRight />
      </Button>
      <Button
        size="icon"
        onClick={() => handleChange(last)}
        disabled={current === last}
      >
        <ChevronLast />
      </Button>
    </div>
  );
};

export default Pagination;
