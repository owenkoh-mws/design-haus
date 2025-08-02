'use client'

export function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-950 dark:via-neutral-950 dark:to-accent-950 py-16 md:py-24">
      <div className="container-design-haus">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="design-haus-heading text-4xl md:text-6xl font-semibold mb-6">
            우리의 이야기
          </h1>
          <p className="design-haus-text text-lg text-primary-600 dark:text-primary-400 leading-relaxed">
            Design Haus는 2019년 창립 이래 브랜드의 본질을 탐구하고, 창의적인 솔루션으로 
            고객의 비전을 현실화하는 디자인 스튜디오입니다. 우리는 디자인이 단순한 장식이 아닌, 
            브랜드와 사용자를 연결하는 강력한 소통의 도구라고 믿습니다.
          </p>
        </div>
      </div>
    </section>
  )
}