import { Metadata } from 'next'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact - Design Haus',
  description: 'Design Haus와 함께 프로젝트를 시작해보세요. 문의사항이나 상담 요청을 남겨주시면 빠른 시일 내에 연락드리겠습니다.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <ContactHero />
      
      <div className="container-design-haus py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  )
}