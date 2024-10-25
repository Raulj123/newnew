"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "@/app/globals.scss";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
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
    gsap.to(".h-container", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".h-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });
    document.addEventListener("mousemove", mouseM);

    gsap
      .timeline()
      .from(".h-container", { opacity: 0, scale: 0.7, delay: 0.5 });
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
      </section>
    </>
  );
}
