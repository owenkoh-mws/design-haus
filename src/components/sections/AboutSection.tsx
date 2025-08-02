"use client"

import { motion } from "framer-motion"
import { Rocket, Target, Users2, TrendingUp, Award, Lightbulb, HeartHandshake, Zap } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "성공한 프로젝트",
    description: "다양한 업종의 클라이언트와 함께"
  },
  {
    number: 300,
    suffix: "%",
    label: "평균 ROI 증가",
    description: "데이터 기반 전략의 결과"
  },
  {
    number: 50,
    suffix: "+",
    label: "전문 파트너사",
    description: "글로벌 네트워크 구축"
  },
  {
    number: 98,
    suffix: "%",
    label: "고객 만족도",
    description: "지속적인 파트너십 유지"
  }
]

const journey = [
  {
    year: "2020",
    title: "Digital Journey 시작",
    description: "소수 정예 팀으로 디지털 마케팅 혁신 시작",
    icon: Rocket,
    color: "from-blue-500 to-purple-600"
  },
  {
    year: "2021", 
    title: "전략적 성장",
    description: "AI 기반 마케팅 솔루션 도입 및 100+ 프로젝트 성공",
    icon: Target,
    color: "from-purple-500 to-pink-600"
  },
  {
    year: "2022",
    title: "업계 리더십",
    description: "디지털 마케팅 어워드 수상 및 업계 인정",
    icon: Award,
    color: "from-pink-500 to-red-600"
  },
  {
    year: "2023",
    title: "글로벌 확장",
    description: "해외 시장 진출 및 글로벌 파트너십 구축",
    icon: TrendingUp,
    color: "from-orange-500 to-yellow-600"
  }
]

const expertise = [
  {
    icon: Lightbulb,
    title: "혁신적 사고",
    description: "창의적이고 혁신적인 마케팅 솔루션으로 시장을 선도합니다",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Target,
    title: "정확한 타겟팅",
    description: "데이터 분석을 통한 정밀한 고객 세분화와 맞춤형 전략을 제공합니다",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    icon: Zap,
    title: "빠른 실행력",
    description: "신속한 의사결정과 실행으로 시장 기회를 놓치지 않습니다",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: HeartHandshake,
    title: "진정한 파트너십",
    description: "고객의 성공이 우리의 성공이라는 마음가짐으로 함께 성장합니다",
    gradient: "from-green-400 to-blue-500"
  }
]

export function AboutSection() {
  return (
    <section className="py-24 bg-[var(--background-secondary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-primary)]/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Users2 className="w-4 h-4 text-[var(--accent-primary)] mr-2" />
            <span className="text-white/80 text-sm font-medium">우리의 이야기</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            데이터로 증명하는
            <br />
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              성장의 여정
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            2020년 작은 팀으로 시작해 지금까지, 우리는 단순한 서비스 제공을 넘어서 
            클라이언트의 진정한 디지털 파트너로 성장해왔습니다.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[var(--accent-primary)]/50 hover:shadow-xl hover:shadow-[var(--accent-primary)]/20">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                    <NumberTicker value={stat.number} />
                    <span className="text-[var(--accent-primary)]">{stat.suffix}</span>
                  </div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-white/60 text-sm">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              성장의 발자취
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              매년 새로운 도전과 혁신을 통해 디지털 마케팅 업계를 선도해왔습니다
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-primary)]/50 to-transparent transform -translate-y-1/2" />
            
            <div className="grid lg:grid-cols-4 gap-8">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="text-center">
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Year */}
                    <div className="text-2xl font-bold text-[var(--accent-primary)] mb-3">
                      {item.year}
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                      <h4 className="text-white font-semibold text-lg mb-3">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              우리만의 경쟁력
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              차별화된 전문성과 혁신적 사고로 클라이언트의 성공을 이끌어냅니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-white font-bold text-xl mb-4">
                    {item.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                다음 성공 스토리의 주인공은
                <br />
                <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                  바로 당신입니다
                </span>
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                우리의 전문성과 혁신적 사고, 그리고 당신의 비전이 만나면 
                놀라운 성과를 만들어낼 수 있습니다
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[var(--accent-primary)]/30 hover:scale-105 transition-all duration-300"
              >
                함께 시작하기
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}