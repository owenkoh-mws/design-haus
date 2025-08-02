// Auth Store - Design Haus
// Authentication state management

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, LoginCredentials, RegisterData } from '@/types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
  clearError: () => void
  setLoading: (loading: boolean) => void
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // State
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (credentials: LoginCredentials) => {
        set({ isLoading: true, error: null })
        
        try {
          // TODO: Implement actual login API call
          // const response = await authService.login(credentials)
          // const user = response.data.user
          
          // Mock implementation for now
          const mockUser: User = {
            id: '1',
            email: credentials.email,
            name: 'Design Haus User',
            avatar: undefined,
            role: 'user',
            profile: {
              bio: undefined,
              location: undefined,
              website: undefined,
              social: {}
            },
            preferences: {
              newsletter: true,
              notifications: true,
              theme: 'system',
              language: 'ko',
              timezone: 'Asia/Seoul'
            },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString()
          }

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null
          })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : '로그인에 실패했습니다.',
            isLoading: false
          })
        }
      },

      register: async (data: RegisterData) => {
        set({ isLoading: true, error: null })
        
        try {
          // TODO: Implement actual register API call
          // const response = await authService.register(data)
          // const user = response.data.user
          
          // Mock implementation for now
          const mockUser: User = {
            id: '1',
            email: data.email,
            name: data.name,
            avatar: undefined,
            role: 'user',
            profile: {
              bio: undefined,
              location: undefined,
              website: undefined,
              social: {}
            },
            preferences: {
              newsletter: true,
              notifications: true,
              theme: 'system',
              language: 'ko',
              timezone: 'Asia/Seoul'
            },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString()
          }

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null
          })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : '회원가입에 실패했습니다.',
            isLoading: false
          })
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null
        })
        
        // TODO: Implement actual logout API call
        // authService.logout()
        
        // Clear persisted state
        localStorage.removeItem('auth-storage')
      },

      updateUser: (userData: Partial<User>) => {
        const currentUser = get().user
        if (currentUser) {
          set({
            user: {
              ...currentUser,
              ...userData,
              updatedAt: new Date().toISOString()
            }
          })
        }
      },

      clearError: () => {
        set({ error: null })
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      })
    }
  )
)

// Selectors for easier state access
export const authSelectors = {
  user: (state: AuthStore) => state.user,
  isAuthenticated: (state: AuthStore) => state.isAuthenticated,
  isLoading: (state: AuthStore) => state.isLoading,
  error: (state: AuthStore) => state.error,
  userRole: (state: AuthStore) => state.user?.role,
  userPreferences: (state: AuthStore) => state.user?.preferences
}

// Helper hooks
export const useAuth = () => {
  const store = useAuthStore()
  return {
    user: store.user,
    isAuthenticated: store.isAuthenticated,
    isLoading: store.isLoading,
    error: store.error,
    login: store.login,
    register: store.register,
    logout: store.logout,
    updateUser: store.updateUser,
    clearError: store.clearError
  }
}

export const useAuthUser = () => useAuthStore(authSelectors.user)
export const useIsAuthenticated = () => useAuthStore(authSelectors.isAuthenticated)
export const useAuthLoading = () => useAuthStore(authSelectors.isLoading)
export const useAuthError = () => useAuthStore(authSelectors.error)