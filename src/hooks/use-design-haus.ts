'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useDesignHaus() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Design Haus specific theme utilities
  const isLightMode = mounted && theme === 'light'
  const isDarkMode = mounted && theme === 'dark'
  const isSystemMode = mounted && theme === 'system'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const setLightMode = () => setTheme('light')
  const setDarkMode = () => setTheme('dark')
  const setSystemMode = () => setTheme('system')

  // Design Haus brand colors based on theme
  const brandColors = {
    primary: isLightMode ? 'rgb(100, 116, 139)' : 'rgb(148, 163, 184)',
    accent: 'rgb(244, 85, 255)',
    background: isLightMode ? 'rgb(255, 255, 255)' : 'rgb(2, 6, 23)',
    foreground: isLightMode ? 'rgb(15, 23, 42)' : 'rgb(248, 250, 252)',
  }

  return {
    // Theme state
    theme,
    mounted,
    isLightMode,
    isDarkMode,
    isSystemMode,
    
    // Theme actions
    setTheme,
    toggleTheme,
    setLightMode,
    setDarkMode,
    setSystemMode,
    
    // Brand utilities
    brandColors,
    
    // Animation state
    animateIn: mounted,
  }
}