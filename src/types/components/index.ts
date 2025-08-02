// Component Types - Design Haus
// Type definitions for component props and states

import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

// Base component types
export interface BaseProps {
  className?: string
  children?: ReactNode
}

// Button types
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

// Input types
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

// Card types
export interface CardProps extends BaseProps {
  title?: string
  description?: string
  image?: string
  footer?: ReactNode
  hoverable?: boolean
}

// Modal types
export interface ModalProps extends BaseProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

// Navigation types
export interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: ReactNode
  badge?: string
  children?: NavigationItem[]
  isActive?: boolean
  isDisabled?: boolean
}

export interface NavigationProps extends BaseProps {
  items: NavigationItem[]
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'pills' | 'underline'
}

// Layout types
export interface ContainerProps extends BaseProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padding?: boolean
}

export interface GridProps extends BaseProps {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  responsive?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
}

// Form types
export interface FormFieldProps {
  name: string
  label?: string
  error?: string
  required?: boolean
  children: ReactNode
}

export interface FormProps extends BaseProps {
  onSubmit: (data: any) => void | Promise<void>
  loading?: boolean
  errors?: Record<string, string>
}

// Table types
export interface TableColumn<T = any> {
  key: keyof T | string
  title: string
  width?: string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  render?: (value: any, record: T, index: number) => ReactNode
}

export interface TableProps<T = any> extends BaseProps {
  data: T[]
  columns: TableColumn<T>[]
  loading?: boolean
  pagination?: {
    current: number
    pageSize: number
    total: number
    onChange: (page: number) => void
  }
  onSort?: (column: string, direction: 'asc' | 'desc') => void
}

// Pagination types
export interface PaginationProps extends BaseProps {
  current: number
  total: number
  pageSize: number
  onChange: (page: number) => void
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  showTotal?: (total: number, range: [number, number]) => ReactNode
}

// Search types
export interface SearchProps extends BaseProps {
  value?: string
  placeholder?: string
  loading?: boolean
  suggestions?: string[]
  onSearch: (value: string) => void
  onSuggestionClick?: (suggestion: string) => void
}

// Filter types
export interface FilterOption {
  label: string
  value: string | number
  count?: number
}

export interface FilterProps extends BaseProps {
  title: string
  options: FilterOption[]
  value?: (string | number)[]
  multiple?: boolean
  searchable?: boolean
  onChange: (value: (string | number)[] | string | number) => void
}

// Breadcrumb types
export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: ReactNode
}

export interface BreadcrumbProps extends BaseProps {
  items: BreadcrumbItem[]
  separator?: ReactNode
}

// Avatar types
export interface AvatarProps extends BaseProps {
  src?: string
  alt?: string
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'circular' | 'rounded' | 'square'
  fallbackIcon?: ReactNode
}

// Badge types
export interface BadgeProps extends BaseProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean
}

// Tooltip types
export interface TooltipProps extends BaseProps {
  content: ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right'
  trigger?: 'hover' | 'click' | 'focus'
  delay?: number
}

// Toast types
export interface Toast {
  id: string
  title?: string
  description: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

export interface ToastProps extends Toast {
  onClose: () => void
}

// Loading types
export interface LoadingProps extends BaseProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars'
  text?: string
}

// Empty state types
export interface EmptyStateProps extends BaseProps {
  title: string
  description?: string
  icon?: ReactNode
  action?: {
    label: string
    onClick: () => void
  }
}

// Section types
export interface SectionProps extends BaseProps {
  title?: string
  subtitle?: string
  background?: 'white' | 'gray' | 'primary' | 'transparent'
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
}

// Magazine specific component types
export interface ArticleCardProps extends BaseProps {
  article: {
    id: string
    title: string
    excerpt: string
    featuredImage: string
    author: {
      name: string
      avatar: string
    }
    category: {
      name: string
      slug: string
    }
    publishedAt: string
    readTime: number
  }
  variant?: 'default' | 'featured' | 'compact'
}

// Shopping specific component types
export interface ProductCardProps extends BaseProps {
  product: {
    id: string
    name: string
    price: number
    originalPrice?: number
    images: string[]
    rating: {
      average: number
      count: number
    }
    badge?: string
  }
  variant?: 'default' | 'compact' | 'wide'
  showQuickActions?: boolean
}

export interface CartItemProps extends BaseProps {
  item: {
    id: string
    product: {
      id: string
      name: string
      image: string
      price: number
    }
    quantity: number
    options: Record<string, any>
  }
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

// Portfolio specific component types
export interface ProjectCardProps extends BaseProps {
  project: {
    id: string
    title: string
    description: string
    featuredImage: string
    category: {
      name: string
      slug: string
    }
    technologies: string[]
    completedAt: string
  }
  variant?: 'default' | 'featured' | 'compact'
}