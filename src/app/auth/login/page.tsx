import { Metadata } from 'next'
import { LoginForm } from '@/components/auth/LoginForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Login - Design Haus',
  description: 'Design Haus 계정에 로그인하세요.',
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-950 dark:via-neutral-950 dark:to-secondary-950 flex items-center justify-center py-12">
      <div className="container-design-haus max-w-md">
        <div className="card-design-haus-elevated p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <h1 className="design-haus-heading text-2xl font-semibold">
                Design Haus
              </h1>
            </Link>
            <h2 className="design-haus-heading text-xl font-medium mb-2">
              로그인
            </h2>
            <p className="design-haus-text text-primary-600 dark:text-primary-400">
              계정에 로그인하여 더 많은 기능을 이용하세요
            </p>
          </div>

          {/* Login form */}
          <LoginForm />

          {/* Footer */}
          <div className="text-center mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
            <p className="design-haus-text text-sm text-primary-600 dark:text-primary-400">
              계정이 없으신가요?{' '}
              <Link 
                href="/auth/signup" 
                className="text-accent-600 dark:text-accent-400 hover:underline font-medium"
              >
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}