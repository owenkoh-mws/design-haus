/**
 * Design Haus Design System
 * Complete design tokens, constants, and utilities
 */

/* ================================
   DESIGN TOKENS
   ================================ */

export const designTokens = {
  /* Colors */
  colors: {
    primary: {
      50: '#f8fafc',   // slate-50
      100: '#f1f5f9',  // slate-100
      200: '#e2e8f0',  // slate-200
      300: '#cbd5e1',  // slate-300
      400: '#94a3b8',  // slate-400
      500: '#64748b',  // slate-500
      600: '#475569',  // slate-600
      700: '#334155',  // slate-700
      800: '#1e293b',  // slate-800
      900: '#0f172a',  // slate-900
      950: '#020617',  // slate-950
    },
    secondary: {
      50: '#fafaf9',   // stone-50
      100: '#f5f5f4',  // stone-100
      200: '#e7e5e4',  // stone-200
      300: '#d6d3d1',  // stone-300
      400: '#a8a29e',  // stone-400
      500: '#78716c',  // stone-500
      600: '#57534e',  // stone-600
      700: '#44403c',  // stone-700
      800: '#292524',  // stone-800
      900: '#1c1917',  // stone-900
      950: '#0c0a09',  // stone-950
    },
    accent: {
      50: '#fef7ff',   // fuchsia-50
      100: '#fdf4ff',  // fuchsia-100
      200: '#fae8ff',  // fuchsia-200
      300: '#f0abfc',  // fuchsia-300
      400: '#e879f9',  // fuchsia-400
      500: '#d946ef',  // fuchsia-500
      600: '#c026d3',  // fuchsia-600
      700: '#a21caf',  // fuchsia-700
      800: '#86198f',  // fuchsia-800
      900: '#701a75',  // fuchsia-900
      950: '#4a044e',  // fuchsia-950
    },
    neutral: {
      50: '#fafafa',   // neutral-50
      100: '#f5f5f5',  // neutral-100
      200: '#e5e5e5',  // neutral-200
      300: '#d4d4d4',  // neutral-300
      400: '#a3a3a3',  // neutral-400
      500: '#737373',  // neutral-500
      600: '#525252',  // neutral-600
      700: '#404040',  // neutral-700
      800: '#262626',  // neutral-800
      900: '#171717',  // neutral-900
      950: '#0a0a0a',  // neutral-950
    },
    semantic: {
      success: { 50: '#f0fdf4', 500: '#22c55e', 600: '#16a34a', 700: '#15803d' },
      warning: { 50: '#fffbeb', 500: '#f59e0b', 600: '#d97706', 700: '#b45309' },
      error: { 50: '#fef2f2', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c' },
      info: { 50: '#eff6ff', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8' },
    },
  },

  /* Typography */
  typography: {
    fontFamily: {
      primary: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      secondary: ['Space Grotesk', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
      display: ['Clash Display', 'Inter', 'system-ui', 'sans-serif'],
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
      '8xl': '6rem',     // 96px
      '9xl': '8rem',     // 128px
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  /* Spacing */
  spacing: {
    px: '1px',
    0: '0px',
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px
    7: '1.75rem',    // 28px
    8: '2rem',       // 32px
    9: '2.25rem',    // 36px
    10: '2.5rem',    // 40px
    12: '3rem',      // 48px
    14: '3.5rem',    // 56px
    16: '4rem',      // 64px
    18: '4.5rem',    // 72px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
    28: '7rem',      // 112px
    32: '8rem',      // 128px
    36: '9rem',      // 144px
    40: '10rem',     // 160px
    44: '11rem',     // 176px
    48: '12rem',     // 192px
    52: '13rem',     // 208px
    56: '14rem',     // 224px
    60: '15rem',     // 240px
    64: '16rem',     // 256px
    72: '18rem',     // 288px
    80: '20rem',     // 320px
    96: '24rem',     // 384px
  },

  /* Border Radius */
  borderRadius: {
    none: '0',
    xs: '0.125rem',   // 2px
    sm: '0.25rem',    // 4px
    default: '0.375rem', // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    '4xl': '2.5rem',  // 40px
    '5xl': '3rem',    // 48px
    full: '9999px',
  },

  /* Shadows */
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    default: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '2xl': '0 50px 100px -20px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
    // Design Haus Custom
    soft: '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
    medium: '0 4px 25px 0 rgba(0, 0, 0, 0.1)',
    hard: '0 10px 40px 0 rgba(0, 0, 0, 0.15)',
    glow: '0 0 20px rgba(217, 70, 239, 0.15)',
    glowLg: '0 0 40px rgba(217, 70, 239, 0.2)',
  },

  /* Breakpoints */
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  /* Z-Index */
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    modal: 1000,
    popover: 1010,
    tooltip: 1020,
    toast: 1030,
  },

  /* Transitions */
  transitions: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      elastic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
  },
} as const;

/* ================================
   COMPONENT VARIANTS
   ================================ */

export const componentVariants = {
  button: {
    size: {
      small: 'px-3 py-2 text-sm',
      default: 'px-4 py-2.5 text-sm',
      large: 'px-6 py-3 text-base',
    },
    variant: {
      primary: 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-sm hover:shadow-glow',
      secondary: 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700',
      ghost: 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800',
      outline: 'border border-accent-500 text-accent-600 hover:bg-accent-50 dark:hover:bg-accent-950',
    },
  },
  input: {
    size: {
      small: 'px-3 py-2 text-sm',
      default: 'px-3.5 py-2.5 text-sm',
      large: 'px-4 py-3 text-base',
    },
    variant: {
      default: 'border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:border-accent-500 focus:ring-accent-500/10',
      error: 'border border-error-500 bg-white dark:bg-neutral-800 focus:border-error-500 focus:ring-error-500/10',
      success: 'border border-success-500 bg-white dark:bg-neutral-800 focus:border-success-500 focus:ring-success-500/10',
    },
  },
  card: {
    variant: {
      default: 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm',
      elevated: 'bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl',
      glass: 'backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10',
    },
    padding: {
      none: 'p-0',
      small: 'p-4',
      default: 'p-6',
      large: 'p-8',
    },
  },
  text: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      primary: 'text-neutral-900 dark:text-neutral-100',
      secondary: 'text-neutral-700 dark:text-neutral-300',
      muted: 'text-neutral-500 dark:text-neutral-400',
      accent: 'text-accent-600 dark:text-accent-400',
      success: 'text-success-600 dark:text-success-400',
      warning: 'text-warning-600 dark:text-warning-400',
      error: 'text-error-600 dark:text-error-400',
    },
  },
} as const;

