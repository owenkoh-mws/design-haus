'use client'

import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: MapPin,
    title: '오피스 위치',
    primary: '서울시 강남구 테헤란로 123',
    secondary: '디자인 빌딩 7층'
  },
  {
    icon: Phone,
    title: '전화 문의',
    primary: '02-1234-5678',
    secondary: '평일 9:00 - 18:00'
  },
  {
    icon: Mail,
    title: '이메일',
    primary: 'hello@designhaus.com',
    secondary: '24시간 접수 가능'
  },
  {
    icon: Clock,
    title: '운영 시간',
    primary: '평일 09:00 - 18:00',
    secondary: '토요일 10:00 - 15:00'
  }
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="design-haus-heading text-2xl font-semibold mb-6">
          연락처 정보
        </h2>
        <p className="design-haus-text text-primary-600 dark:text-primary-400 mb-8">
          다양한 방법으로 Design Haus와 소통하세요. 
          편하신 방법으로 연락주시면 빠르게 답변드리겠습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon
          return (
            <div
              key={method.title}
              className={`card-design-haus-minimal p-6 hover-lift animate-fade-in-up stagger-${index + 1}`}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="design-haus-heading text-sm font-semibold mb-1">
                    {method.title}
                  </h3>
                  <div className="design-haus-text text-sm font-medium text-primary-900 dark:text-primary-100 mb-1">
                    {method.primary}
                  </div>
                  <div className="design-haus-text text-xs text-primary-500 dark:text-primary-500">
                    {method.secondary}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick contact */}
      <div className="card-design-haus-elevated p-6">
        <div className="flex items-center space-x-3 mb-4">
          <MessageCircle className="w-6 h-6 text-accent-500" />
          <h3 className="design-haus-heading text-lg font-semibold">
            빠른 상담 신청
          </h3>
        </div>
        <p className="design-haus-text text-sm text-primary-600 dark:text-primary-400 mb-4">
          30분 무료 화상 상담을 통해 프로젝트에 대해 자세히 이야기해보세요.
        </p>
        <button className="design-haus-button primary w-full">
          상담 예약하기
        </button>
      </div>

      {/* Map placeholder */}
      <div className="card-design-haus-minimal p-6">
        <h3 className="design-haus-heading text-lg font-semibold mb-4">
          오시는 길
        </h3>
        <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary-400 dark:text-primary-500 mx-auto mb-2" />
            <p className="design-haus-text text-sm text-primary-500 dark:text-primary-500">
              지도 영역
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="design-haus-text text-xs text-primary-600 dark:text-primary-400">
            <strong>지하철:</strong> 2호선 강남역 3번 출구 도보 5분
          </p>
          <p className="design-haus-text text-xs text-primary-600 dark:text-primary-400">
            <strong>버스:</strong> 강남역 정류장 하차
          </p>
          <p className="design-haus-text text-xs text-primary-600 dark:text-primary-400">
            <strong>주차:</strong> 건물 지하 1-3층 (2시간 무료)
          </p>
        </div>
      </div>
    </div>
  )
}