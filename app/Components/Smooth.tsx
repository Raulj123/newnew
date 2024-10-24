"use client";
import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
// Smooth like butter fr

export default function Smooth({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
