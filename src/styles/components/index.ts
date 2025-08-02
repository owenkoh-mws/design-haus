// Component Styles - Design Haus
// Shared component styles and CSS-in-JS utilities

// Button styles
export const buttonStyles = {
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  
  variants: {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
  },
  
  sizes: {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8',
    xl: 'h-12 px-10 text-lg'
  }
}

// Card styles
export const cardStyles = {
  base: 'rounded-lg border bg-card text-card-foreground shadow-sm',
  header: 'flex flex-col space-y-1.5 p-6',
  title: 'text-2xl font-semibold leading-none tracking-tight',
  description: 'text-sm text-muted-foreground',
  content: 'p-6 pt-0',
  footer: 'flex items-center p-6 pt-0'
}

// Input styles
export const inputStyles = {
  base: 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  label: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  error: 'text-sm font-medium text-destructive',
  helperText: 'text-sm text-muted-foreground'
}

// Badge styles
export const badgeStyles = {
  base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  
  variants: {
    default: 'bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    outline: 'border border-input'
  }
}

// Loading styles
export const loadingStyles = {
  spinner: 'animate-spin rounded-full border-2 border-current border-t-transparent',
  dots: 'flex space-x-1',
  dot: 'h-2 w-2 bg-current rounded-full animate-bounce',
  pulse: 'animate-pulse bg-muted rounded',
  
  sizes: {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }
}

// Navigation styles
export const navigationStyles = {
  base: 'flex items-center justify-between w-full',
  list: 'flex items-center space-x-6',
  item: 'text-sm font-medium transition-colors hover:text-primary',
  activeItem: 'text-primary',
  disabledItem: 'text-muted-foreground cursor-not-allowed'
}

// Layout styles
export const layoutStyles = {
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-16 lg:py-24',
  grid: {
    base: 'grid gap-6',
    cols1: 'grid-cols-1',
    cols2: 'grid-cols-1 md:grid-cols-2',
    cols3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }
}

// Form styles
export const formStyles = {
  group: 'space-y-2',
  field: 'space-y-1',
  fieldset: 'space-y-4',
  legend: 'text-lg font-semibold',
  actions: 'flex items-center justify-end space-x-2 pt-4'
}

// Animation classes
export const animationStyles = {
  fadeIn: 'animate-in fade-in duration-200',
  fadeOut: 'animate-out fade-out duration-200',
  slideIn: 'animate-in slide-in-from-bottom duration-300',
  slideOut: 'animate-out slide-out-to-bottom duration-300',
  scaleIn: 'animate-in zoom-in-95 duration-200',
  scaleOut: 'animate-out zoom-out-95 duration-200'
}

// Design Haus specific styles
export const designHausStyles = {
  // Magazine specific
  magazine: {
    articleCard: 'group cursor-pointer transition-all duration-300 hover:shadow-lg',
    articleTitle: 'text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors',
    articleExcerpt: 'text-muted-foreground line-clamp-3',
    articleMeta: 'flex items-center space-x-4 text-sm text-muted-foreground',
    categoryBadge: 'bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium'
  },
  
  // Shopping specific
  shopping: {
    productCard: 'group relative overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg',
    productImage: 'aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105',
    productTitle: 'font-semibold line-clamp-2 group-hover:text-primary transition-colors',
    productPrice: 'text-lg font-bold text-primary',
    originalPrice: 'text-sm text-muted-foreground line-through',
    discountBadge: 'absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium',
    rating: 'flex items-center space-x-1 text-sm text-muted-foreground'
  },
  
  // Portfolio specific
  portfolio: {
    projectCard: 'group relative overflow-hidden rounded-lg bg-card transition-all duration-300 hover:shadow-xl',
    projectImage: 'aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110',
    projectOverlay: 'absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
    projectContent: 'absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0',
    projectTitle: 'text-xl font-bold mb-2',
    projectDescription: 'text-sm opacity-90 line-clamp-2',
    techStack: 'flex flex-wrap gap-1 mt-2',
    techBadge: 'bg-white/20 text-white px-2 py-1 rounded text-xs'
  }
}

// Utility function to combine classes
export const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ')
}