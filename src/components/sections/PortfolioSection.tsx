"use client"

import { motion } from "framer-motion"
import { ExternalLink, TrendingUp, Users, ShoppingCart } from "lucide-react"
import { MagicCard } from "@/components/ui/magic-card"
import { Button } from "@/components/ui/Button"

const portfolioItems = [
  {
    id: 1,
    title: "패션 브랜드 A",
    category: "E-commerce",
    description: "온라인 매출 400% 증가, SNS 팔로워 50만명 달성",
    image: "/api/placeholder/400/300",
    results: [
      { label: "매출 증가", value: "400%" },
      { label: "전환율", value: "12.5%" },
      { label: "ROAS", value: "6.2x" }
    ],
    tags: ["SNS 마케팅", "인플루언서", "퍼포먼스 광고"],
    icon: ShoppingCart
  },
  {
    id: 2,
    title: "IT 스타트업 B",
    category: "B2B SaaS",
    description: "리드 생성 300% 증가, 고객 획득 비용 50% 절감",
    image: "/api/placeholder/400/300",
    results: [
      { label: "리드 증가", value: "300%" },
      { label: "CAC 절감", value: "50%" },
      { label: "MQL 증가", value: "250%" }
    ],
    tags: ["콘텐츠 마케팅", "SEO", "링크드인"],
    icon: Users
  },
  {
    id: 3,
    title: "헬스케어 C",
    category: "Healthcare",
    description: "브랜드 인지도 200% 상승, 앱 다운로드 100만회 달성",
    image: "/api/placeholder/400/300",
    results: [
      { label: "브랜드 인지도", value: "200%" },
      { label: "앱 다운로드", value: "100만+" },
      { label: "재방문율", value: "65%" }
    ],
    tags: ["브랜드 마케팅", "모바일 광고", "영상 콘텐츠"],
    icon: TrendingUp
  }
]

export function PortfolioSection() {
  return (
    <section className="py-24 bg-[var(--background-primary)]">
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
            성공 사례
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            다양한 업종의 클라이언트와 함께 만들어낸 
            실제 성과와 혁신적인 마케팅 전략을 확인해보세요
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MagicCard className="p-0 h-full">
                <div className="flex flex-col h-full">
                  {/* Image placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-white/10 to-white/5 rounded-t-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <item.icon className="w-16 h-16 text-white/30" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[var(--accent-primary)] text-white text-xs px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 flex-1">
                      {item.description}
                    </p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {item.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-[var(--accent-secondary)] font-bold text-lg">
                            {result.value}
                          </div>
                          <div className="text-white/60 text-xs">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a href="/portfolio" className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      자세히 보기
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              더 많은 성공 사례가 궁금하신가요?
            </h3>
            <p className="text-white/70 mb-6">
              업종별, 규모별 다양한 성공 사례와 상세한 전략을 
              포트폴리오 자료로 확인하실 수 있습니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/portfolio">
                  전체 포트폴리오 보기
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  업종별 사례 문의
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}