"use client";

import { ModeToggle } from "../ui/toggle-button";
import { useEffect } from "react";

export default function NavBar() {
  return (
    <div className="flex h-32 w-full justify-between bg-background">
      <div className="absolute left-14 top-0 h-12 w-0.5 bg-foreground"></div>
      <a
        href="/"
        className="animate-swing my-auto ml-8 flex h-12 w-12 items-center justify-center rounded-md border-2 border-foreground bg-background text-2xl font-bold text-foreground shadow-md"
        aria-label="Home"
      >
        K
      </a>
      <div className="my-auto mr-4">
        <ModeToggle />
      </div>
    </div>
  );
}
