import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-[#5e6ad2] text-white hover:bg-[#5e6ad2]/90 shadow-[0_0_20px_rgba(94,106,210,0.3)]': variant === 'primary',
            'bg-[#151617] text-white hover:bg-[#1a1b1d] border border-white/10': variant === 'secondary',
            'border border-white/10 bg-transparent hover:bg-[#151617] text-white': variant === 'outline',
            'text-white/70 hover:bg-[#151617] hover:text-white': variant === 'ghost',
          },
          {
            'h-9 px-3 text-xs': size === 'sm',
            'h-10 px-4 py-2': size === 'md',
            'h-11 px-8': size === 'lg',
            'h-12 px-10': size === 'xl',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }