"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const mockups = [
    "/portfolio/hotel.png",
    "/portfolio/cafe.png",
    "/portfolio/lodge.png",
    "/portfolio/resort.png",
  ];

  return (
    <section className="relative min-h-screen bg-[#0b1120] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="inline-block border border-sky-500/30 rounded-full px-4 py-1.5 mb-8 bg-sky-500/10 backdrop-blur-sm">
            <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400">
              CRAFTING DIGITAL EXCELLENCE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            We Build <br /> Websites That <br />
            <span className="text-cyan-500">Perform.</span>
          </h1>

          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-md">
            Perfection that speaks volumes through code. We engineer high-conversion digital experiences for ambitious brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-600 text-white text-sm font-bold tracking-wider hover:bg-cyan-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/50"
            >
              START A PROJECT
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/50 border border-slate-700 text-slate-300 text-sm font-bold tracking-wider hover:bg-slate-800 transition-all flex items-center justify-center"
            >
              VIEW OUR WORK
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Isometric Scrolling Mockups */}
        <div className="relative h-[600px] w-full hidden lg:block">
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div
            className="absolute inset-0"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transform: "rotateX(20deg) rotateY(-20deg) rotateZ(10deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 20
                }}
                className="absolute inset-x-0 top-0 flex flex-col gap-12"
              >
                {[...mockups, ...mockups].map((src, index) => (
                  <div
                    key={index}
                    className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-slate-800"
                    style={{ transform: "translateZ(0)" }}
                  >
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent z-10 pointer-events-none transform -skew-y-12 origin-top-left opacity-30"></div>

                    <Image
                      src={src}
                      alt="Website Mockup"
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Foreground Floating Testimonial/Badge */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-10 -left-10 z-20 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl p-5 shadow-2xl max-w-xs"
          >
            <p className="text-xs text-slate-300 italic mb-2">
              "Vebly transformed our online presence with speed and precision."
            </p>
            <p className="text-[10px] font-bold text-slate-400">— TechCorp CEO</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}