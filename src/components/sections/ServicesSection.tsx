"use client"

import { motion } from "framer-motion"
import { TrendingUp, Search, Megaphone, BarChart3, Users, Zap } from "lucide-react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/Button"

const services = [
  {
    name: "SEO 최적화",
    description: "검색 엔진 상위 노출로 자연 유입 트래픽을 극대화합니다",
    Icon: Search,
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-30" />
    ),
    cta: "SEO 분석 받기",
  },
  {
    name: "소셜미디어 마케팅",
    description: "Instagram, Facebook, YouTube 등 플랫폼별 맞춤 전략으로 브랜드 인지도를 높입니다",
    Icon: Users,
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-30" />
    ),
    cta: "SNS 전략 상담",
  },
  {
    name: "퍼포먼스 마케팅",
    description: "Google Ads, Meta Ads 등 유료 광고로 즉시 성과를 창출합니다",
    Icon: TrendingUp,
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-30" />
    ),
    cta: "광고 전략 문의",
  },
  {
    name: "브랜드 마케팅",
    description: "일관된 브랜드 메시지로 고객과의 강력한 연결고리를 구축합니다",
    Icon: Megaphone,
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-30" />
    ),
    cta: "브랜드 컨설팅",
  },
  {
    name: "데이터 분석",
    description: "Google Analytics, GA4 등으로 마케팅 성과를 정확히 측정하고 개선합니다",
    Icon: BarChart3,
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-30" />
    ),
    cta: "분석 리포트",
  },
  {
    name: "마케팅 자동화",
    description: "효율적인 자동화 시스템으로 반복 작업을 줄이고 ROI를 높입니다",
    Icon: Zap,
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-30" />
    ),
    cta: "자동화 도입",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            전문 마케팅 서비스
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            데이터 기반의 체계적인 접근으로 브랜드의 온라인 성과를 극대화합니다
          </p>
        </motion.div>

        {/* Bento Grid */}
        <BentoGrid className="lg:grid-rows-3 mb-16">
          {services.map((service) => (
            <BentoCard key={service.name} {...service} />
          ))}
        </BentoGrid>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              무료 마케팅 진단을 받아보세요
            </h3>
            <p className="text-white/70 mb-6">
              현재 마케팅 현황을 분석하고 맞춤 전략을 제안해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">
                  무료 진단 신청
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#portfolio">
                  성공 사례 보기
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}