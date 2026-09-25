"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Check, ChevronRight, DollarSign, Clock, ScanFace, TrendingUp, Users, Shield, BarChart3 } from "lucide-react";
import { FEATURES, type FeatureDetail, type FeatureIconName } from "@/lib/features-data";
import { PremiumBackground } from "./PremiumBackground";

const ICONS: Record<FeatureIconName, typeof DollarSign> = {
  DollarSign, Clock, ScanFace, TrendingUp, Users, Shield, BarChart3,
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function FeatureDetailPage({ feature }: { feature: FeatureDetail }) {
  const related = feature.relatedSlugs
    .map((slug) => FEATURES.find((f) => f.slug === slug))
    .filter(Boolean) as FeatureDetail[];
  const Icon = ICONS[feature.iconName];

  return (
    <div className="bg-[#FCFCFF] overflow-hidden">
      {/* Hero */}
      <section className="relative pt-24 pb-14 lg:pt-28 lg:pb-16 overflow-hidden">
        <PremiumBackground variant="luxury" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-4 lg:px-4">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex items-center gap-2 text-[14px] font-bold text-gray-400 mb-6">
                <Link href="/features" className="hover:text-[#7C3AED] transition-colors">Features</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-gray-600">{feature.title}</span>
              </div>
              <motion.h1 {...fadeIn} className="text-[32px] lg:text-[44px] font-bold text-gray-900 leading-[1.1] mb-5 tracking-tight">
                {feature.title}
              </motion.h1>
              <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-[18px] lg:text-[20px] text-gray-600 font-medium max-w-2xl leading-relaxed mb-8">
                {feature.shortDescription}
              </motion.p>
              <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                <Link
                  href="/request-demo"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r ${feature.gradient} text-white font-bold rounded-xl shadow-lg hover:scale-[1.03] transition-transform`}
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
              className="relative rounded-[28px] overflow-hidden border border-gray-100 shadow-xl aspect-[2/1] bg-gradient-to-br from-gray-50 to-gray-100"
            >
              {feature.imageUrl ? (
                <Image src={feature.imageUrl} alt={feature.title} fill sizes="(max-width: 1024px) 100vw, 35rem" className="object-cover" />
              ) : (
                <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${feature.gradient}`}>
                  <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '18px 18px' }}></div>
                  <Icon className="w-20 h-20 text-white/90 relative z-10" strokeWidth={1.5} />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="max-w-[70rem] mx-auto px-4 lg:px-4">
          <motion.p {...fadeIn} className="text-[18px] text-gray-700 leading-relaxed max-w-3xl">
            {feature.overview}
          </motion.p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-10 bg-white">
        <div className="max-w-[70rem] mx-auto px-4 lg:px-4">
          <motion.h2 {...fadeIn} className="text-[26px] lg:text-[32px] font-bold text-gray-900 mb-8 tracking-tight">What&apos;s included</motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {feature.capabilities.map((cap, idx) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-[#FCFCFF]"
              >
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                  <Check className="w-4.5 h-4.5 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-gray-900 mb-1.5">{cap.title}</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-10">
        <div className="max-w-[70rem] mx-auto px-4 lg:px-4">
          <motion.h2 {...fadeIn} className="text-[26px] lg:text-[32px] font-bold text-gray-900 mb-8 tracking-tight">How it works</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {feature.howItWorks.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                <p className="text-[15px] font-black text-[#7C3AED] mb-2">{step.step}</p>
                <p className="text-[15px] text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-white">
        <div className="max-w-[50rem] mx-auto px-4 lg:px-4">
          <motion.h2 {...fadeIn} className="text-[26px] lg:text-[32px] font-bold text-gray-900 mb-8 tracking-tight">Frequently asked questions</motion.h2>
          <div className="space-y-4">
            {feature.faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl border border-gray-100 bg-[#FCFCFF]">
                <h3 className="text-[16px] font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related features */}
      {related.length > 0 && (
        <section className="py-10">
          <div className="max-w-[70rem] mx-auto px-4 lg:px-4">
            <motion.h2 {...fadeIn} className="text-[22px] font-bold text-gray-900 mb-6 tracking-tight">Related features</motion.h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/features/${rel.slug}`}
                  className="group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-purple-200 transition-all"
                >
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2 group-hover:text-[#7C3AED] transition-colors">{rel.title}</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{rel.shortDescription}</p>
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
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">See {feature.title} in action</h3>
              <p className="text-purple-100 font-medium mb-8 max-w-xl mx-auto">
                Book a free demo and we&apos;ll walk you through exactly how it fits your team.
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
