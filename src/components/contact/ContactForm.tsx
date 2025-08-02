'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Send } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    alert('문의가 성공적으로 전송되었습니다!')
  }

  return (
    <div className="card-design-haus-elevated p-8">
      <h2 className="design-haus-heading text-2xl font-semibold mb-6">
        프로젝트 문의
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block design-haus-text text-sm font-medium mb-2">
              이름 *
            </label>
            <input
              type="text"
              required
              className="design-haus-input w-full"
              placeholder="홍길동"
            />
          </div>
          <div>
            <label className="block design-haus-text text-sm font-medium mb-2">
              이메일 *
            </label>
            <input
              type="email"
              required
              className="design-haus-input w-full"
              placeholder="hello@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block design-haus-text text-sm font-medium mb-2">
              회사명
            </label>
            <input
              type="text"
              className="design-haus-input w-full"
              placeholder="회사명을 입력하세요"
            />
          </div>
          <div>
            <label className="block design-haus-text text-sm font-medium mb-2">
              프로젝트 유형
            </label>
            <select className="design-haus-input w-full">
              <option>브랜딩</option>
              <option>웹 디자인</option>
              <option>모바일 앱</option>
              <option>이커머스</option>
              <option>컨설팅</option>
              <option>기타</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block design-haus-text text-sm font-medium mb-2">
            예산 범위
          </label>
          <select className="design-haus-input w-full">
            <option>1천만원 미만</option>
            <option>1천만원 - 3천만원</option>
            <option>3천만원 - 5천만원</option>
            <option>5천만원 - 1억원</option>
            <option>1억원 이상</option>
            <option>상담 후 결정</option>
          </select>
        </div>

        <div>
          <label className="block design-haus-text text-sm font-medium mb-2">
            프로젝트 상세 내용 *
          </label>
          <textarea
            required
            rows={5}
            className="design-haus-input w-full resize-none"
            placeholder="프로젝트에 대한 자세한 내용을 알려주세요..."
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full group"
        >
          {isSubmitting ? (
            '전송 중...'
          ) : (
            <>
              문의 보내기
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}