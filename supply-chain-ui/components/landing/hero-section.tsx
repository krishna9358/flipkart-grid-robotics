"use client";
import Link from "next/link";
import ShimmerButton from "../ui/shimmer-button";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { BorderBeam } from "../ui/border-beam";
import { motion } from "framer-motion";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div className="">
      <section
        id="hero"
        className="relative mx-auto mt-32 px-6 md:px-8 max-w-[80rem] text-center"
      >
        {/* <div className='inline-flex justify-between items-center gap-1 border-white/5 bg-white/10 hover:bg-white/20 opacity-0 backdrop-filter-[12px] px-3 border rounded-full h-7 text-white text-xs dark:text-black transition-all translate-y-[-1rem] animate-fade-in hover:cursor-pointer ease-in group'>
                #textshimmer - beta version
            
            </div> */}
            <motion.div
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }}    
            transition={{ duration: 0.9 }}>
        <h1 className="bg-clip-text bg-gradient-to-br from-30% from-gray-300  py-6 font-medium text-5xl text-balance text-transparent sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          SupplyChain is the new way
          <br className="md:block hidden" /> to manage inventory.
        </h1>
        </motion.div>
        <p className="mb-3 text-balance text-gray-400 text-lg md:text-xl tracking-tight translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          SupplyChain allows you to audit, manage and store inventory
          <br className="md:block hidden" /> on a blockchain integrated with
          Machine Learning.
        </p>
        <div className="flex justify-center items-center">
          <Link href="/signup" className="">
            <div className="flex">
              <ShimmerButton className="shadow-2xl">
                <span className="flex item-center whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Get Started <ChevronRight />
                </span>
              </ShimmerButton>
            </div>
          </Link>
        </div>
        <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }}    
            transition={{ duration: 0.9 }}>
        <div
          ref={ref}
          className="relative after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)] after:z-50 after:absolute after:inset-0  mt-[8rem] animate-fade-up [--animation-delay:400ms] [perspective:2000px]"
        >
          <div
            className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${
              inView ? "before:animate-image-glow" : ""
            }`}
          >

            <img
              src="/hero-dark.png"
              alt="Hero Image"
              className="block relative  border rounded-[inherit] w-full h-full object-contain"
            />
            <BorderBeam
              size={200}
              duration={12}
              delay={11}
            />
          </div>
        </div>
        </motion.div>
      </section>
    </div>
  );
}
