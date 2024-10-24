"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "@/app/globals.scss";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useGSAP(() => {
    const mouseM = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 40;
      const y = (e.clientY - window.innerHeight / 2) / 40;
      gsap.to(svgRef.current, {
        duration: 2,
        x: x,
        y: y,
        ease: "slow",
        stagger: 1,
      });
    };

    document.addEventListener("mousemove", mouseM);
    // gsap
    //   .timeline()
    //   .from(".line1", { opacity: 0, delay: 0.6, ease: "power2.in" })
    //   .from(".line2", { x: 100, opacity: 0, duration: 1, ease: "bounce" })
    //   .from(".line3", {
    //     x: 150,
    //     rotate: 60,
    //     opacity: 0,
    //     duration: 1,
    //     ease: "elastic",
    //   })
    //   .from(".line4", { opacity: 0, ease: "power2.in"})
      gsap.timeline()
      .from(".h-container", {opacity: 0,scale: 0.7, delay: 0.5})
     
      .from(".text", {y: 10, ease: "power2.in"})
      .from(".d", {y: 90, ease: "power2.in"})
  }, []);

  return (
    <>
      <section className="hero">
        <div className="h-container">
          <div className="text font">
            <div className="line1">Raul Jarquin Valdez</div>
            <div className="line2">☀Web Developer☀</div>
            <div className="line3">
              Currently <span className="special-font">@</span>Beckman Coulter
            </div>
            <div className="line4">
              Based in California<span className="special-font">ツ</span>
            </div>
          </div>
        </div>
        <p className="d">Scroll down</p>
      </section>
    </>
  );
}
