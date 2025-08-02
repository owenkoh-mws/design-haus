'use client'

const team = [
  {
    name: '김민지',
    role: 'Creative Director',
    bio: '10년간의 브랜딩 경험을 바탕으로 Design Haus의 창의적 방향을 이끌고 있습니다.',
    avatar: 'MJ'
  },
  {
    name: '박준호',
    role: 'Lead Designer',
    bio: 'UI/UX와 그래픽 디자인 전문가로, 사용자 중심의 디자인을 추구합니다.',
    avatar: 'JH'
  },
  {
    name: '이소영',
    role: 'Brand Strategist',
    bio: '브랜드 전략과 마케팅 분야의 전문가로 클라이언트의 비즈니스 성장을 돕습니다.',
    avatar: 'SY'
  },
  {
    name: '최예진',
    role: 'Motion Designer',
    bio: '모션 그래픽과 인터렉션 디자인으로 브랜드에 생동감을 불어넣습니다.',
    avatar: 'YJ'
  }
]

export function TeamSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950">
      <div className="container-design-haus">
        <div className="text-center mb-16">
          <h2 className="design-haus-heading text-4xl md:text-5xl font-semibold mb-6">
            우리 팀
          </h2>
          <p className="design-haus-text text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            창의적이고 전문적인 Design Haus의 팀원들을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`text-center card-design-haus-elevated p-8 hover-lift animate-fade-in-up stagger-${index + 1} group`}
            >
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <span className="text-white text-2xl font-semibold">
                  {member.avatar}
                </span>
              </div>

              {/* Info */}
              <h3 className="design-haus-heading text-xl font-semibold mb-2">
                {member.name}
              </h3>
              
              <div className="text-accent-600 dark:text-accent-400 font-medium text-sm mb-4">
                {member.role}
              </div>
              
              <p className="design-haus-text text-sm text-primary-600 dark:text-primary-400 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}