'use client'

import { portfolioData } from '@/data/mock-data/portfolio'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  // Get testimonials from portfolio data
  const testimonials = portfolioData.testimonials.slice(0, 3)

  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="container-design-haus">
        <div className="text-center mb-16">
          <h2 className="design-haus-heading text-4xl md:text-5xl font-semibold mb-6">
            Client Stories
          </h2>
          <p className="design-haus-text text-lg text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
            고객들이 Design Haus와 함께한 경험을 직접 들어보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card-design-haus-glass p-8 hover-lift animate-fade-in-up stagger-${index + 1} relative`}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-neutral-300 dark:text-neutral-600'
                    }`}
                  />
                ))}
                <span className="design-haus-text text-sm text-primary-500 dark:text-primary-500 ml-2">
                  {testimonial.rating}/5
                </span>
              </div>

              {/* Testimonial content */}
              <blockquote className="design-haus-text text-primary-700 dark:text-primary-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-4">
                  <span className="design-haus-text text-white font-semibold text-lg">
                    {testimonial.author?.charAt(0) || 'U'}
                  </span>
                </div>
                <div>
                  <div className="design-haus-heading text-sm font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="design-haus-text text-xs text-primary-500 dark:text-primary-500">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Project reference */}
              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <div className="design-haus-text text-xs text-primary-500 dark:text-primary-500">
                  프로젝트: {testimonial.projectId}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 p-8 card-design-haus-minimal">
            <div>
              <div className="design-haus-heading text-3xl font-semibold text-accent-600 dark:text-accent-400">
                4.9/5
              </div>
              <p className="design-haus-text text-sm text-primary-600 dark:text-primary-400">
                평균 만족도
              </p>
            </div>
            <div className="w-px h-12 bg-neutral-200 dark:bg-neutral-700" />
            <div>
              <div className="design-haus-heading text-3xl font-semibold text-accent-600 dark:text-accent-400">
                98%
              </div>
              <p className="design-haus-text text-sm text-primary-600 dark:text-primary-400">
                재의뢰율
              </p>
            </div>
            <div className="w-px h-12 bg-neutral-200 dark:bg-neutral-700" />
            <div>
              <div className="design-haus-heading text-3xl font-semibold text-accent-600 dark:text-accent-400">
                100%
              </div>
              <p className="design-haus-text text-sm text-primary-600 dark:text-primary-400">
                프로젝트 완료율
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}