"use client"

import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from "recharts"
import { NumberTicker } from "@/components/ui/number-ticker"
import { TrendingUp, Users, Target, DollarSign } from "lucide-react"

const chartData = [
  { month: "1월", revenue: 120, leads: 45, conversion: 12 },
  { month: "2월", revenue: 180, leads: 68, conversion: 18 },
  { month: "3월", revenue: 240, leads: 89, conversion: 24 },
  { month: "4월", revenue: 320, leads: 125, conversion: 32 },
  { month: "5월", revenue: 450, leads: 178, conversion: 45 },
  { month: "6월", revenue: 580, leads: 234, conversion: 58 },
]

const stats = [
  {
    icon: TrendingUp,
    label: "매출 증가율",
    value: 384,
    suffix: "%",
    description: "6개월 평균",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Users,
    label: "신규 고객",
    value: 1247,
    suffix: "+",
    description: "월평균 신규 획득",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Target,
    label: "전환율",
    value: 24.6,
    suffix: "%",
    description: "평균 전환율",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: DollarSign,
    label: "ROAS",
    value: 7.2,
    suffix: "x",
    description: "광고 투자 수익률",
    color: "from-orange-400 to-red-500"
  }
]

export function StatsSection() {
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
            데이터로 증명하는 성과
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            정확한 데이터 분석을 통해 지속적으로 개선하며, 
            실제 매출 증대로 이어지는 성과를 창출합니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Charts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">매출 성장 추이</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5e6ad2" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#5e6ad2" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis 
                  dataKey="month" 
                  stroke="#ffffff60"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#ffffff60"
                  fontSize={12}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#5e6ad2"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <NumberTicker
                    value={stat.value}
                    decimalPlaces={stat.label === "ROAS" ? 1 : 0}
                    delay={index * 0.2}
                  />
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-sm font-medium text-white/80 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-white/60">
                  {stat.description}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              당신의 비즈니스도 이런 성과를 만들어보세요
            </h3>
            <p className="text-white/90 mb-6">
              무료 마케팅 진단을 통해 현재 상황을 분석하고, 
              맞춤 전략으로 매출 성장을 시작하세요
            </p>
            <button className="bg-white text-[var(--accent-primary)] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              무료 진단 신청하기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}