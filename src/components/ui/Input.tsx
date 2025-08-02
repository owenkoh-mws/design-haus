import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      error,
      helperText,
      startIcon,
      endIcon,
      size = 'md',
      id,
      placeholder,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-')

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-2 transition-colors',
              error
                ? 'text-error-600 dark:text-error-400'
                : 'text-neutral-700 dark:text-neutral-300'
            )}
          >
            {label}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Start Icon */}
          {startIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
              {startIcon}
            </div>
          )}

          {/* Input */}
          <input
            type={type}
            id={inputId}
            ref={ref}
            placeholder={placeholder}
            className={cn(
              'flex h-10 w-full rounded-md border border-white/10 bg-[#151617] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 disabled:cursor-not-allowed disabled:opacity-50',
              {
                'pl-10': startIcon,
                'pr-10': endIcon,
                'h-9 px-3 text-sm': size === 'sm',
                'h-11 px-4 text-sm': size === 'md',
                'h-12 px-6 text-base': size === 'lg',
              },
              error && [
                'border-red-500',
                'focus:border-red-500',
                'focus:ring-red-500/20',
              ],
              className
            )}
            {...props}
          />

          {/* End Icon */}
          {endIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
              {endIcon}
            </div>
          )}
        </div>

        {/* Helper Text / Error Message */}
        {(error || helperText) && (
          <p
            className={cn(
              'mt-2 text-sm',
              error
                ? 'text-error-600 dark:text-error-400 animate-fade-in-up'
                : 'text-neutral-600 dark:text-neutral-400'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }