'use client'

import { useState, useMemo } from 'react'
import { Star, ShoppingCart, Heart, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { shoppingData } from '@/data/mock-data/shopping'
import { ProductFilters } from './ProductFilters'

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [priceRange, setPriceRange] = useState('all')

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let products = [...shoppingData.products]

    // Filter by category
    if (selectedCategory !== 'all') {
      products = products.filter(product => 
        product.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
        product.tags.some(tag => tag.toLowerCase().includes(selectedCategory.replace('-', ' ')))
      )
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      products = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Filter by price range
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'free':
          products = products.filter(product => product.price === 0)
          break
        case 'under-50k':
          products = products.filter(product => product.price <= 50000)
          break
        case '50k-100k':
          products = products.filter(product => product.price > 50000 && product.price <= 100000)
          break
        case 'over-100k':
          products = products.filter(product => product.price > 100000)
          break
      }
    }

    // Sort products
    switch (sortBy) {
      case 'popular':
        products.sort((a, b) => b.reviews - a.reviews)
        break
      case 'price-low':
        products.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        products.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        products.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
      default:
        // Keep original order (newest first)
        break
    }

    return products
  }, [selectedCategory, searchQuery, sortBy, priceRange])

  const handleAddToCart = (productId: string) => {
    // TODO: Implement cart functionality
    console.log('Add to cart:', productId)
  }

  const handleToggleFavorite = (productId: string) => {
    // TODO: Implement favorites functionality
    console.log('Toggle favorite:', productId)
  }

  return (
    <div>
      {/* Filters */}
      <ProductFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
      />

      {/* Products grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`card-design-haus-elevated group cursor-pointer hover-lift animate-fade-in-up stagger-${(index % 4) + 1}`}
            >
              {/* Product image placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-800 dark:to-accent-700 rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-xl opacity-60" />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAddToCart(product.id)
                      }}
                      className="bg-white text-black hover:bg-white/90"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleToggleFavorite(product.id)
                      }}
                      className="bg-white/20 text-white hover:bg-white/30"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Badge for free products */}
                {product.price === 0 && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    무료
                  </div>
                )}

                {/* Discount badge */}
                {product.originalPrice && product.originalPrice > product.price && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% 할인
                  </div>
                )}
              </div>

              {/* Product info */}
              <div className="p-4 space-y-3">
                {/* Category */}
                <div className="text-xs text-accent-600 dark:text-accent-400 font-medium uppercase tracking-wide">
                  {product.category}
                </div>

                {/* Title */}
                <h3 className="design-haus-heading text-sm font-semibold line-clamp-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="design-haus-text text-xs text-primary-500 dark:text-primary-500 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-neutral-300 dark:text-neutral-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="design-haus-text text-xs text-primary-500 dark:text-primary-500">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price and action */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="design-haus-heading text-lg font-semibold text-accent-600 dark:text-accent-400">
                      {product.price === 0 ? '무료' : `₩${product.price.toLocaleString()}`}
                    </div>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <div className="design-haus-text text-xs text-primary-400 dark:text-primary-500 line-through">
                        ₩{product.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>

                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAddToCart(product.id)
                    }}
                    className="shrink-0"
                  >
                    {product.price === 0 ? (
                      <>
                        <Download className="w-4 h-4 mr-1" />
                        다운로드
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        구매
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Empty state
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-primary-400 dark:text-primary-500" />
            </div>
            
            <h3 className="design-haus-heading text-xl font-semibold mb-3">
              제품을 찾을 수 없습니다
            </h3>
            
            <p className="design-haus-text text-primary-600 dark:text-primary-400 mb-6">
              {searchQuery
                ? `"${searchQuery}"에 대한 검색 결과가 없습니다.`
                : '선택한 필터 조건에 맞는 제품이 없습니다.'
              }
              <br />
              다른 검색어나 필터를 시도해보세요.
            </p>
            
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
                setSortBy('newest')
                setPriceRange('all')
              }}
              className="design-haus-button secondary"
            >
              모든 제품 보기
            </button>
          </div>
        </div>
      )}

      {/* Load more button (placeholder for pagination) */}
      {filteredProducts.length > 0 && filteredProducts.length >= 12 && (
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            더 많은 제품 보기
          </Button>
        </div>
      )}
    </div>
  )
}