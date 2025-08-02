import { Metadata } from 'next'
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid'
import { mockProjects, mockProjectCategories } from '@/data/mock-data/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio - Design Haus',
  description: 'Design Haus의 창의적인 프로젝트들을 살펴보세요. 브랜딩, 웹 디자인, 모바일 앱 등 다양한 디자인 작업물을 확인할 수 있습니다.',
  keywords: ['포트폴리오', '디자인', '브랜딩', '웹디자인', '모바일앱', 'UI/UX'],
  openGraph: {
    title: 'Portfolio - Design Haus',
    description: 'Design Haus의 창의적인 프로젝트들을 살펴보세요.',
    type: 'website',
    images: [
      {
        url: '/images/portfolio-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Design Haus Portfolio'
      }
    ]
  }
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-accent-50/30 to-neutral-100 dark:from-neutral-950 dark:via-accent-950/30 dark:to-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-100/20 via-transparent to-transparent dark:from-accent-900/20" />
        
        <div className="relative container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
              <span className="block">Our</span>
              <span className="block bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400 sm:text-xl">
              창의적인 아이디어와 전문적인 실행력으로 완성된 프로젝트들을 확인해보세요.
              <br />
              각 프로젝트는 고객의 비전을 현실로 만든 특별한 여정입니다.
            </p>
            
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-8 text-sm text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent-500" />
                  <span>{mockProjects.length}+ 완료된 프로젝트</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success-500" />
                  <span>{mockProjectCategories.length} 전문 분야</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid
            projects={mockProjects}
            categories={mockProjectCategories}
            showFilters={true}
            gridColumns={3}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-accent-600 to-accent-500">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              다음 프로젝트는 여러분의 것입니다
            </h2>
            <p className="mt-4 text-lg text-accent-100">
              Design Haus와 함께 특별한 프로젝트를 시작해보세요.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-accent-600 shadow-lg transition-all duration-200 hover:bg-accent-50 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-600"
              >
                프로젝트 상담하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}