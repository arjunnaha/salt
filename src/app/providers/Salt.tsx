"use client";

import { SaltProvider } from "@salt-ds/core";
import classnames from "clsx";
import { Open_Sans, PT_Mono } from "next/font/google";

import "@salt-ds/theme/index.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const ptMono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pt-mono",
});

export function Salt({ children }: { children: React.ReactNode }) {
  return <SaltProvider theme={classnames(ptMono.variable, openSans.variable)}>{children}</SaltProvider>;
}
