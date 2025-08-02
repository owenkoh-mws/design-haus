'use client'

import { Button } from '@/components/ui/Button'
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-design-haus relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="design-haus-heading text-4xl md:text-6xl font-semibold mb-6">
            프로젝트를 시작해보세요
          </h2>
          
          <p className="design-haus-text text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            아이디어부터 완성된 제품까지, Design Haus가 함께합니다. 
            브랜드의 성공을 위한 첫 걸음을 내디뎌보세요.
          </p>

          {/* Primary CTA */}
          <div className="mb-12">
            <Button 
              size="xl" 
              className="bg-white text-accent-600 hover:bg-white/90 shadow-2xl hover-lift group text-lg px-8 py-4"
            >
              무료 상담 신청하기
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover-lift cursor-pointer group">
              <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="font-semibold text-sm">이메일 문의</div>
                <div className="text-xs text-white/80">hello@designhaus.com</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover-lift cursor-pointer group">
              <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="font-semibold text-sm">전화 상담</div>
                <div className="text-xs text-white/80">02-1234-5678</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover-lift cursor-pointer group">
              <Calendar className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="font-semibold text-sm">미팅 예약</div>
                <div className="text-xs text-white/80">30분 무료 상담</div>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="design-haus-text text-white/80 text-sm">
              평균 응답 시간: <span className="font-semibold text-white">2시간 이내</span> · 
              무료 상담: <span className="font-semibold text-white">30분</span> · 
              프로젝트 견적: <span className="font-semibold text-white">24시간 이내</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}