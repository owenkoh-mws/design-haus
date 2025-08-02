// API Constants - Design Haus
// API endpoints and configuration

// Base API configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000
} as const

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    VERIFY_EMAIL: '/auth/verify-email',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    PROFILE: '/auth/profile'
  },

  // Users
  USERS: {
    BASE: '/users',
    BY_ID: (id: string) => `/users/${id}`,
    PROFILE: '/users/profile',
    PREFERENCES: '/users/preferences',
    AVATAR: '/users/avatar'
  },

  // Magazine
  MAGAZINE: {
    ARTICLES: '/magazine/articles',
    ARTICLE_BY_ID: (id: string) => `/magazine/articles/${id}`,
    ARTICLE_BY_SLUG: (slug: string) => `/magazine/articles/slug/${slug}`,
    CATEGORIES: '/magazine/categories',
    CATEGORY_BY_ID: (id: string) => `/magazine/categories/${id}`,
    CATEGORY_BY_SLUG: (slug: string) => `/magazine/categories/slug/${slug}`,
    COMMENTS: '/magazine/comments',
    COMMENT_BY_ID: (id: string) => `/magazine/comments/${id}`,
    ARTICLE_COMMENTS: (articleId: string) => `/magazine/articles/${articleId}/comments`,
    TAGS: '/magazine/tags',
    SEARCH: '/magazine/search',
    FEATURED: '/magazine/featured',
    TRENDING: '/magazine/trending',
    LATEST: '/magazine/latest',
    LIKE: (articleId: string) => `/magazine/articles/${articleId}/like`,
    UNLIKE: (articleId: string) => `/magazine/articles/${articleId}/unlike`
  },

  // Shopping
  SHOPPING: {
    PRODUCTS: '/shopping/products',
    PRODUCT_BY_ID: (id: string) => `/shopping/products/${id}`,
    PRODUCT_BY_SLUG: (slug: string) => `/shopping/products/slug/${slug}`,
    CATEGORIES: '/shopping/categories',
    CATEGORY_BY_ID: (id: string) => `/shopping/categories/${id}`,
    CATEGORY_BY_SLUG: (slug: string) => `/shopping/categories/slug/${slug}`,
    BRANDS: '/shopping/brands',
    BRAND_BY_ID: (id: string) => `/shopping/brands/${id}`,
    BRAND_BY_SLUG: (slug: string) => `/shopping/brands/slug/${slug}`,
    CART: '/shopping/cart',
    CART_ITEMS: '/shopping/cart/items',
    CART_ITEM_BY_ID: (id: string) => `/shopping/cart/items/${id}`,
    ORDERS: '/shopping/orders',
    ORDER_BY_ID: (id: string) => `/shopping/orders/${id}`,
    WISHLIST: '/shopping/wishlist',
    SEARCH: '/shopping/search',
    FEATURED: '/shopping/featured',
    BESTSELLERS: '/shopping/bestsellers',
    NEW_ARRIVALS: '/shopping/new-arrivals',
    REVIEWS: '/shopping/reviews',
    PRODUCT_REVIEWS: (productId: string) => `/shopping/products/${productId}/reviews`,
    CHECKOUT: '/shopping/checkout',
    PAYMENT: '/shopping/payment'
  },

  // Portfolio
  PORTFOLIO: {
    PROJECTS: '/portfolio/projects',
    PROJECT_BY_ID: (id: string) => `/portfolio/projects/${id}`,
    PROJECT_BY_SLUG: (slug: string) => `/portfolio/projects/slug/${slug}`,
    CATEGORIES: '/portfolio/categories',
    CATEGORY_BY_ID: (id: string) => `/portfolio/categories/${id}`,
    CATEGORY_BY_SLUG: (slug: string) => `/portfolio/categories/slug/${slug}`,
    SERVICES: '/portfolio/services',
    SERVICE_BY_ID: (id: string) => `/portfolio/services/${id}`,
    SERVICE_BY_SLUG: (slug: string) => `/portfolio/services/slug/${slug}`,
    TESTIMONIALS: '/portfolio/testimonials',
    TESTIMONIAL_BY_ID: (id: string) => `/portfolio/testimonials/${id}`,
    CONTACT: '/portfolio/contact',
    FEATURED: '/portfolio/featured',
    LATEST: '/portfolio/latest'
  },

  // File Upload
  UPLOAD: {
    IMAGE: '/upload/image',
    IMAGES: '/upload/images',
    FILE: '/upload/file',
    FILES: '/upload/files',
    AVATAR: '/upload/avatar'
  },

  // Search
  SEARCH: {
    GLOBAL: '/search',
    ARTICLES: '/search/articles',
    PRODUCTS: '/search/products',
    PROJECTS: '/search/projects',
    SUGGESTIONS: '/search/suggestions'
  },

  // Newsletter
  NEWSLETTER: {
    SUBSCRIBE: '/newsletter/subscribe',
    UNSUBSCRIBE: '/newsletter/unsubscribe'
  },

  // Analytics
  ANALYTICS: {
    TRACK: '/analytics/track',
    PAGE_VIEW: '/analytics/page-view',
    EVENT: '/analytics/event'
  }
} as const

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503
} as const

// Request Headers
export const REQUEST_HEADERS = {
  CONTENT_TYPE: 'Content-Type',
  AUTHORIZATION: 'Authorization',
  ACCEPT: 'Accept',
  ACCEPT_LANGUAGE: 'Accept-Language',
  USER_AGENT: 'User-Agent',
  X_REQUESTED_WITH: 'X-Requested-With'
} as const

// Content Types
export const CONTENT_TYPES = {
  JSON: 'application/json',
  FORM_DATA: 'multipart/form-data',
  FORM_URLENCODED: 'application/x-www-form-urlencoded',
  TEXT: 'text/plain',
  HTML: 'text/html'
} as const

// Cache Keys
export const CACHE_KEYS = {
  // Magazine
  ARTICLES: 'articles',
  ARTICLE: (id: string) => `article:${id}`,
  CATEGORIES: 'categories',
  CATEGORY: (id: string) => `category:${id}`,
  FEATURED_ARTICLES: 'featured-articles',
  TRENDING_ARTICLES: 'trending-articles',

  // Shopping
  PRODUCTS: 'products',
  PRODUCT: (id: string) => `product:${id}`,
  PRODUCT_CATEGORIES: 'product-categories',
  PRODUCT_CATEGORY: (id: string) => `product-category:${id}`,
  BRANDS: 'brands',
  BRAND: (id: string) => `brand:${id}`,
  CART: (userId: string) => `cart:${userId}`,
  FEATURED_PRODUCTS: 'featured-products',
  BESTSELLERS: 'bestsellers',

  // Portfolio
  PROJECTS: 'projects',
  PROJECT: (id: string) => `project:${id}`,
  PROJECT_CATEGORIES: 'project-categories',
  PROJECT_CATEGORY: (id: string) => `project-category:${id}`,
  SERVICES: 'services',
  SERVICE: (id: string) => `service:${id}`,
  TESTIMONIALS: 'testimonials',
  FEATURED_PROJECTS: 'featured-projects',

  // User
  USER: (id: string) => `user:${id}`,
  USER_PROFILE: (id: string) => `user-profile:${id}`,
  USER_PREFERENCES: (id: string) => `user-preferences:${id}`
} as const

// Cache TTL (Time To Live) in seconds
export const CACHE_TTL = {
  SHORT: 300, // 5 minutes
  MEDIUM: 1800, // 30 minutes
  LONG: 3600, // 1 hour
  VERY_LONG: 86400 // 24 hours
} as const