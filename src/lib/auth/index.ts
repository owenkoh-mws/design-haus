// Auth Library - Design Haus
// Authentication and authorization utilities

// export { default as authConfig } from './config'
// export { default as authService } from './service'
// export { default as authHelpers } from './helpers'
// export { default as authTypes } from './types'
// export { default as authMiddleware } from './middleware'
// export { default as authValidation } from './validation'

// Types
export type AuthUser = {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'admin' | 'editor' | 'user'
  createdAt: Date
  updatedAt: Date
}

export type AuthSession = {
  user: AuthUser
  token: string
  expiresAt: Date
}

export type LoginCredentials = {
  email: string
  password: string
}

export type RegisterData = {
  email: string
  password: string
  name: string
}