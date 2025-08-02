// Utils Library - Design Haus
// Utility functions and helpers

// Date utilities
export const formatDate = (date: Date | string, format?: string): string => {
  const d = new Date(date)
  if (format === 'short') {
    return d.toLocaleDateString('ko-KR')
  }
  if (format === 'long') {
    return d.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  return d.toISOString().split('T')[0]
}

export const getRelativeTime = (date: Date | string): string => {
  const d = new Date(date)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (minutes < 60) return `${minutes}분 전`
  if (hours < 24) return `${hours}시간 전`
  return `${days}일 전`
}

// String utilities
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Number utilities
export const formatPrice = (price: number, currency = '원'): string => {
  return new Intl.NumberFormat('ko-KR').format(price) + currency
}

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('ko-KR').format(num)
}

// Array utilities
export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((groups, item) => {
    const group = String(item[key])
    groups[group] = groups[group] || []
    groups[group].push(item)
    return groups
  }, {} as Record<string, T[]>)
}

export const unique = <T>(array: T[]): T[] => {
  return [...new Set(array)]
}

// Validation utilities
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Storage utilities
export const localStorage = {
  get: <T>(key: string, defaultValue?: T): T | null => {
    if (typeof window === 'undefined') return defaultValue || null
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue || null
    } catch {
      return defaultValue || null
    }
  },
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('LocalStorage set error:', error)
    }
  },
  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    window.localStorage.removeItem(key)
  }
}

// API utilities
export const createApiUrl = (endpoint: string, params?: Record<string, any>): string => {
  const url = new URL(endpoint, process.env.NEXT_PUBLIC_API_URL)
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value))
      }
    })
  }
  return url.toString()
}

export const handleApiError = (error: any): string => {
  if (error.response?.data?.message) {
    return error.response.data.message
  }
  if (error.message) {
    return error.message
  }
  return '알 수 없는 오류가 발생했습니다.'
}