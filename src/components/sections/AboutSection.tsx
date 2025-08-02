"use client"

import { motion } from "framer-motion"
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react"

const milestones = [
  {
    year: "2020",
    title: "회사 설립",
    description: "디지털 마케팅 전문 에이전시로 시작",
    icon: Users
  },
  {
    year: "2021",
    title: "첫 100개 프로젝트 달성",
    description: "다양한 업종의 클라이언트와 성공적인 협업",
    icon: CheckCircle
  },
  {
    year: "2022",
    title: "업계 인정받은 성과",
    description: "디지털 마케팅 어워드 수상",
    icon: Award
  },
  {
    year: "2023",
    title: "매출 1000% 증가",
    description: "클라이언트 평균 ROI 300% 달성",
    icon: TrendingUp
  }
]

const values = [
  {
    title: "데이터 기반 의사결정",
    description: "모든 전략과 실행은 정확한 데이터 분석을 바탕으로 합니다",
  },
  {
    title: "투명한 커뮤니케이션",
    description: "프로젝트 진행 상황과 성과를 실시간으로 공유합니다",
  },
  {
    title: "지속적인 최적화",
    description: "시장 변화에 맞춰 전략을 지속적으로 개선해나갑니다",
  },
  {
    title: "고객 성공에 집중",
    description: "고객의 비즈니스 성장이 우리의 최우선 목표입니다",
  }
]

export function AboutSection() {
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
            우리의 이야기
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            2020년부터 시작된 우리의 여정은 단순한 마케팅 서비스를 넘어서, 
            클라이언트의 진정한 비즈니스 파트너가 되는 것입니다.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white text-center mb-12"
          >
            주요 연혁
          </motion.h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-30" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className={`w-full max-w-md ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative">
                      {/* Timeline dot */}
                      <div className={`absolute top-6 w-4 h-4 bg-[var(--accent-primary)] rounded-full ${
                        index % 2 === 0 ? "-right-10" : "-left-10"
                      }`} />
                      
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center">
                            <milestone.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="text-[var(--accent-primary)] font-bold text-lg mb-1">
                            {milestone.year}
                          </div>
                          <h4 className="text-white font-semibold text-lg mb-2">
                            {milestone.title}
                          </h4>
                          <p className="text-white/70 text-sm">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-12">
            우리의 핵심 가치
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-white font-semibold text-lg mb-3">
                  {value.title}
                </h4>
                <p className="text-white/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              함께 성장할 파트너를 찾고 있나요?
            </h3>
            <p className="text-white/70 mb-6">
              우리의 경험과 전문성을 바탕으로 당신의 비즈니스를 성장시켜드리겠습니다
            </p>
            <button className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              파트너십 문의
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}