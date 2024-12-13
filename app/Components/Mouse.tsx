"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "@/app/globals.scss";

export default function Mouse() {
  const mousy = useRef<HTMLDivElement>(null);

  const updatePos = (e: MouseEvent) => {
    gsap.to(mousy.current, {
      duration: 0.8,
      ease: "power2.out",
      css: {
        left: e.clientX - 5,
        top: e.clientY - 5,
      },
    });
    console.log("changing pos", e.x, e.y);
  };
  useEffect(() => {
    window.addEventListener("mousemove", updatePos);
  }, []);

  return <div className="mouse" ref={mousy}></div>;
}