/* ================================
   UTILITY CLASSES
   ================================ */

export const utilityClasses = {
  // Aspect ratios
  aspectRatio: {
    square: 'aspect-square',
    video: 'aspect-video',
    photo: 'aspect-[4/3]',
    portrait: 'aspect-[3/4]',
    ultrawide: 'aspect-[21/9]',
  },

  // Animations
  animations: {
    fadeIn: 'animate-fade-in',
    fadeInUp: 'animate-fade-in-up',
    fadeInDown: 'animate-fade-in-down',
    slideInLeft: 'animate-slide-in-left',
    slideInRight: 'animate-slide-in-right',
    scaleIn: 'animate-scale-in',
    float: 'animate-float',
    glow: 'animate-glow',
    wiggle: 'animate-wiggle',
    shimmer: 'animate-shimmer',
  },

  // Layout
  layout: {
    container: 'container-design-haus',
    grid: 'grid-design-haus',
    flexCenter: 'flex-center',
    flexBetween: 'flex-between',
  },

  // Spacing
  spacing: {
    section: 'py-16 md:py-24',
    sectionSm: 'py-12 md:py-16',
    sectionLg: 'py-20 md:py-32',
  },

  // Visual effects
  effects: {
    glass: 'glass-effect',
    glassStrong: 'glass-effect-strong',
    blur: 'backdrop-blur-md',
    gradient: 'bg-gradient-brand',
    gradientText: 'bg-gradient-to-r from-primary-700 to-accent-500 bg-clip-text text-transparent',
  },
} as const;

/* ================================
   TYPE DEFINITIONS
   ================================ */

export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

export type ComponentSize = 'small' | 'default' | 'large';
export type ComponentVariant = string;

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type InputVariant = 'default' | 'error' | 'success';
export type CardVariant = 'default' | 'elevated' | 'glass';
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'warning' | 'error';

export type DesignToken = typeof designTokens;
export type ComponentVariants = typeof componentVariants;
export type UtilityClasses = typeof utilityClasses;

/* ================================
   HELPER FUNCTIONS
   ================================ */

/**
 * Get a design token value by path
 */
export function getToken(path: string): string | number | undefined {
  const keys = path.split('.');
  let value: any = designTokens;
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value;
}

/**
 * Generate component classes
 */
export function getComponentClasses(
  component: keyof ComponentVariants,
  variant?: string,
  size?: string,
  additionalClasses?: string
): string {
  const componentConfig = componentVariants[component];
  const classes: string[] = [];
  
  if (size && 'size' in componentConfig) {
    classes.push(componentConfig.size[size as keyof typeof componentConfig.size] || '');
  }
  
  if (variant && 'variant' in componentConfig) {
    classes.push(componentConfig.variant[variant as keyof typeof componentConfig.variant] || '');
  }
  
  if (additionalClasses) {
    classes.push(additionalClasses);
  }
  
  return classes.filter(Boolean).join(' ');
}

/**
 * Generate responsive classes
 */
export function responsive(classes: Record<string, string>): string {
  return Object.entries(classes)
    .map(([breakpoint, className]) => {
      if (breakpoint === 'default') return className;
      return `${breakpoint}:${className}`;
    })
    .join(' ');
}

/**
 * Design Haus brand utilities
 */
export const brandUtils = {
  gradients: {
    primary: 'bg-gradient-primary',
    accent: 'bg-gradient-accent',
    brand: 'bg-gradient-brand',
    text: 'gradient-text',
  },
  typography: {
    heading: 'design-haus-heading',
    subheading: 'design-haus-subheading',
    text: 'design-haus-text',
  },
  components: {
    card: 'design-haus-card',
    button: 'design-haus-button',
    input: 'design-haus-input',
  },
  effects: {
    glass: 'glass-effect',
    glassStrong: 'glass-effect-strong',
    hover: {
      lift: 'hover-lift',
      scale: 'hover-scale',
      glow: 'hover-glow',
      float: 'hover-float',
    },
  },
} as const;

export default {
  designTokens,
  componentVariants,
  utilityClasses,
  getToken,
  getComponentClasses,
  responsive,
  brandUtils,
};