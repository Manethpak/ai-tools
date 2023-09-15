"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeChange = () => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="fixed bottom-10 right-10 p-2 rounded-full bg-primary transition-all hover:-translate-y-2"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <SunIcon size={38} className="text-primary-foreground" />
      ) : (
        <MoonIcon size={38} className="text-primary-foreground" />
      )}
    </button>
  );
};

export default ThemeChange;
