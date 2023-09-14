import React from "react";
import Logo from "./logo";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-20 px-8 bg-muted">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />

        <GithubIcon className="w-8 h-8" />
      </div>
      <Link
        href="https://github.com/manethpak"
        target="_blank"
        className="text-sm text-center block py-4"
      >
        Made by @Manethpak
      </Link>
    </footer>
  );
};

export default Footer;
