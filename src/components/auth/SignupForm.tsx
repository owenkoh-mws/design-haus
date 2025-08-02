'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff, Mail, Lock, User, Loader2, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/utils/helpers/cn'
import type { SignupFormData, PasswordRequirements } from '@/types/auth'

// Validation schema
const signupSchema = z.object({
  name: z
    .string()
    .min(1, '이름을 입력해주세요')
    .min(2, '이름은 최소 2자 이상이어야 합니다')
    .max(50, '이름은 50자를 초과할 수 없습니다')
    .regex(/^[가-힣a-zA-Z\s]+$/, '이름은 한글, 영문, 공백만 사용 가능합니다'),
  email: z
    .string()
    .min(1, '이메일을 입력해주세요')
    .email('올바른 이메일 형식을 입력해주세요'),
  password: z
    .string()
    .min(1, '비밀번호를 입력해주세요')
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
    .regex(/[A-Z]/, '대문자를 최소 1개 포함해야 합니다')
    .regex(/[a-z]/, '소문자를 최소 1개 포함해야 합니다')
    .regex(/[0-9]/, '숫자를 최소 1개 포함해야 합니다')
    .regex(/[^A-Za-z0-9]/, '특수문자를 최소 1개 포함해야 합니다'),
  confirmPassword: z
    .string()
    .min(1, '비밀번호 확인을 입력해주세요'),
  acceptTerms: z
    .boolean()
    .refine(val => val === true, '이용약관과 개인정보처리방침에 동의해주세요'),
}).refine((data) => data.password === data.confirmPassword, {
  message: '비밀번호가 일치하지 않습니다',
  path: ['confirmPassword'],
})

type SignupFormValues = z.infer<typeof signupSchema>

interface SignupFormProps {
  onSubmit?: (data: SignupFormData) => Promise<void>
  isLoading?: boolean
  className?: string
}

