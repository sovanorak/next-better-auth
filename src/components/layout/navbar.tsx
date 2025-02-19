import Link from "next/link";
import React from "react";
import { Layers } from "lucide-react";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  return (
    <div className="border-b px-4">
      <div className="flex justify-between items-center mx-auto max-w-4xl h-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <Layers className="w-6 h-6" />
          <span>BetterAuth</span>
        </Link>
        <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
