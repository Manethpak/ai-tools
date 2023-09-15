import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import Logo from "./logo";
import Search from "./search";

const Header = () => {
  return (
    <header className="w-full border-b bg-background px-5 md:px-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <Logo />

        <Search />
      </nav>
    </header>
  );
};

export default Header;
