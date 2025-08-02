'use client'

import { Button } from '@/components/ui/Button'
import { ArrowRight, ShoppingBag, Star } from 'lucide-react'
import { shoppingData } from '@/data/mock-data/shopping'

export function ShopHero() {
  // Get featured products (first 3)
  const featuredProducts = shoppingData.products.slice(0, 3)

  return (
    <section className="relative bg-gradient-to-br from-accent-50 via-white to-primary-50 dark:from-accent-950 dark:via-neutral-950 dark:to-primary-950 py-16 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-accent-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-design-haus relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 px-4 py-2 rounded-full text-sm font-medium">
                <ShoppingBag className="w-4 h-4" />
                <span>Design Haus Shop</span>
              </div>
              
              <h1 className="design-haus-heading text-4xl md:text-6xl font-semibold leading-tight">
                프리미엄 디자인
                <br />
                <span className="bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">
                  에셋 스토어
                </span>
              </h1>
              
              <p className="design-haus-text text-lg text-primary-600 dark:text-primary-400 leading-relaxed">
                Design Haus에서 직접 제작한 고품질 디자인 템플릿, 브랜드 키트, 
                그리고 창의적인 디자인 에셋들을 만나보세요. 당신의 프로젝트를 
                한 단계 업그레이드할 수 있는 전문적인 도구들이 준비되어 있습니다.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="design-haus-heading text-2xl md:text-3xl font-semibold text-accent-600 dark:text-accent-400">
                  100+
                </div>
                <p className="design-haus-text text-sm text-primary-600 dark:text-primary-400">
                  디지털 에셋
                </p>
              </div>
              <div className="text-center">
                <div className="design-haus-heading text-2xl md:text-3xl font-semibold text-accent-600 dark:text-accent-400">
                  4.9
                </div>
                <p className="design-haus-text text-sm text-primary-600 dark:text-primary-400">
                  평균 평점
                </p>
              </div>
              <div className="text-center">
                <div className="design-haus-heading text-2xl md:text-3xl font-semibold text-accent-600 dark:text-accent-400">
                  2K+
                </div>
                <p className="design-haus-text text-sm text-primary-600 dark:text-primary-400">
                  만족한 고객
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                모든 제품 둘러보기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="ghost" size="lg">
                인기 제품 보기
              </Button>
            </div>
          </div>

          {/* Right content - Featured products */}
          <div className="grid grid-cols-1 gap-6">
            <div className="text-center mb-6">
              <h3 className="design-haus-heading text-xl font-semibold mb-2">
                이번 주 인기 상품
              </h3>
              <p className="design-haus-text text-primary-600 dark:text-primary-400">
                고객들이 가장 많이 선택한 프리미엄 에셋들
              </p>
            </div>

            <div className="space-y-4">
              {featuredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`card-design-haus-elevated p-4 hover-lift animate-fade-in-up stagger-${index + 1} group cursor-pointer`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Product image placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-800 dark:to-accent-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <div className="w-8 h-8 bg-accent-500 rounded-lg" />
                    </div>

                    {/* Product info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="design-haus-heading text-sm font-semibold truncate">
                        {product.name}
                      </h4>
                      <p className="design-haus-text text-xs text-primary-500 dark:text-primary-500 truncate">
                        {product.description}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-neutral-300 dark:text-neutral-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="design-haus-text text-xs text-primary-500 dark:text-primary-500">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="design-haus-heading text-lg font-semibold text-accent-600 dark:text-accent-400">
                        ₩{product.price.toLocaleString()}
                      </div>
                      {product.originalPrice && (
                        <div className="design-haus-text text-xs text-primary-400 dark:text-primary-500 line-through">
                          ₩{product.originalPrice.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}