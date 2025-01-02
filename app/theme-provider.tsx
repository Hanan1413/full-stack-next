"use client";
import { Toaster } from "@/components/ui/toaster";
import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <>
   <Toaster />
  <NextThemesProvider {...props}>{children}
  </NextThemesProvider>;
  </>
}