export function SignupForm({ onSubmit, isLoading = false, className }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
    mode: 'onChange',
  })

  // Watch password for real-time validation
  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  // Password strength checker
  const getPasswordRequirements = (password: string): PasswordRequirements => ({
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[^A-Za-z0-9]/.test(password),
  })

  const passwordRequirements = getPasswordRequirements(password || '')
  const passwordStrength = Object.values(passwordRequirements).filter(Boolean).length

  const handleFormSubmit = async (data: SignupFormValues) => {
    try {
      setSubmitError(null)
      
      if (onSubmit) {
        await onSubmit(data)
      } else {
        // Mock signup for demo purposes
        console.log('Signup attempt:', { 
          name: data.name, 
          email: data.email,
          acceptTerms: data.acceptTerms 
        })
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Mock success
        alert('회원가입 성공! (데모)')
        reset()
      }
    } catch (error) {
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : '회원가입 중 오류가 발생했습니다. 다시 시도해주세요.'
      )
    }
  }

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    if (field === 'password') {
      setShowPassword(!showPassword)
    } else {
      setShowConfirmPassword(!showConfirmPassword)
    }
  }

  const isFormLoading = isLoading || isSubmitting

  return (
    <form 
      onSubmit={handleSubmit(handleFormSubmit)} 
      className={cn('space-y-6', className)}
      noValidate
    >
      {/* Name Input */}
      <Input
        {...register('name')}
        type="text"
        label="이름"
        placeholder="이름을 입력하세요"
        startIcon={<User size={16} />}
        error={errors.name?.message}
        disabled={isFormLoading}
        autoComplete="name"
        className={cn(
          'transition-all duration-200',
          errors.name && 'animate-wiggle'
        )}
      />

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
      <div className="space-y-3">
        <Input
          {...register('password')}
          type={showPassword ? 'text' : 'password'}
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          startIcon={<Lock size={16} />}
          endIcon={
            <button
              type="button"
              onClick={() => togglePasswordVisibility('password')}
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
          autoComplete="new-password"
          className={cn(
            'transition-all duration-200',
            errors.password && 'animate-wiggle'
          )}
        />

        {/* Password Strength Indicator */}
        {password && (
          <div className="space-y-3 animate-fade-in-up">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-neutral-600 dark:text-neutral-400">
                  비밀번호 강도
                </span>
                <span className={cn(
                  'text-xs font-medium',
                  passwordStrength <= 2 && 'text-error-600 dark:text-error-400',
                  passwordStrength === 3 && 'text-warning-600 dark:text-warning-400',
                  passwordStrength === 4 && 'text-warning-600 dark:text-warning-400',
                  passwordStrength === 5 && 'text-success-600 dark:text-success-400'
                )}>
                  {passwordStrength <= 2 && '약함'}
                  {passwordStrength === 3 && '보통'}
                  {passwordStrength === 4 && '강함'}
                  {passwordStrength === 5 && '매우 강함'}
                </span>
              </div>
              
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 overflow-hidden">
                <div 
                  className={cn(
                    'h-full transition-all duration-300 rounded-full',
                    passwordStrength <= 2 && 'bg-error-500 w-2/5',
                    passwordStrength === 3 && 'bg-warning-500 w-3/5',
                    passwordStrength === 4 && 'bg-warning-500 w-4/5',
                    passwordStrength === 5 && 'bg-success-500 w-full'
                  )}
                />
              </div>
            </div>

            {/* Requirements Checklist */}
            <div className="grid grid-cols-1 gap-1 text-xs">
              {Object.entries({
                minLength: '8자 이상',
                hasUpperCase: '대문자 포함',
                hasLowerCase: '소문자 포함',
                hasNumber: '숫자 포함',
                hasSpecialChar: '특수문자 포함',
              }).map(([key, label]) => {
                const isMet = passwordRequirements[key as keyof PasswordRequirements]
                return (
                  <div key={key} className="flex items-center gap-2">
                    {isMet ? (
                      <Check size={12} className="text-success-600 dark:text-success-400" />
                    ) : (
                      <X size={12} className="text-neutral-400 dark:text-neutral-500" />
                    )}
                    <span className={cn(
                      'transition-colors',
                      isMet 
                        ? 'text-success-600 dark:text-success-400' 
                        : 'text-neutral-500 dark:text-neutral-400'
                    )}>
                      {label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Confirm Password Input */}
      <Input
        {...register('confirmPassword')}
        type={showConfirmPassword ? 'text' : 'password'}
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 입력하세요"
        startIcon={<Lock size={16} />}
        endIcon={
          <div className="flex items-center gap-1">
            {confirmPassword && password && (
              <div className={cn(
                'mr-1',
                confirmPassword === password 
                  ? 'text-success-600 dark:text-success-400' 
                  : 'text-error-600 dark:text-error-400'
              )}>
                {confirmPassword === password ? (
                  <Check size={16} />
                ) : (
                  <X size={16} />
                )}
              </div>
            )}
            <button
              type="button"
              onClick={() => togglePasswordVisibility('confirmPassword')}
              className={cn(
                'p-1 rounded transition-colors',
                'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                'focus:outline-none focus:ring-2 focus:ring-accent-500/20',
                'disabled:opacity-50 disabled:cursor-not-allowed'
              )}
              disabled={isFormLoading}
              tabIndex={-1}
              aria-label={showConfirmPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        }
        error={errors.confirmPassword?.message}
        disabled={isFormLoading}
        autoComplete="new-password"
        className={cn(
          'transition-all duration-200',
          errors.confirmPassword && 'animate-wiggle'
        )}
      />

      {/* Terms Acceptance */}
      <div className="space-y-4">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            {...register('acceptTerms')}
            type="checkbox"
            disabled={isFormLoading}
            className={cn(
              'w-4 h-4 mt-0.5 rounded border-2 border-neutral-300 dark:border-neutral-600',
              'text-accent-500 focus:ring-accent-500/20 focus:ring-2',
              'transition-all duration-200 checkbox-animate',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              errors.acceptTerms && 'border-error-500 dark:border-error-400'
            )}
          />
          <div className="text-sm">
            <span className="text-neutral-700 dark:text-neutral-300">
              <button
                type="button"
                className="text-accent-600 dark:text-accent-400 hover:underline focus:underline focus:outline-none"
              >
                이용약관
              </button>
              {' '}과{' '}
              <button
                type="button"
                className="text-accent-600 dark:text-accent-400 hover:underline focus:underline focus:outline-none"
              >
                개인정보처리방침
              </button>
              에 동의합니다
            </span>
            {errors.acceptTerms && (
              <p className="mt-1 text-error-600 dark:text-error-400 text-xs animate-fade-in-up">
                {errors.acceptTerms.message}
              </p>
            )}
          </div>
        </label>
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
            회원가입 중...
          </>
        ) : (
          '회원가입'
        )}
      </Button>

      {/* Additional Information */}
      <div className="text-center pt-4 space-y-2">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          회원가입을 완료하면 Design Haus의 모든 기능을 이용할 수 있습니다
        </p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          소셜 회원가입은 곧 지원될 예정입니다
        </p>
      </div>
    </form>
  )
}