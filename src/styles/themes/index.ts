// Theme Styles - Design Haus
// Theme configurations and CSS custom properties

// Light theme configuration
export const lightTheme = {
  colors: {
    // Primary colors
    primary: '210 40% 98%',
    'primary-foreground': '222.2 84% 4.9%',
    
    // Secondary colors
    secondary: '210 40% 96%',
    'secondary-foreground': '222.2 47.4% 11.2%',
    
    // Accent colors
    accent: '210 40% 96%',
    'accent-foreground': '222.2 47.4% 11.2%',
    
    // Muted colors
    muted: '210 40% 96%',
    'muted-foreground': '215.4 16.3% 46.9%',
    
    // Background colors
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',
    
    // Card colors
    card: '0 0% 100%',
    'card-foreground': '222.2 84% 4.9%',
    
    // Popover colors
    popover: '0 0% 100%',
    'popover-foreground': '222.2 84% 4.9%',
    
    // Border and input
    border: '214.3 31.8% 91.4%',
    input: '214.3 31.8% 91.4%',
    ring: '222.2 84% 4.9%',
    
    // Status colors
    destructive: '0 84.2% 60.2%',
    'destructive-foreground': '210 40% 98%',
    
    success: '142.1 76.2% 36.3%',
    'success-foreground': '355.7 100% 97.3%',
    
    warning: '32.4 95.6% 50%',
    'warning-foreground': '355.7 100% 97.3%',
    
    info: '221.2 83.2% 53.3%',
    'info-foreground': '210 40% 98%'
  }
}

// Dark theme configuration
export const darkTheme = {
  colors: {
    // Primary colors
    primary: '210 40% 98%',
    'primary-foreground': '222.2 84% 4.9%',
    
    // Secondary colors
    secondary: '217.2 32.6% 17.5%',
    'secondary-foreground': '210 40% 98%',
    
    // Accent colors
    accent: '217.2 32.6% 17.5%',
    'accent-foreground': '210 40% 98%',
    
    // Muted colors
    muted: '217.2 32.6% 17.5%',
    'muted-foreground': '215 20.2% 65.1%',
    
    // Background colors
    background: '222.2 84% 4.9%',
    foreground: '210 40% 98%',
    
    // Card colors
    card: '222.2 84% 4.9%',
    'card-foreground': '210 40% 98%',
    
    // Popover colors
    popover: '222.2 84% 4.9%',
    'popover-foreground': '210 40% 98%',
    
    // Border and input
    border: '217.2 32.6% 17.5%',
    input: '217.2 32.6% 17.5%',
    ring: '212.7 26.8% 83.9%',
    
    // Status colors
    destructive: '0 62.8% 30.6%',
    'destructive-foreground': '210 40% 98%',
    
    success: '142.1 70.6% 45.3%',
    'success-foreground': '144.9 80.4% 10%',
    
    warning: '35.5 91.7% 32.9%',
    'warning-foreground': '20.5 90.2% 48.2%',
    
    info: '217.2 91.2% 59.8%',
    'info-foreground': '222.2 84% 4.9%'
  }
}

// Design Haus brand colors
export const brandColors = {
  // Primary brand palette
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  
  // Secondary palette
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a'
  },
  
  // Accent colors
  accent: {
    purple: '#8b5cf6',
    pink: '#ec4899',
    orange: '#f59e0b',
    green: '#10b981',
    red: '#ef4444'
  }
}

// Typography scale
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    serif: ['Georgia', 'serif'],
    mono: ['Monaco', 'Consolas', 'monospace']
  },
  
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }]
  },
  
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
  }
}

// Spacing scale
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem'
}

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: '0 0 #0000'
}

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px'
}

// Animation durations
export const animation = {
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms'
  },
  
  timing: {
    ease: 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    linear: 'linear'
  }
}

// CSS custom properties generator
export const generateCSSVariables = (theme: typeof lightTheme) => {
  const cssVars: Record<string, string> = {}
  
  Object.entries(theme.colors).forEach(([key, value]) => {
    cssVars[`--${key}`] = value
  })
  
  return cssVars
}

// Theme configuration
export const themeConfig = {
  light: lightTheme,
  dark: darkTheme,
  brand: brandColors,
  typography,
  spacing,
  breakpoints,
  shadows,
  borderRadius,
  animation
}