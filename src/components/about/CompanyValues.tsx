'use client'

import { Lightbulb, Users, Target, Heart } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: '창의성',
    description: '독창적이고 혁신적인 아이디어로 브랜드만의 고유한 정체성을 만들어갑니다.'
  },
  {
    icon: Users,
    title: '협업',
    description: '클라이언트와의 긴밀한 소통을 통해 최고의 결과물을 함께 만들어갑니다.'
  },
  {
    icon: Target,
    title: '목적성',
    description: '아름다움과 기능성을 모두 갖춘, 목적에 부합하는 디자인을 추구합니다.'
  },
  {
    icon: Heart,
    title: '진정성',
    description: '클라이언트의 가치와 철학을 깊이 이해하고 진정성 있게 표현합니다.'
  }
]

export function CompanyValues() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="container-design-haus">
        <div className="text-center mb-16">
          <h2 className="design-haus-heading text-4xl md:text-5xl font-semibold mb-6">
            우리의 가치
          </h2>
          <p className="design-haus-text text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            Design Haus가 추구하는 핵심 가치들입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={value.title}
                className={`text-center card-design-haus-minimal p-8 hover-lift animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="design-haus-heading text-xl font-semibold mb-4">
                  {value.title}
                </h3>
                <p className="design-haus-text text-primary-600 dark:text-primary-400">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}