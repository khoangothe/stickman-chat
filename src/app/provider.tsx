"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function Provider({ children, ...props }: ThemeProviderProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
