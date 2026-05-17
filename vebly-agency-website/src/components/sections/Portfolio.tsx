"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    { id: 1, title: "The Grand Plaza Hotel", category: "Hospitality", height: "h-64", imageSrc: "/portfolio/hotel.png" },
    { id: 2, title: "Urban Roast Cafe", category: "Food & Beverage", height: "h-96", imageSrc: "/portfolio/cafe.png" },
    { id: 3, title: "Pine Valley Lodge", category: "Resort & Travel", height: "h-80", imageSrc: "/portfolio/lodge.png" },
    { id: 4, title: "Iron Core Gym", category: "Health & Fitness", height: "h-72", imageSrc: "/portfolio/gym.png" },
    { id: 5, title: "Seaside Boutique Resort", category: "Hospitality", height: "h-80", imageSrc: "/portfolio/resort.png" },
    { id: 6, title: "The Daily Grind", category: "Food & Beverage", height: "h-64", imageSrc: "/portfolio/bakery.png" },
  ];

  return (
    <section id="featured-work" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured <span className="text-blue-600">Work</span>
            </h2>
            <p className="text-lg text-slate-600">
              Explore our recent projects. We craft bespoke digital experiences that solve complex problems and drive measurable results.
            </p>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-3xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className={`w-full bg-slate-100 ${project.height} flex items-center justify-center relative`}>
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-blue-200 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  View Case Study
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
