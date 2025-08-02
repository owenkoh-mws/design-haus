// Price formatting utilities for Design Haus shop

/**
 * 가격을 한국 원화 형식으로 포맷팅
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

/**
 * 할인 가격 계산
 */
export function calculateDiscountPrice(originalPrice: number, discount: number): number {
  return Math.round(originalPrice * (1 - discount / 100))
}

/**
 * 할인률 계산
 */
export function calculateDiscountPercentage(originalPrice: number, salePrice: number): number {
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}

/**
 * 가격 범위 포맷팅
 */
export function formatPriceRange(min: number, max: number): string {
  return `${formatPrice(min)} - ${formatPrice(max)}`
}

/**
 * 무료 배송 여부 확인 (10만원 이상)
 */
export function isFreeShipping(price: number): boolean {
  return price >= 100000
}

/**
 * 할인 금액 계산
 */
export function calculateSavings(originalPrice: number, salePrice: number): number {
  return originalPrice - salePrice
}

/**
 * 간단한 가격 표시 (만원 단위로 축약)
 */
export function formatPriceCompact(price: number): string {
  if (price >= 10000) {
    const manWon = price / 10000
    if (manWon % 1 === 0) {
      return `${manWon}만원`
    } else {
      return `${manWon.toFixed(1)}만원`
    }
  }
  return formatPrice(price)
}