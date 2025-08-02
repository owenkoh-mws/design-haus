'use client'

import { useState } from 'react'
import { Search, Filter, SlidersHorizontal } from 'lucide-react'

const categories = [
  { id: 'all', label: '전체', count: 25 },
  { id: 'templates', label: '템플릿', count: 8 },
  { id: 'brand-kits', label: '브랜드 키트', count: 6 },
  { id: 'icons', label: '아이콘', count: 5 },
  { id: 'courses', label: '강의', count: 4 },
  { id: 'mockups', label: '목업', count: 2 }
]

const sortOptions = [
  { id: 'newest', label: '최신순' },
  { id: 'popular', label: '인기순' },
  { id: 'price-low', label: '가격 낮은순' },
  { id: 'price-high', label: '가격 높은순' },
  { id: 'rating', label: '평점순' }
]

const priceRanges = [
  { id: 'all', label: '전체 가격', min: 0, max: Infinity },
  { id: 'free', label: '무료', min: 0, max: 0 },
  { id: 'under-50k', label: '5만원 이하', min: 0, max: 50000 },
  { id: '50k-100k', label: '5만원 - 10만원', min: 50000, max: 100000 },
  { id: 'over-100k', label: '10만원 이상', min: 100000, max: Infinity }
]

interface ProductFiltersProps {
  selectedCategory?: string
  onCategoryChange?: (category: string) => void
  searchQuery?: string
  onSearchChange?: (query: string) => void
  sortBy?: string
  onSortChange?: (sort: string) => void
  priceRange?: string
  onPriceRangeChange?: (range: string) => void
}

export function ProductFilters({
  selectedCategory = 'all',
  onCategoryChange,
  searchQuery = '',
  onSearchChange,
  sortBy = 'newest',
  onSortChange,
  priceRange = 'all',
  onPriceRangeChange
}: ProductFiltersProps) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory)
  const [search, setSearch] = useState(searchQuery)
  const [activeSortBy, setActiveSortBy] = useState(sortBy)
  const [activePriceRange, setActivePriceRange] = useState(priceRange)
  const [showFilters, setShowFilters] = useState(false)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    onSearchChange?.(value)
  }

  const handleSortChange = (sortId: string) => {
    setActiveSortBy(sortId)
    onSortChange?.(sortId)
  }

  const handlePriceRangeChange = (rangeId: string) => {
    setActivePriceRange(rangeId)
    onPriceRangeChange?.(rangeId)
  }

  const resetFilters = () => {
    setActiveCategory('all')
    setSearch('')
    setActiveSortBy('newest')
    setActivePriceRange('all')
    onCategoryChange?.('all')
    onSearchChange?.('')
    onSortChange?.('newest')
    onPriceRangeChange?.('all')
  }

  const hasActiveFilters = activeCategory !== 'all' || search || activeSortBy !== 'newest' || activePriceRange !== 'all'

  return (
    <div className="space-y-6 mb-8">
      {/* Search and mobile filter toggle */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400 dark:text-primary-500" />
            <input
              type="text"
              placeholder="제품 검색..."
              value={search}
              onChange={handleSearchChange}
              className="design-haus-input pl-12 pr-4 py-3 w-full"
            />
          </div>
        </div>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="sm:hidden design-haus-button secondary flex items-center gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          필터
        </button>

        {/* Sort dropdown */}
        <div className="min-w-[160px]">
          <select
            value={activeSortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="design-haus-input py-3 w-full"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filters - desktop always visible, mobile toggleable */}
      <div className={`space-y-6 ${showFilters ? 'block' : 'hidden sm:block'}`}>
        {/* Category filters */}
        <div>
          <h3 className="design-haus-heading text-sm font-semibold mb-3">카테고리</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`
                  inline-flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    activeCategory === category.id
                      ? 'bg-accent-500 text-white shadow-md'
                      : 'bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 border border-neutral-200 dark:border-neutral-700 hover:border-accent-500 dark:hover:border-accent-500'
                  }
                `}
              >
                <span>{category.label}</span>
                <span className={`
                  text-xs px-1.5 py-0.5 rounded-full
                  ${
                    activeCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-primary-100 dark:bg-primary-800 text-primary-500 dark:text-primary-400'
                  }
                `}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Price range filters */}
        <div>
          <h3 className="design-haus-heading text-sm font-semibold mb-3">가격대</h3>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => handlePriceRangeChange(range.id)}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    activePriceRange === range.id
                      ? 'bg-accent-500 text-white shadow-md'
                      : 'bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 border border-neutral-200 dark:border-neutral-700 hover:border-accent-500 dark:hover:border-accent-500'
                  }
                `}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter summary and reset */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center space-x-2 text-sm text-primary-500 dark:text-primary-500">
          <Filter className="w-4 h-4" />
          <span>
            {categories.find(c => c.id === activeCategory)?.count || 0}개 제품
            {search && ` · "${search}" 검색`}
          </span>
        </div>
        
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-accent-600 dark:text-accent-400 hover:underline text-sm font-medium"
          >
            필터 초기화
          </button>
        )}
      </div>
    </div>
  )
}