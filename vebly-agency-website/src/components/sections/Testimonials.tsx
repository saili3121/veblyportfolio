"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const tabs = [
    { id: "results", label: "Results" },
    { id: "expertise", label: "Expertise" },
    { id: "working-style", label: "Working Style" },
    { id: "experience", label: "Experience" },
    { id: "commitment", label: "Commitment" },
    { id: "support", label: "Support" },
  ];

  const content: Record<string, { title: string; desc: string; items: string[] }> = {
    results: {
      title: "Results",
      desc: "We design web and AI systems that directly impact revenue, efficiency, and long-term scalability. Your growth is our KPI.",
      items: [
        "Structured system delivery, not chaos",
        "Automations that reduce operational workload",
        "Scalable web & AI architecture",
        "Conversion-focused web & AI systems",
        "Performance-first technical decisions",
        "Measurable business impact"
      ]
    },
    expertise: {
      title: "Expertise",
      desc: "Our team consists of industry veterans who have built products for leading global enterprises.",
      items: [
        "Deep technical knowledge in Next.js & React",
        "Advanced AI model integrations",
        "Robust backend architecture design",
        "Secure and compliant cloud deployments",
        "UI/UX experts who understand user psychology",
        "Mobile-first responsive methodology"
      ]
    },
    "working-style": {
      title: "Working Style",
      desc: "We don't just write code. We partner with you transparently and become an extension of your team.",
      items: [
        "Agile sprints with weekly deliverables",
        "Clear communication and no jargon",
        "Transparent pricing with no hidden fees",
        "Proactive problem solving",
        "Direct access to lead engineers",
        "Collaborative design processes"
      ]
    },
    experience: {
      title: "Experience",
      desc: "Years of specialized experience crafting bespoke digital products that define industries.",
      items: [
        "100+ successful project launches",
        "Cross-industry domain knowledge",
        "Proven crisis management & recovery",
        "Experience with high-traffic scalability",
        "Enterprise-grade security practices",
        "Award-winning UI/UX portfolio"
      ]
    },
    commitment: {
      title: "Commitment",
      desc: "We are obsessed with quality. Good enough is never good enough for us or our clients.",
      items: [
        "Rigorous QA and automated testing",
        "Pixel-perfect implementation",
        "Accessibility compliance (WCAG)",
        "SEO-first development mindset",
        "Strict code reviews and linting",
        "Long-term partnership approach"
      ]
    },
    support: {
      title: "Support",
      desc: "Our relationship doesn't end at launch. We provide ongoing support to keep you ahead.",
      items: [
        "24/7 critical issue monitoring",
        "Regular performance audits",
        "Continuous security updates",
        "Dedicated account managers",
        "Fast response SLAs",
        "Seamless feature upgrades"
      ]
    }
  };

  const [activeTab, setActiveTab] = useState("results");

  return (
    <section id="testimonials" className="py-32 bg-[#0B1120] relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1D7BF1 1px, transparent 1px),
            linear-gradient(to bottom, #1D7BF1 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1D7BF1]/20 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#00B4DB]/10 rounded-full blur-[150px] pointer-events-none transform translate-y-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight flex items-center justify-center gap-4"
          >
            Why Clients Choose Us?
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 w-16 bg-gradient-to-r from-[#1D7BF1] to-[#00B4DB] origin-left hidden md:block"
            />
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === tab.id
                  ? "bg-gradient-to-r from-[#1D7BF1] to-[#00B4DB] text-white shadow-[0_0_20px_rgba(29,123,241,0.4)]"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <h3 className="text-3xl font-bold text-white mb-6">{content[activeTab].title}</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-12 max-w-3xl">
                {content[activeTab].desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative">
                {/* Glowing divider line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4DB]/50 to-transparent"></div>

                {content[activeTab].items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 py-4 border-b border-white/5 group"
                  >
                    {/* Glowing square bullet */}
                    <div className="mt-1.5 relative w-2 h-2 shrink-0">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-r from-[#1D7BF1] to-[#00B4DB] shadow-[0_0_8px_#00B4DB]"
                      />
                    </div>
                    <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
