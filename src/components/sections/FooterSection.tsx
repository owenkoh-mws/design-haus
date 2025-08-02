"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/designagency", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/designagency", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/designagency", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/designagency", label: "LinkedIn" }
]

const quickLinks = [
  { name: "서비스", href: "#services" },
  { name: "성과", href: "#stats" },
  { name: "회사소개", href: "#about" },
  { name: "포트폴리오", href: "#portfolio" },
  { name: "파트너", href: "#partners" },
  { name: "문의하기", href: "#contact" }
]

const services = [
  "SEO 최적화",
  "소셜미디어 마케팅",
  "퍼포먼스 마케팅",
  "브랜드 마케팅",
  "데이터 분석",
  "마케팅 자동화"
]

export function FooterSection() {
  return (
    <footer className="bg-[var(--background-primary)] border-t border-white/10">
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              오시는 길
            </h2>
            <p className="text-white/70">
              언제든지 방문하셔서 직접 상담받으실 수 있습니다
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-80 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-16 h-16 text-white/30 mx-auto mb-4" />
                <p className="text-white/60">지도 영역</p>
                <p className="text-white/40 text-sm mt-2">
                  실제 구현 시 Google Maps 또는 네이버 지도 API 연동
                </p>
              </div>
            </motion.div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  찾아오시는 길
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">주소</p>
                      <p className="text-white/70 text-sm">
                        서울시 강남구 테헤란로 123<br />
                        디지털마케팅빌딩 10층
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">운영시간</p>
                      <p className="text-white/70 text-sm">
                        평일 09:00 - 18:00<br />
                        주말 및 공휴일 휴무
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-white font-medium mb-3">교통편</h4>
                  <div className="space-y-2 text-sm text-white/70">
                    <p>🚇 지하철 2호선 강남역 5번 출구 (도보 5분)</p>
                    <p>🚌 버스 146, 360, 740 강남역 정류장</p>
                    <p>🚗 지하 주차장 이용 가능 (2시간 무료)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Digital Agency
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                데이터 기반의 전략적 접근으로 
                브랜드의 디지털 성장을 이끌어가는 
                마케팅 전문 에이전시입니다.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                빠른 링크
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                서비스
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/70 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                연락처
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span className="text-white/70 text-sm">02-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span className="text-white/70 text-sm">contact@agency.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[var(--accent-primary)] mt-0.5" />
                  <span className="text-white/70 text-sm">
                    서울시 강남구 테헤란로 123<br />
                    디지털마케팅빌딩 10층
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-6"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">
                © 2024 Digital Agency. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
                  개인정보처리방침
                </a>
                <a href="/terms" className="text-white/60 hover:text-white transition-colors">
                  이용약관
                </a>
                <a href="/business-info" className="text-white/60 hover:text-white transition-colors">
                  사업자정보
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}