"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    title: "전화 문의",
    content: "02-1234-5678",
    description: "평일 9:00-18:00"
  },
  {
    icon: Mail,
    title: "이메일",
    content: "contact@agency.com",
    description: "24시간 접수 가능"
  },
  {
    icon: MapPin,
    title: "오시는 길",
    content: "서울시 강남구 테헤란로 123",
    description: "지하철 2호선 강남역 5번 출구"
  },
  {
    icon: Clock,
    title: "운영 시간",
    content: "평일 09:00 - 18:00",
    description: "주말 및 공휴일 휴무"
  }
]

export function ContactSection() {
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
            문의하기
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            프로젝트에 대한 궁금한 점이 있으시거나 
            무료 상담을 원하시면 언제든지 연락주세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                프로젝트 문의
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent text-white placeholder-white/50"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                      회사명
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent text-white placeholder-white/50"
                      placeholder="회사명을 입력하세요"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent text-white placeholder-white/50"
                      placeholder="example@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent text-white placeholder-white/50"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                    관심 서비스
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent text-white"
                  >
                    <option value="">서비스를 선택하세요</option>
                    <option value="seo">SEO 최적화</option>
                    <option value="social">소셜미디어 마케팅</option>
                    <option value="performance">퍼포먼스 마케팅</option>
                    <option value="brand">브랜드 마케팅</option>
                    <option value="analysis">데이터 분석</option>
                    <option value="automation">마케팅 자동화</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
                    예상 예산
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent text-white"
                  >
                    <option value="">예산 범위를 선택하세요</option>
                    <option value="500">500만원 미만</option>
                    <option value="1000">500만원 - 1,000만원</option>
                    <option value="3000">1,000만원 - 3,000만원</option>
                    <option value="5000">3,000만원 - 5,000만원</option>
                    <option value="more">5,000만원 이상</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    프로젝트 상세 내용 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent text-white placeholder-white/50 resize-none"
                    placeholder="프로젝트에 대한 상세한 내용을 입력해주세요. 현재 상황, 목표, 기대하시는 결과 등을 포함해주시면 더 정확한 제안을 드릴 수 있습니다."
                  />
                </div>

                <Button size="lg" className="w-full group">
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  문의 보내기
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                연락처 정보
              </h3>
              <p className="text-white/70 mb-8">
                빠른 답변을 원하시면 전화로 연락주세요. 
                이메일로 보내주시면 24시간 내에 답변드리겠습니다.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {info.title}
                    </h4>
                    <p className="text-white/90 mb-1">
                      {info.content}
                    </p>
                    <p className="text-white/60 text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-white/10 rounded-xl p-6 mt-8"
            >
              <h4 className="text-white font-semibold mb-3">
                ⚡ 빠른 응답 약속
              </h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• 이메일 문의: 24시간 내 답변</li>
                <li>• 전화 문의: 즉시 상담 가능</li>
                <li>• 무료 진단: 3일 내 리포트 제공</li>
                <li>• 제안서: 1주일 내 상세 전략 제안</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}