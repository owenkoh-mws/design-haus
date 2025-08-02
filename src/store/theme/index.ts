// Theme Store - Design Haus
// Theme and UI preferences state management

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark' | 'system'
type Language = 'ko' | 'en'

interface ThemeState {
  theme: Theme
  language: Language
  sidebarCollapsed: boolean
  fontSize: 'sm' | 'md' | 'lg'
  animations: boolean
  reducedMotion: boolean
}

interface ThemeActions {
  setTheme: (theme: Theme) => void
  setLanguage: (language: Language) => void
  toggleSidebar: () => void
  setSidebarCollapsed: (collapsed: boolean) => void
  setFontSize: (size: 'sm' | 'md' | 'lg') => void
  setAnimations: (enabled: boolean) => void
  setReducedMotion: (enabled: boolean) => void
  resetToDefaults: () => void
}

type ThemeStore = ThemeState & ThemeActions

const defaultState: ThemeState = {
  theme: 'system',
  language: 'ko',
  sidebarCollapsed: false,
  fontSize: 'md',
  animations: true,
  reducedMotion: false
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      // State
      ...defaultState,

      // Actions
      setTheme: (theme: Theme) => {
        set({ theme })
        
        // Apply theme to document
        if (typeof window !== 'undefined') {
          const root = window.document.documentElement
          
          if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
              ? 'dark' 
              : 'light'
            root.classList.remove('light', 'dark')
            root.classList.add(systemTheme)
          } else {
            root.classList.remove('light', 'dark')
            root.classList.add(theme)
          }
        }
      },

      setLanguage: (language: Language) => {
        set({ language })
        
        // Apply language to document
        if (typeof window !== 'undefined') {
          document.documentElement.lang = language
        }
      },

      toggleSidebar: () => {
        set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed }))
      },

      setSidebarCollapsed: (collapsed: boolean) => {
        set({ sidebarCollapsed: collapsed })
      },

      setFontSize: (fontSize: 'sm' | 'md' | 'lg') => {
        set({ fontSize })
        
        // Apply font size to document
        if (typeof window !== 'undefined') {
          const root = window.document.documentElement
          root.classList.remove('text-sm', 'text-md', 'text-lg')
          root.classList.add(`text-${fontSize}`)
        }
      },

      setAnimations: (animations: boolean) => {
        set({ animations })
        
        // Apply animations preference to document
        if (typeof window !== 'undefined') {
          const root = window.document.documentElement
          if (animations) {
            root.classList.remove('no-animations')
          } else {
            root.classList.add('no-animations')
          }
        }
      },

      setReducedMotion: (reducedMotion: boolean) => {
        set({ reducedMotion })
        
        // Apply reduced motion preference to document
        if (typeof window !== 'undefined') {
          const root = window.document.documentElement
          if (reducedMotion) {
            root.classList.add('reduce-motion')
          } else {
            root.classList.remove('reduce-motion')
          }
        }
      },

      resetToDefaults: () => {
        set(defaultState)
        
        // Reset document classes
        if (typeof window !== 'undefined') {
          const root = window.document.documentElement
          root.classList.remove(
            'light', 'dark', 
            'text-sm', 'text-md', 'text-lg',
            'no-animations', 'reduce-motion'
          )
          
          // Apply system theme
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
            ? 'dark' 
            : 'light'
          root.classList.add(systemTheme, 'text-md')
          document.documentElement.lang = 'ko'
        }
      }
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        if (state && typeof window !== 'undefined') {
          // Apply persisted theme on hydration
          const { theme, language, fontSize, animations, reducedMotion } = state
          
          const root = window.document.documentElement
          
          // Apply theme
          if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
              ? 'dark' 
              : 'light'
            root.classList.add(systemTheme)
          } else {
            root.classList.add(theme)
          }
          
          // Apply language
          document.documentElement.lang = language
          
          // Apply font size
          root.classList.add(`text-${fontSize}`)
          
          // Apply animations
          if (!animations) {
            root.classList.add('no-animations')
          }
          
          // Apply reduced motion
          if (reducedMotion) {
            root.classList.add('reduce-motion')
          }
        }
      }
    }
  )
)

// Selectors for easier state access
export const themeSelectors = {
  theme: (state: ThemeStore) => state.theme,
  language: (state: ThemeStore) => state.language,
  sidebarCollapsed: (state: ThemeStore) => state.sidebarCollapsed,
  fontSize: (state: ThemeStore) => state.fontSize,
  animations: (state: ThemeStore) => state.animations,
  reducedMotion: (state: ThemeStore) => state.reducedMotion,
  isDark: (state: ThemeStore) => {
    if (state.theme === 'dark') return true
    if (state.theme === 'light') return false
    // For system theme, check media query
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  }
}

// Helper hooks
export const useTheme = () => {
  const store = useThemeStore()
  return {
    theme: store.theme,
    language: store.language,
    sidebarCollapsed: store.sidebarCollapsed,
    fontSize: store.fontSize,
    animations: store.animations,
    reducedMotion: store.reducedMotion,
    isDark: themeSelectors.isDark(store),
    setTheme: store.setTheme,
    setLanguage: store.setLanguage,
    toggleSidebar: store.toggleSidebar,
    setSidebarCollapsed: store.setSidebarCollapsed,
    setFontSize: store.setFontSize,
    setAnimations: store.setAnimations,
    setReducedMotion: store.setReducedMotion,
    resetToDefaults: store.resetToDefaults
  }
}

export const useCurrentTheme = () => useThemeStore(themeSelectors.theme)
export const useCurrentLanguage = () => useThemeStore(themeSelectors.language)
export const useIsDarkTheme = () => useThemeStore(themeSelectors.isDark)
export const useSidebarCollapsed = () => useThemeStore(themeSelectors.sidebarCollapsed)