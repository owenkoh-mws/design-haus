'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const categories = [
  { id: 'all', label: '전체', count: 15 },
  { id: 'branding', label: '브랜딩', count: 5 },
  { id: 'web', label: '웹 디자인', count: 4 },
  { id: 'mobile', label: '모바일 앱', count: 3 },
  { id: 'ecommerce', label: '이커머스', count: 2 },
  { id: 'consulting', label: '컨설팅', count: 1 }
]

interface PortfolioFiltersProps {
  selectedCategory?: string
  onCategoryChange?: (category: string) => void
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export function PortfolioFilters({
  selectedCategory = 'all',
  onCategoryChange,
  searchQuery = '',
  onSearchChange
}: PortfolioFiltersProps) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory)
  const [search, setSearch] = useState(searchQuery)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    onSearchChange?.(value)
  }

  return (
    <div className="space-y-6 mb-12">
      {/* Search */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400 dark:text-primary-500" />
          <input
            type="text"
            placeholder="프로젝트 검색..."
            value={search}
            onChange={handleSearchChange}
            className="design-haus-input pl-12 pr-4 py-3 w-full"
          />
        </div>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`
              inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                activeCategory === category.id
                  ? 'bg-accent-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 border border-neutral-200 dark:border-neutral-700 hover:border-accent-500 dark:hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400'
              }
            `}
          >
            <span>{category.label}</span>
            <span className={`
              text-xs px-1.5 py-0.5 rounded-full
              ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-400'
              }
            `}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Filter actions */}
      <div className="flex justify-center items-center space-x-4 text-sm text-primary-500 dark:text-primary-500">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>필터링 결과: {categories.find(c => c.id === activeCategory)?.count || 0}개 프로젝트</span>
        </div>
        
        {(activeCategory !== 'all' || search) && (
          <button
            onClick={() => {
              setActiveCategory('all')
              setSearch('')
              onCategoryChange?.('all')
              onSearchChange?.('')
            }}
            className="text-accent-600 dark:text-accent-400 hover:underline"
          >
            필터 초기화
          </button>
        )}
      </div>
    </div>
  )
}