"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "@/app/globals.scss";
export default function Nav(){
    useGSAP(()=> {
        gsap.timeline()
        .from(".p", {y: -29, delay: 0.7, duration:0.6, ease: "power2.in"})
    },[])
    return (
        <nav>
            <p className="p">Hi</p>
            <p className="p">blah</p>
            <p className="p">meh</p>
        </nav>
    )
}