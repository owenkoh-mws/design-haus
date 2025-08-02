'use client'

import { useState, useMemo } from 'react'
import { ProjectCard } from '@/components/common/ProjectCard'
import { portfolioData } from '@/data/mock-data/portfolio'
import { PortfolioFilters } from './PortfolioFilters'

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter projects based on category and search
  const filteredProjects = useMemo(() => {
    let projects = portfolioData.projects

    // Filter by category
    if (selectedCategory !== 'all') {
      projects = projects.filter(project => 
        project.category.toLowerCase() === selectedCategory ||
        project.tags.some(tag => tag.toLowerCase().includes(selectedCategory))
      )
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      projects = projects.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return projects
  }, [selectedCategory, searchQuery])

  return (
    <div>
      {/* Filters */}
      <PortfolioFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Results count */}
      <div className="mb-8 text-center">
        <p className="design-haus-text text-primary-600 dark:text-primary-400">
          {filteredProjects.length}개의 프로젝트를 찾았습니다
        </p>
      </div>

      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`animate-fade-in-up stagger-${(index % 3) + 1}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        // Empty state
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-primary-400 dark:text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <h3 className="design-haus-heading text-xl font-semibold mb-3">
              검색 결과가 없습니다
            </h3>
            
            <p className="design-haus-text text-primary-600 dark:text-primary-400 mb-6">
              {searchQuery
                ? `"${searchQuery}"에 대한 검색 결과가 없습니다.`
                : `"${selectedCategory}" 카테고리에 프로젝트가 없습니다.`
              }
              <br />
              다른 검색어나 카테고리를 시도해보세요.
            </p>
            
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
              }}
              className="design-haus-button secondary"
            >
              전체 프로젝트 보기
            </button>
          </div>
        </div>
      )}

      {/* Load more button (placeholder for future pagination) */}
      {filteredProjects.length > 0 && filteredProjects.length >= 9 && (
        <div className="text-center mt-12">
          <button className="design-haus-button secondary large">
            더 많은 프로젝트 보기
          </button>
        </div>
      )}
    </div>
  )
}