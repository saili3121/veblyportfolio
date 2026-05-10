"use client";

import { motion } from "framer-motion";
import { Zap, Layout, Smartphone, Sparkles, Layers, ArrowRight } from "lucide-react";

export default function Services() {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textLineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Animated Header Section */}
        <div className="text-center mb-24 flex flex-col items-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-100/50 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-10 tracking-tight"
          >
            Perfection That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Speaks</span>
          </motion.h2>
          
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto space-y-3 font-medium"
          >
            <motion.p variants={textLineVariants}>
              Your ideas deserve a premium digital presence.
            </motion.p>
            <motion.p variants={textLineVariants}>
              We craft interfaces that capture attention.
            </motion.p>
            <motion.p variants={textLineVariants} className="text-blue-600 font-bold mt-6 text-2xl md:text-3xl">
              Because your brand deserves perfection that speaks.
            </motion.p>
          </motion.div>
        </div>

        {/* Amazing Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          
          {/* Card 1: Tall Vertical Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="group relative lg:row-span-2 bg-slate-50 rounded-[2rem] p-10 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            {/* Animated Background Graphic */}
            <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 -left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-slate-100 text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Layout size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Modern Design</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Clean, minimal, and highly functional interfaces. We strip away the unnecessary to let your core message shine through brilliant aesthetics.
              </p>
            </div>

            {/* Interactive Visual Element */}
            <div className="relative h-48 w-full mt-auto perspective-1000">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white to-slate-100 rounded-xl border border-white shadow-lg flex items-center justify-center"
                whileHover={{ rotateY: 15, rotateX: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Layers className="w-16 h-16 text-blue-300" />
                <div className="absolute inset-x-4 bottom-4 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-500 rounded-full" 
                    initial={{ width: "0%" }} 
                    whileInView={{ width: "75%" }} 
                    transition={{ duration: 1.5, delay: 1 }} 
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Wide Top Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="group relative lg:col-span-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[2rem] p-10 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden text-white flex flex-col justify-center"
          >
            {/* Speed lines animation */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-px bg-white/50"
                  style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5 + i * 0.5, repeat: Infinity, ease: "linear" }}
                />
              ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                  <Zap size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Performance First</h3>
                <p className="text-blue-50 text-lg leading-relaxed">
                  We architect solutions that load instantly. Because every millisecond counts when capturing user attention and maximizing conversions.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-32 h-32">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-dashed border-white/30 rounded-full"
                  />
                  <div className="absolute inset-2 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-3xl font-bold tracking-tighter">99<span className="text-lg">%</span></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Wide Bottom Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="group relative lg:col-span-2 bg-slate-900 rounded-[2rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden text-white flex flex-col justify-center"
          >
            {/* Glowing orb animation */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px] pointer-events-none"
            />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 text-cyan-400">
                  <Smartphone size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">SEO & Mobile Ready</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Flawless rendering on every screen. Built with semantic code structures that search engines love, ensuring your brand stays visible.
                </p>
              </div>
              <motion.button 
                whileHover={{ x: 5 }}
                className="shrink-0 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors"
              >
                <ArrowRight size={24} />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
