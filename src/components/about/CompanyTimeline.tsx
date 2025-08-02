'use client'

const milestones = [
  {
    year: '2019',
    title: 'Design Haus 창립',
    description: '김민지와 박준호가 함께 Design Haus를 설립하며 브랜딩 전문 스튜디오로 시작했습니다.'
  },
  {
    year: '2020',
    title: '첫 번째 수상',
    description: 'Red Dot Design Award에서 브랜딩 부문 수상으로 국제적 인정을 받았습니다.'
  },
  {
    year: '2021',
    title: '팀 확장',
    description: '브랜드 전략가와 모션 디자이너가 합류하며 서비스 영역을 확대했습니다.'
  },
  {
    year: '2022',
    title: '디지털 전환',
    description: 'UI/UX 디자인과 디지털 마케팅 서비스를 추가하며 종합 디자인 에이전시로 발전했습니다.'
  },
  {
    year: '2023',
    title: '글로벌 진출',
    description: '해외 클라이언트 대상 서비스를 시작하며 아시아 태평양 지역으로 사업을 확장했습니다.'
  },
  {
    year: '2024',
    title: '에셋 스토어 런칭',
    description: 'Design Haus Shop을 오픈하며 디자인 템플릿과 에셋을 판매하기 시작했습니다.'
  }
]

export function CompanyTimeline() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="container-design-haus">
        <div className="text-center mb-16">
          <h2 className="design-haus-heading text-4xl md:text-5xl font-semibold mb-6">
            우리의 여정
          </h2>
          <p className="design-haus-text text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            Design Haus가 걸어온 성장의 발자취입니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-accent-600"></div>

            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in-up stagger-${index + 1}`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="card-design-haus-minimal p-6 ml-16 md:ml-0">
                    <div className="text-accent-600 dark:text-accent-400 font-bold text-xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="design-haus-heading text-lg font-semibold mb-3">
                      {milestone.title}
                    </h3>
                    <p className="design-haus-text text-primary-600 dark:text-primary-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-neutral-950 shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}