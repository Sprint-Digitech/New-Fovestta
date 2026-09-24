"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { SOLUTIONS, type SolutionDetail } from "@/lib/solutions-data";
import { PremiumBackground } from "./PremiumBackground";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function SolutionDetailPage({ solution }: { solution: SolutionDetail }) {
  const related = solution.relatedSlugs
    .map((slug) => SOLUTIONS.find((s) => s.slug === slug))
    .filter(Boolean) as SolutionDetail[];

  return (
    <div className="bg-[#FCFCFF] overflow-hidden">
      {/* Hero */}
      <section className="relative pt-24 pb-14 lg:pt-28 lg:pb-16 overflow-hidden">
        <PremiumBackground variant="elegant" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-4 lg:px-4">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex items-center gap-2 text-[14px] font-bold text-gray-400 mb-6">
                <Link href="/solutions" className="hover:text-[#8B5CF6] transition-colors">Solutions</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-gray-600">{solution.title}</span>
              </div>
              <motion.h1 {...fadeIn} className="text-[32px] lg:text-[44px] font-bold text-gray-900 leading-[1.1] mb-5 tracking-tight">
                {solution.title}
              </motion.h1>
              <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-[18px] lg:text-[20px] text-gray-600 font-medium max-w-2xl leading-relaxed mb-8">
                {solution.tagline}
              </motion.p>
              <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                <Link
                  href="/request-demo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white font-bold rounded-xl shadow-lg hover:scale-[1.03] transition-transform"
                >
                  Book a Free Demo
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[28px] overflow-hidden border border-gray-100 shadow-xl aspect-[16/11] bg-gradient-to-br from-gray-50 to-gray-100"
            >
              <Image src={solution.imageUrl} alt={solution.title} fill sizes="(max-width: 1024px) 100vw, 35rem" className="object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="max-w-[70rem] mx-auto px-4 lg:px-4">
          <motion.p {...fadeIn} className="text-[18px] text-gray-700 leading-relaxed max-w-3xl">
            {solution.overview}
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-10 bg-white">
        <div className="max-w-[70rem] mx-auto px-4 lg:px-4">
          <motion.h2 {...fadeIn} className="text-[26px] lg:text-[32px] font-bold text-gray-900 mb-8 tracking-tight">Built for this</motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solution.highlights.map((h, idx) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-[#FCFCFF]"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4.5 h-4.5 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-gray-900 mb-1.5">{h.title}</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">{h.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges solved */}
      <section className="py-10">
        <div className="max-w-[70rem] mx-auto px-4 lg:px-4">
          <motion.h2 {...fadeIn} className="text-[26px] lg:text-[32px] font-bold text-gray-900 mb-8 tracking-tight">What this solves</motion.h2>
          <div className="rounded-[24px] bg-white border border-gray-100 p-6 lg:p-8 space-y-4">
            {solution.challenges.map((challenge) => (
              <div key={challenge} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#8B5CF6]" strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium leading-relaxed">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-white">
        <div className="max-w-[50rem] mx-auto px-4 lg:px-4">
          <motion.h2 {...fadeIn} className="text-[26px] lg:text-[32px] font-bold text-gray-900 mb-8 tracking-tight">Frequently asked questions</motion.h2>
          <div className="space-y-4">
            {solution.faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl border border-gray-100 bg-[#FCFCFF]">
                <h3 className="text-[16px] font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related solutions */}
      {related.length > 0 && (
        <section className="py-10">
          <div className="max-w-[70rem] mx-auto px-4 lg:px-4">
            <motion.h2 {...fadeIn} className="text-[22px] font-bold text-gray-900 mb-6 tracking-tight">Related solutions</motion.h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/solutions/${rel.slug}`}
                  className="group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-purple-200 transition-all"
                >
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2 group-hover:text-[#8B5CF6] transition-colors">{rel.title}</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{rel.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14">
        <div className="max-w-[70rem] mx-auto px-4 lg:px-4">
          <motion.div
            {...fadeIn}
            className="rounded-[28px] bg-gradient-to-br from-[#6B46FF] to-[#4F46E5] p-10 lg:p-14 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">Find the right fit for your team</h3>
              <p className="text-purple-100 font-medium mb-8 max-w-xl mx-auto">
                Book a free demo and we&apos;ll walk you through the solution built for your size, industry, and compliance needs.
              </p>
              <Link
                href="/request-demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#6B46FF] font-bold rounded-xl shadow-lg hover:bg-gray-50 hover:scale-105 transition-all"
              >
                Book a Free Demo
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
