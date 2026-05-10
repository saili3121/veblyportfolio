"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Vebly transformed our digital presence. The new platform is not only stunning but increased our conversion rate by 150%.",
      author: "Sarah Jenkins",
      role: "CMO, TechFlow Solutions",
    },
    {
      quote: "Working with Vebly was seamless. Their attention to performance and design detail is truly world-class.",
      author: "David Chen",
      role: "Founder, Elevate SaaS",
    },
    {
      quote: "They understand B2B needs perfectly. The website they built acts as our best 24/7 sales representative.",
      author: "Marcus Thorne",
      role: "Director of Growth, Apex Industries",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Mission is Your <span className="text-blue-600">Success</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We believe that a website is more than just a digital brochure; it's the core of your online business. Our mission is to partner with forward-thinking companies to build highly optimized, visually stunning platforms that drive real revenue and scale with their ambitions.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-slate-200 border-4 border-white flex items-center justify-center text-xs text-slate-400 font-medium">
                    img
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-700">
                Trusted by 50+ innovative teams
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-50/50 -z-0" fill="currentColor" />
                <p className="text-lg text-slate-700 font-medium italic mb-6 relative z-10">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.author}</h4>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
