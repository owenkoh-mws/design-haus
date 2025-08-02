import { Metadata } from 'next'
import { ShopHero } from '@/components/shop/ShopHero'
import { ProductGrid } from '@/components/shop/ProductGrid'
import { ProductFilters } from '@/components/shop/ProductFilters'

export const metadata: Metadata = {
  title: 'Shop - Design Haus',
  description: 'Design Haus에서 제작한 디자인 템플릿, 브랜드 키트, 교육 콘텐츠 등을 구매하세요. 고품질 디자인 자료를 합리적인 가격에 만나보실 수 있습니다.',
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Shop hero */}
      <ShopHero />

      <div className="container-design-haus py-12">
        {/* Filters */}
        <ProductFilters />

        {/* Product grid */}
        <ProductGrid />
      </div>
    </main>
  )
}