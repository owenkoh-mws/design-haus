'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff, Mail, Lock, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/utils/helpers/cn'
import type { LoginFormData } from '@/types/auth'

// Validation schema
const loginSchema = z.object({
  email: z
    .string()
    .min(1, '이메일을 입력해주세요')
    .email('올바른 이메일 형식을 입력해주세요'),
  password: z
    .string()
    .min(1, '비밀번호를 입력해주세요')
    .min(6, '비밀번호는 최소 6자 이상이어야 합니다'),
  rememberMe: z.boolean().optional(),
})

type LoginFormValues = z.infer<typeof loginSchema>

interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => Promise<void>
  isLoading?: boolean
  className?: string
}

export function LoginForm({ onSubmit, isLoading = false, className }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const handleFormSubmit = async (data: LoginFormValues) => {
    try {
      setSubmitError(null)
      
      if (onSubmit) {
        await onSubmit(data)
      } else {
        // Mock login for demo purposes
        console.log('Login attempt:', { email: data.email, rememberMe: data.rememberMe })
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Mock success
        alert('로그인 성공! (데모)')
        reset()
      }
    } catch (error) {
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : '로그인 중 오류가 발생했습니다. 다시 시도해주세요.'
      )
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const isFormLoading = isLoading || isSubmitting

  return (
    <form 
      onSubmit={handleSubmit(handleFormSubmit)} 
      className={cn('space-y-6', className)}
      noValidate
    >
      {/* Email Input */}
      <Input
        {...register('email')}
        type="email"
        label="이메일"
        placeholder="이메일을 입력하세요"
        startIcon={<Mail size={16} />}
        error={errors.email?.message}
        disabled={isFormLoading}
        autoComplete="email"
        className={cn(
          'transition-all duration-200',
          errors.email && 'animate-wiggle'
        )}
      />

      {/* Password Input */}
      <Input
        {...register('password')}
        type={showPassword ? 'text' : 'password'}
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        startIcon={<Lock size={16} />}
        endIcon={
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={cn(
              'p-1 rounded transition-colors',
              'hover:bg-neutral-100 dark:hover:bg-neutral-800',
              'focus:outline-none focus:ring-2 focus:ring-accent-500/20',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
            disabled={isFormLoading}
            tabIndex={-1}
            aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        }
        error={errors.password?.message}
        disabled={isFormLoading}
        autoComplete="current-password"
        className={cn(
          'transition-all duration-200',
          errors.password && 'animate-wiggle'
        )}
      />

      {/* Remember Me Checkbox */}
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            {...register('rememberMe')}
            type="checkbox"
            disabled={isFormLoading}
            className={cn(
              'w-4 h-4 rounded border-2 border-neutral-300 dark:border-neutral-600',
              'text-accent-500 focus:ring-accent-500/20 focus:ring-2',
              'transition-all duration-200 checkbox-animate',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          />
          <span className="text-sm text-neutral-700 dark:text-neutral-300">
            로그인 상태 유지
          </span>
        </label>

        <button
          type="button"
          className={cn(
            'text-sm text-accent-600 dark:text-accent-400',
            'hover:underline focus:underline focus:outline-none',
            'transition-colors duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
          disabled={isFormLoading}
        >
          비밀번호 찾기
        </button>
      </div>

      {/* Submit Error */}
      {submitError && (
        <div className={cn(
          'p-4 rounded-lg bg-error-50 dark:bg-error-950/50',
          'border border-error-200 dark:border-error-800',
          'animate-fade-in-up'
        )}>
          <p className="text-sm text-error-700 dark:text-error-300">
            {submitError}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        size="lg"
        disabled={isFormLoading}
        className={cn(
          'w-full design-haus-button primary transition-all duration-200',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          !isFormLoading && 'hover-lift active:scale-98'
        )}
      >
        {isFormLoading ? (
          <>
            <Loader2 size={16} className="animate-spin mr-2" />
            로그인 중...
          </>
        ) : (
          '로그인'
        )}
      </Button>

      {/* Additional Options */}
      <div className="text-center pt-4">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          소셜 로그인은 곧 지원될 예정입니다
        </p>
      </div>
    </form>
  )
}