import { Metadata } from 'next'
import { AboutHero } from '@/components/about/AboutHero'
import { TeamSection } from '@/components/about/TeamSection'
import { CompanyValues } from '@/components/about/CompanyValues'
import { CompanyTimeline } from '@/components/about/CompanyTimeline'

export const metadata: Metadata = {
  title: 'About - Design Haus',
  description: 'Design Haus의 이야기를 들어보세요. 우리의 미션, 비전, 그리고 창의적인 팀원들을 소개합니다.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <AboutHero />
      <CompanyValues />
      <TeamSection />
      <CompanyTimeline />
    </main>
  )
}