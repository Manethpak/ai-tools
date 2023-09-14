import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-semibold flex items-center gap-2">
      AI Tools
      <BrainCircuit />
    </Link>
  );
};

export default Logo;
