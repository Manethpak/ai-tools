import topics from "@/constant/topics";
import { Folder } from "lucide-react";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  return (
    <aside className="bg-background w-[14rem] hidden md:block border-r pr-2 mr-2">
      <div className="max-w-7xl mx-auto px-2">
        <h1 className="text-lg font-semibold">Explore</h1>
      </div>
      <nav className="mt-2">
        <ul className="space-y-2">
          {topics.map((topic) => (
            <li key={topic.value}>
              <Link
                href={"?topic=" + topic.value}
                className="px-2 py-1 hover:bg-muted/80 transition-all rounded-md flex gap-2 items-center cursor-pointer"
              >
                <Folder className="w-6 h-6" />
                <p>{topic.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
