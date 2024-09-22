"use client"
import Lenis from "lenis"
import { useEffect } from "react"

// Smooth like butter fr

export default function Smooth(){     
    useEffect(()=> {
        const lenis = new Lenis()
        function raf(time:any){
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    },[])
    return null
}