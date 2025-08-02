'use client'

import { ProjectCard } from '@/components/common/ProjectCard'
import { Button } from '@/components/ui/Button'
import { portfolioData } from '@/data/mock-data/portfolio'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function FeaturedWork() {
  // Get featured projects (first 3)
  const featuredProjects = portfolioData.projects.slice(0, 3)

  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="container-design-haus">
        <div className="text-center mb-16">
          <h2 className="design-haus-heading text-4xl md:text-5xl font-semibold mb-6">
            Featured Work
          </h2>
          <p className="design-haus-text text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            우리의 대표작들을 통해 Design Haus의 창의적 역량과 전문성을 확인해보세요.
          </p>
        </div>

        {/* Featured projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`animate-fade-in-up stagger-${index + 1}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="text-center">
          <Link href="/portfolio">
            <Button size="lg" variant="outline" className="group">
              모든 프로젝트 보기
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}