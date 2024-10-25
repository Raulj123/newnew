"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "@/app/globals.scss";

export default function Nav() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline()
      .from(".p", { y: -29, delay: 0.7, duration: 0.6, ease: "power2.in" });

    const showAnimation = gsap
      .from(".nav", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnimation.play() : showAnimation.reverse();
      },
    });
  }, []);
  return (
    <nav className=".nav">
      <p className="p">Hi</p>
      <p className="p">blah</p>
      <p className="p">meh</p>
    </nav>
  );
}
