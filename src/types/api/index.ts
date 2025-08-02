// API Types - Design Haus
// Type definitions for API requests and responses

// Base API types
export interface ApiResponse<T = any> {
  data: T
  message?: string
  success: boolean
  status: number
}

export interface ApiError {
  message: string
  code: string
  status: number
  details?: any
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Magazine API types
export interface ArticleResponse {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  featuredImage: string
  author: {
    id: string
    name: string
    avatar: string
    bio: string
  }
  category: {
    id: string
    name: string
    slug: string
  }
  tags: string[]
  publishedAt: string
  updatedAt: string
  readTime: number
  views: number
  likes: number
  comments: number
  status: 'draft' | 'published' | 'archived'
}

export interface CategoryResponse {
  id: string
  name: string
  slug: string
  description: string
  image: string
  articleCount: number
  createdAt: string
}

// Shopping API types
export interface ProductResponse {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  sku: string
  images: string[]
  category: {
    id: string
    name: string
    slug: string
  }
  brand: {
    id: string
    name: string
    logo: string
  }
  attributes: {
    color?: string
    size?: string
    material?: string
    dimensions?: string
    weight?: string
  }
  inventory: {
    quantity: number
    inStock: boolean
    lowStock: boolean
  }
  rating: {
    average: number
    count: number
  }
  tags: string[]
  createdAt: string
  updatedAt: string
  status: 'active' | 'inactive' | 'discontinued'
}

export interface CartResponse {
  id: string
  userId: string
  items: CartItemResponse[]
  total: number
  subtotal: number
  shipping: number
  tax: number
  discount: number
  couponCode?: string
  createdAt: string
  updatedAt: string
}

export interface CartItemResponse {
  id: string
  productId: string
  product: ProductResponse
  quantity: number
  price: number
  total: number
  options: {
    color?: string
    size?: string
    [key: string]: any
  }
}

export interface OrderResponse {
  id: string
  orderNumber: string
  userId: string
  items: OrderItemResponse[]
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  payment: {
    method: string
    status: 'pending' | 'paid' | 'failed' | 'refunded'
    transactionId: string
  }
  shipping: {
    address: AddressResponse
    method: string
    trackingNumber?: string
    estimatedDelivery?: string
  }
  total: number
  subtotal: number
  shippingCost: number
  tax: number
  discount: number
  createdAt: string
  updatedAt: string
}

export interface OrderItemResponse {
  id: string
  productId: string
  product: ProductResponse
  quantity: number
  price: number
  total: number
  options: {
    color?: string
    size?: string
    [key: string]: any
  }
}

export interface AddressResponse {
  id: string
  type: 'billing' | 'shipping'
  name: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
  isDefault: boolean
}

// Portfolio API types
export interface ProjectResponse {
  id: string
  title: string
  description: string
  longDescription: string
  slug: string
  images: string[]
  featuredImage: string
  category: {
    id: string
    name: string
    slug: string
  }
  services: string[]
  client: {
    name: string
    logo?: string
    website?: string
  }
  technologies: string[]
  duration: string
  completedAt: string
  status: 'draft' | 'published' | 'featured'
  gallery: {
    id: string
    url: string
    alt: string
    caption?: string
    type: 'image' | 'video'
  }[]
  testimonial?: {
    content: string
    author: string
    position: string
    company: string
    avatar?: string
  }
  createdAt: string
  updatedAt: string
}

export interface ServiceResponse {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  icon: string
  image: string
  features: string[]
  startingPrice?: number
  duration?: string
  category: string
  isActive: boolean
  createdAt: string
}

export interface TestimonialResponse {
  id: string
  content: string
  author: string
  position: string
  company: string
  avatar?: string
  rating: number
  projectId?: string
  isPublished: boolean
  createdAt: string
}

// User API types
export interface UserResponse {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'admin' | 'editor' | 'user'
  profile: {
    bio?: string
    location?: string
    website?: string
    social: {
      twitter?: string
      linkedin?: string
      instagram?: string
    }
  }
  preferences: {
    newsletter: boolean
    notifications: boolean
    theme: 'light' | 'dark' | 'system'
  }
  createdAt: string
  updatedAt: string
  lastLoginAt?: string
}

// Request types
export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  name: string
}

export interface CreateArticleRequest {
  title: string
  content: string
  excerpt?: string
  featuredImage: string
  categoryId: string
  tags: string[]
  status: 'draft' | 'published'
}

export interface CreateProductRequest {
  name: string
  description: string
  price: number
  originalPrice?: number
  sku: string
  images: string[]
  categoryId: string
  brandId: string
  attributes: Record<string, any>
  inventory: {
    quantity: number
  }
  tags: string[]
}

export interface CreateProjectRequest {
  title: string
  description: string
  longDescription: string
  images: string[]
  featuredImage: string
  categoryId: string
  services: string[]
  client: {
    name: string
    logo?: string
    website?: string
  }
  technologies: string[]
  duration: string
  completedAt: string
}