"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Search = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();

        const currentUrl = new URL(window.location.href);

        currentUrl.searchParams.set("title", ref.current?.value ?? "");
        currentUrl.searchParams.set("page", "1");

        router.push(currentUrl.pathname + currentUrl.search);
      }}
    >
      <Input type="search" placeholder="Search" name="title" ref={ref} />
      <Button type="submit" size="icon">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default Search;
