"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Rocket, TrendingUp, Search, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen h-screen flex flex-col items-center justify-center pt-20 pb-10 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-bl-[100px] opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-100 rounded-tr-[100px] opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col h-full justify-center">

        {/* Header */}
        <div className="text-center mb-8 shrink-0">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
              We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">high-conversion</span> digital ecosystems.
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto">
              Your success is our architecture. Lightning-fast, data-driven, and built to scale.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid layout that fits on one screen */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1 max-h-[60vh] min-h-[400px]">

          {/* 1. Value Prop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="md:col-span-1 flex flex-col gap-4 h-full"
          >
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex-1 flex flex-col justify-center">
              <h3 className="font-extrabold text-slate-900 mb-1">Our Origins</h3>
              <p className="text-[10px] text-slate-500 mb-4 leading-tight font-medium">From creative sketches to engineering high-performance digital experiences.</p>
              <ul className="space-y-4 text-xs text-slate-600 font-medium">
                <li className="flex gap-3 items-center group">
                  <div className="relative w-6 h-6 flex items-center justify-center bg-blue-50 rounded-full shrink-0 overflow-hidden">
                    <Search size={12} className="text-blue-500 absolute" />
                    <motion.div animate={{ x: [-15, 15, -15] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-white/60 skew-x-12 blur-[1px]" />
                  </div>
                  <span>Boost SEO</span>
                </li>
                <li className="flex gap-3 items-center group">
                  <div className="relative w-6 h-6 flex items-center justify-center bg-purple-50 rounded-full shrink-0 overflow-hidden">
                    <div className="flex gap-0.5 z-10">
                      <Users size={10} className="text-purple-600" />
                    </div>
                    <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-purple-200/40 rounded-full" />
                  </div>
                  <span>Maximize Conversions</span>
                </li>
                <li className="flex gap-3 items-center group">
                  <div className="relative w-6 h-6 flex items-center justify-center bg-cyan-50 rounded-full shrink-0 overflow-hidden">
                    <Cpu size={12} className="text-cyan-500 relative z-10" />
                    <motion.div animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 border-[3px] border-cyan-300 rounded-full" />
                  </div>
                  <span>Future-proof Tech</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 rounded-3xl p-5 text-center text-white flex-1 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-4xl font-black mb-1 z-10">100<span className="text-blue-500">+</span></p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest z-10">Projects</p>
            </div>
          </motion.div>

          {/* 2. Rocket / Origin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl p-6 border border-blue-200 flex flex-col justify-between relative overflow-hidden group h-full"
          >
            <div className="z-10 relative">
              <h4 className="font-extrabold text-blue-900 mb-2">Rapid Launch</h4>
              <p className="text-xs text-blue-800/70 font-medium">Deploying your digital assets with blazing speed.</p>
            </div>

            {/* Launching Rocket Animation */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:shadow-blue-500/50 transition-all">
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -80, x: 20, scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
              >
                <Rocket size={48} className="text-blue-600" />
              </motion.div>
              {/* Fire effect behind rocket */}
              <motion.div
                className="absolute bottom-6 right-12 w-8 h-8 bg-orange-500 blur-md rounded-full -z-10 opacity-0"
                whileHover={{ opacity: 1, scale: 1.5 }}
              />
            </div>
          </motion.div>

          {/* 3. Creative Vision / Growth */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-1 bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col relative overflow-hidden h-full group"
          >
            <h4 className="font-extrabold text-slate-900 mb-2 flex items-center gap-2">
              <TrendingUp size={18} className="text-cyan-500" /> Creative Vision
            </h4>
            <p className="text-xs text-slate-600 font-medium mb-4">Where beautiful design directly intersects with customer growth and profit.</p>

            {/* Customer Growth / Profit Chart Animation */}
            <div className="mt-auto flex items-end justify-between h-28 gap-2 pb-2">
              {[30, 45, 40, 70, 95].map((h, i) => (
                <div key={i} className="w-full bg-slate-100 rounded-t-md relative group-hover:bg-blue-50 transition-colors h-full flex items-end">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                    className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-md relative"
                  >
                    {/* Floating profit numbers */}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 + (i * 0.1) }}
                      className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-600"
                    >
                      +{h}%
                    </motion.span>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. Team & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="md:col-span-1 flex flex-col gap-4 h-full"
          >
            <div className="bg-slate-100 rounded-3xl p-5 flex-1 flex flex-col items-center justify-center text-center group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Users size={32} className="text-slate-700 mb-3" />
              </motion.div>
              <h4 className="font-extrabold text-slate-900 text-sm">The Team</h4>
              <p className="text-[10px] text-slate-500 font-medium mt-1 uppercase tracking-wider">Passionate Creators</p>
            </div>

            <Link href="#contact" className="bg-blue-600 rounded-3xl p-5 flex-1 flex flex-col items-center justify-center text-white font-bold hover:bg-blue-700 transition-colors shadow-lg group relative overflow-hidden">
              <motion.div
                animate={{ x: [-100, 200] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 blur-sm"
              />
              <span className="text-lg mb-1 relative z-10">Let's Chat</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
