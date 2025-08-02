'use client'

export function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-accent-50 via-white to-primary-50 dark:from-accent-950 dark:via-neutral-950 dark:to-primary-950 py-16 md:py-24">
      <div className="container-design-haus">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="design-haus-heading text-4xl md:text-6xl font-semibold mb-6">
            함께 만들어가요
          </h1>
          <p className="design-haus-text text-lg text-primary-600 dark:text-primary-400 leading-relaxed">
            당신의 브랜드 이야기를 들려주세요. Design Haus가 창의적인 솔루션으로 
            여러분의 비전을 현실화해드리겠습니다. 프로젝트 문의부터 간단한 질문까지, 
            언제든 연락주시면 성심껏 답변드리겠습니다.
          </p>
        </div>
      </div>
    </section>
  )
}