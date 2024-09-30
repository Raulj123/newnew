"use client"
import { useRef } from "react";
import { useEffect } from "react";

export default function Loader(){
  
    const duration = 600
    let start: number
    const loader = useRef<HTMLDivElement>(null)
    const path = useRef<SVGPathElement>(null)
    const initCurve = 200

    useEffect(() => {
        setPath(initCurve)
     
        setTimeout(() => {
            requestAnimationFrame(animate)
        }, 500)
    }, [])

    const animate = (timestamp: number) => {
        if (start === undefined) {
            start = timestamp
        }
        
        const elapsed = timestamp - start
        const newCurve = easeOutQuad(elapsed, initCurve, -200, duration)
        setPath(newCurve)
    
        if (loader.current) {
            loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";
        } else {
            console.error("Loader is not mounted");
        }
  
        if(elapsed < duration){
            requestAnimationFrame(animate)
        }
    }

    const easeOutQuad = (time:number, start:number, end:number, duration:number) => {
        return -end * (time /= duration) * (time - 2) + start;
    }

    const loaderHeight = () => {
        const loaderBounds = loader.current?.getBoundingClientRect()
        return loaderBounds?.height || 0
    }

    const setPath = (curve: number) => {
        const width = window.innerWidth
        const height = loaderHeight() || 0
        path.current?.setAttributeNS(null, "d",
        `M0 0
        L${width} 0
        L${width} ${height}
        Q${width/2} ${height - curve} 0 ${height}
        L0 0`
        )
    }

    return (
        <div ref={loader} className="w-full fixed" style={{ height: "calc(100vh + 200px"}}>
            <svg className="w-full h-full">
                <path ref={path} className="stroke-black stroke-[1px]"></path>  
            </svg>  
        </div>  
    )
}