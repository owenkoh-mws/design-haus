// Product utilities for Design Haus shop

import { Product, FilterOptions, SortOptions } from '@/types'

/**
 * 상품 정렬 옵션 타입
 */
export type ProductSortOption = 
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'rating-desc'
  | 'newest'
  | 'popular'
  | 'discount-desc'

/**
 * 상품 배열 정렬
 */
export function sortProducts(products: Product[], sortBy: ProductSortOption): Product[] {
  const sortedProducts = [...products]

  switch (sortBy) {
    case 'name-asc':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
    
    case 'name-desc':
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name))
    
    case 'price-asc':
      return sortedProducts.sort((a, b) => a.price - b.price)
    
    case 'price-desc':
      return sortedProducts.sort((a, b) => b.price - a.price)
    
    case 'rating-desc':
      return sortedProducts.sort((a, b) => b.rating.average - a.rating.average)
    
    case 'newest':
      return sortedProducts.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    
    case 'popular':
      return sortedProducts.sort((a, b) => b.rating.count - a.rating.count)
    
    case 'discount-desc':
      return sortedProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0))
    
    default:
      return sortedProducts
  }
}

/**
 * 상품 필터링
 */
export function filterProducts(products: Product[], filters: FilterOptions): Product[] {
  let filteredProducts = [...products]

  // 카테고리 필터
  if (filters.categories && filters.categories.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      filters.categories!.includes(product.category.slug)
    )
  }

  // 브랜드 필터
  if (filters.brands && filters.brands.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      filters.brands!.includes(product.brand.slug)
    )
  }

  // 가격 범위 필터
  if (filters.priceRange) {
    const { min, max } = filters.priceRange
    filteredProducts = filteredProducts.filter(product =>
      product.price >= min && product.price <= max
    )
  }

  // 태그 필터
  if (filters.tags && filters.tags.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      filters.tags!.some(tag => product.tags.includes(tag))
    )
  }

  // 할인 상품만 필터
  if (filters.onSale) {
    filteredProducts = filteredProducts.filter(product =>
      product.discount && product.discount > 0
    )
  }

  // 재고 있는 상품만 필터
  if (filters.inStock) {
    filteredProducts = filteredProducts.filter(product =>
      product.inventory.inStock
    )
  }

  // 평점 필터
  if (filters.minRating) {
    filteredProducts = filteredProducts.filter(product =>
      product.rating.average >= filters.minRating!
    )
  }

  return filteredProducts
}

/**
 * 상품 검색
 */
export function searchProducts(products: Product[], query: string): Product[] {
  if (!query.trim()) {
    return products
  }

  const searchTerm = query.toLowerCase().trim()

  return products.filter(product => {
    const searchableText = [
      product.name,
      product.description,
      product.category.name,
      product.brand.name,
      ...product.tags
    ].join(' ').toLowerCase()

    return searchableText.includes(searchTerm)
  })
}

/**
 * 가격 범위 계산
 */
export function getPriceRange(products: Product[]): { min: number; max: number } {
  if (products.length === 0) {
    return { min: 0, max: 0 }
  }

  const prices = products.map(product => product.price)
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  }
}

/**
 * 카테고리별 상품 개수 계산
 */
export function getCategoryStats(products: Product[]): Record<string, number> {
  return products.reduce((stats, product) => {
    const categorySlug = product.category.slug
    stats[categorySlug] = (stats[categorySlug] || 0) + 1
    return stats
  }, {} as Record<string, number>)
}

/**
 * 브랜드별 상품 개수 계산
 */
export function getBrandStats(products: Product[]): Record<string, number> {
  return products.reduce((stats, product) => {
    const brandSlug = product.brand.slug
    stats[brandSlug] = (stats[brandSlug] || 0) + 1
    return stats
  }, {} as Record<string, number>)
}

/**
 * 상품이 신상품인지 확인 (7일 이내)
 */
export function isNewProduct(product: Product): boolean {
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  
  return new Date(product.createdAt) > sevenDaysAgo
}

/**
 * 상품이 베스트셀러인지 확인 (평점 높고 리뷰 많음)
 */
export function isBestSeller(product: Product): boolean {
  return product.rating.average >= 4.5 && product.rating.count >= 50
}

/**
 * 별점을 별 아이콘 배열로 변환
 */
export function getRatingStars(rating: number): { filled: number; halfFilled: boolean; empty: number } {
  const filled = Math.floor(rating)
  const halfFilled = rating % 1 >= 0.5
  const empty = 5 - filled - (halfFilled ? 1 : 0)

  return { filled, halfFilled, empty }
}