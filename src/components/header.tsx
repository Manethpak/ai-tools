import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BrainCircuit, SearchIcon } from "lucide-react";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="w-full border-b bg-background px-5 md:px-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <Logo />

        <form action="/search" className="flex gap-2">
          <Input type="search" placeholder="Search" name="query" />
          <Button type="submit" size="icon">
            <SearchIcon className="h-4 w-4" />
          </Button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
