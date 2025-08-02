// Auth-related TypeScript types for Design Haus

export interface LoginFormData {
  email: string
  password: string
  rememberMe?: boolean
}

export interface SignupFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}

export interface AuthUser {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'user' | 'admin'
  createdAt: Date
  updatedAt: Date
}

export interface AuthState {
  user: AuthUser | null
  isLoading: boolean
  isAuthenticated: boolean
  error: string | null
}

export interface LoginResponse {
  user: AuthUser
  token: string
  refreshToken: string
}

export interface SignupResponse {
  user: AuthUser
  token: string
  refreshToken: string
}

export interface AuthError {
  message: string
  code: string
  field?: string
}

// Form validation errors
export interface FormErrors {
  [key: string]: string | undefined
}

// Password requirements
export interface PasswordRequirements {
  minLength: boolean
  hasUpperCase: boolean
  hasLowerCase: boolean
  hasNumber: boolean
  hasSpecialChar: boolean
}

// Auth context types
export interface AuthContextType {
  user: AuthUser | null
  login: (data: LoginFormData) => Promise<void>
  signup: (data: SignupFormData) => Promise<void>
  logout: () => void
  updateUser: (data: Partial<AuthUser>) => Promise<void>
  isLoading: boolean
  error: string | null
  clearError: () => void
}