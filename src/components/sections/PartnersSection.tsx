"use client"

import { motion } from "framer-motion"
import { Marquee } from "@/components/ui/marquee"

const partners = [
  { name: "Samsung", logo: "🏢" },
  { name: "LG", logo: "📱" },
  { name: "Hyundai", logo: "🚗" },
  { name: "SK", logo: "⚡" },
  { name: "Naver", logo: "🔍" },
  { name: "Kakao", logo: "💬" },
  { name: "Coupang", logo: "📦" },
  { name: "Baemin", logo: "🍕" },
  { name: "Toss", logo: "💳" },
  { name: "Kurly", logo: "🥬" },
  { name: "29CM", logo: "👕" },
  { name: "Musinsa", logo: "👔" }
]

const testimonials = [
  {
    name: "김민수",
    position: "마케팅 디렉터",
    company: "패션 브랜드 A",
    content: "3개월만에 온라인 매출이 300% 증가했습니다. 데이터 기반의 정교한 전략이 인상적이었어요.",
    rating: 5
  },
  {
    name: "박지영",
    position: "대표이사",
    company: "IT 스타트업 B",
    content: "B2B 리드 생성에서 탁월한 성과를 보여줬습니다. ROI가 기대치를 훨씬 상회했어요.",
    rating: 5
  },
  {
    name: "이철호",
    position: "CMO",
    company: "헬스케어 C",
    content: "브랜드 인지도 향상과 함께 실질적인 매출 증대까지 동시에 달성할 수 있었습니다.",
    rating: 5
  }
]

export function PartnersSection() {
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
            신뢰하는 파트너들
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            다양한 규모와 업종의 기업들이 우리와 함께 
            디지털 마케팅 성과를 만들어가고 있습니다
          </p>
        </motion.div>

        {/* Partners Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Marquee pauseOnHover className="[--duration:30s]">
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center w-40 h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors mx-4"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">{partner.logo}</div>
                  <div className="text-white/80 text-sm font-medium">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-12">
            고객 후기
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="text-yellow-400 text-lg">★</div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/80 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-white/60 text-xs">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              다음 성공 사례는 당신의 브랜드입니다
            </h3>
            <p className="text-white/70 mb-6">
              지금 바로 무료 상담을 신청하고 
              맞춤형 마케팅 전략을 확인해보세요
            </p>
            <a href="#contact" className="inline-block bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              무료 상담 신청
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}