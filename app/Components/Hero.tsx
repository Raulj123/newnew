"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "@/app/globals.scss";
import Model from "./Model";
const Eyes = ({
  eye1,
  eye2,
  eyeBall1,
  eyeBall2,
}: {
  eye1: React.RefObject<SVGSVGElement>;
  eye2: React.RefObject<SVGSVGElement>;
  eyeBall1: React.RefObject<SVGCircleElement>;
  eyeBall2: React.RefObject<SVGCircleElement>;
}) => {
  return (
    <>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        ref={eye1}
      >
        <style>
          {`
        .eye {
          --color-white: #ffffff;
          --color-black: #000000;
        }
      `}
        </style>
        <g className="eye">
          <path
            fill="var(--color-white)"
            d="M95.86 50S75.33 79.47 50 79.47 4.14 50 4.14 50 24.67 20.53 50 20.53 95.86 50 95.86 50Z"
          />
          <circle
            ref={eyeBall1}
            className="eye-pupil"
            cx="50"
            cy="50"
            r="20.91"
            fill="var(--color-black)"
          />
        </g>
      </svg>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        ref={eye2}
      >
        <style>
          {`
        .eye {
          --color-white: #ffffff;
          --color-black: #000000;
        }
      `}
        </style>
        <g className="eye">
          <path
            fill="var(--color-white)"
            d="M95.86 50S75.33 79.47 50 79.47 4.14 50 4.14 50 24.67 20.53 50 20.53 95.86 50 95.86 50Z"
          />
          <circle
            ref={eyeBall2}
            className="eye-pupil"
            cx="50"
            cy="50"
            r="20.91"
            fill="var(--color-black)"
          />
        </g>
      </svg>
    </>
  );
};

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const eye1 = useRef<SVGSVGElement>(null);
  const eye2 = useRef<SVGSVGElement>(null);
  const eyeBall1 = useRef<SVGCircleElement>(null);
  const eyeBall2 = useRef<SVGCircleElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mouseM = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 45;
      const y = (e.clientY - window.innerHeight / 2) / 45;
      gsap.to(eyeBall1.current, {
        duration: 0.5,
        x: x,
        y: y,
        ease: "power2.out",
        stagger: 1,
      });
      gsap.to(eyeBall2.current, {
        duration: 0.5,
        x: x,
        y: y,
        ease: "power2.out",
        stagger: 1,
      });
      gsap.to(eye1.current, {
        duration: 0.5,
        x: x / 2,
        y: y / 2,
        ease: "power2.out",
        stagger: 1,
      });
      gsap.to(eye2.current, {
        duration: 0.5,
        x: x / 2,
        y: y / 2,
        ease: "power2.out",
        stagger: 1,
      });
    };
    gsap.to(".h-container", {
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".h-container",
        start: "bottom center",
        end: "bottom top",
        scrub: true,
      },
    });
    document.addEventListener("mousemove", mouseM);

    gsap
      .timeline()
      .from(".h-container", { opacity: 0, scale: 0.7, delay: 0.6 });
  }, []);

  return (
    <>
      <section className="hero">
        {/* <div className="h-container" ref={container}> 
           <Eyes
            eye1={eye1}
            eye2={eye2}
            eyeBall1={eyeBall1}
            eyeBall2={eyeBall2}
          /> 
        </div>  */}
        {/* <div className="h-container">
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
        </div> */}
        <div className="h-container">
          <div className="hero-text">
            <p>Raul Jarquin Valdez</p>
            <p>Past Full Stack Developer</p>
            <p>Current Web Developer</p>
            <p>Based in California</p>
          </div>

          <Model />
        </div>
      </section>
    </>
  );
}
