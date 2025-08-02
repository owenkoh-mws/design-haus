// Shopping Mock Data - Design Haus
// Sample data for shopping features

import type { Product, ProductCategory, Brand, Order, OrderItem } from '@/types'

// Mock brands
export const mockBrands: Brand[] = [
  {
    id: '1',
    name: 'Design Studio',
    slug: 'design-studio',
    logo: '/images/brands/design-studio.svg',
    description: '프리미엄 디자인 도구와 템플릿을 제공하는 브랜드입니다.',
    website: 'https://designstudio.com',
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '2',
    name: 'Creative Tools',
    slug: 'creative-tools',
    logo: '/images/brands/creative-tools.svg',
    description: '창의적인 작업을 위한 도구와 리소스를 제공합니다.',
    website: 'https://creativetools.com',
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '3',
    name: 'Visual Arts',
    slug: 'visual-arts',
    logo: '/images/brands/visual-arts.svg',
    description: '비주얼 아트와 그래픽 디자인 전문 브랜드입니다.',
    website: 'https://visualarts.com',
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  }
]

// Mock product categories
export const mockProductCategories: ProductCategory[] = [
  {
    id: '1',
    name: '디자인 템플릿',
    slug: 'design-templates',
    description: '다양한 용도의 디자인 템플릿 모음',
    image: '/images/categories/design-templates.jpg',
    parentId: undefined,
    level: 1,
    productCount: 45,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '2',
    name: '웹 템플릿',
    slug: 'web-templates',
    description: '반응형 웹사이트 템플릿',
    image: '/images/categories/web-templates.jpg',
    parentId: '1',
    level: 2,
    productCount: 28,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '3',
    name: '모바일 템플릿',
    slug: 'mobile-templates',
    description: '모바일 앱 UI 템플릿',
    image: '/images/categories/mobile-templates.jpg',
    parentId: '1',
    level: 2,
    productCount: 17,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '4',
    name: '폰트',
    slug: 'fonts',
    description: '프리미엄 폰트 모음',
    image: '/images/categories/fonts.jpg',
    parentId: undefined,
    level: 1,
    productCount: 32,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '5',
    name: '아이콘',
    slug: 'icons',
    description: '벡터 아이콘 세트',
    image: '/images/categories/icons.jpg',
    parentId: undefined,
    level: 1,
    productCount: 23,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '6',
    name: '스톡 이미지',
    slug: 'stock-images',
    description: '고품질 스톡 이미지',
    image: '/images/categories/stock-images.jpg',
    parentId: undefined,
    level: 1,
    productCount: 156,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  }
]

// Mock products
export const mockProducts: Product[] = [
  {
    id: '1',
    name: '모던 비즈니스 웹사이트 템플릿',
    description: '깔끔하고 현대적인 디자인의 비즈니스 웹사이트 템플릿입니다.',
    longDescription: `
      이 템플릿은 현대적인 비즈니스를 위해 특별히 디자인되었습니다. 
      반응형 디자인을 지원하며, 다양한 디바이스에서 완벽하게 작동합니다.
      
      포함된 페이지:
      • 홈페이지
      • 서비스 페이지
      • 포트폴리오
      • 팀 소개
      • 연락처
      
      기술 스펙:
      • HTML5, CSS3, JavaScript
      • Bootstrap 5
      • 완전 반응형
      • 크로스 브라우저 호환
    `,
    price: 49000,
    originalPrice: 79000,
    discount: 38,
    sku: 'WEB-TEMP-001',
    images: [
      '/images/products/web-template-1-1.jpg',
      '/images/products/web-template-1-2.jpg',
      '/images/products/web-template-1-3.jpg'
    ],
    category: mockProductCategories[1],
    brand: mockBrands[0],
    attributes: {
      format: 'HTML/CSS',
      responsive: 'Yes',
      pages: '5',
      browsers: 'All Modern Browsers'
    },
    inventory: {
      quantity: 999,
      inStock: true,
      lowStock: false,
      threshold: 10,
      reservedQuantity: 0
    },
    rating: {
      average: 4.8,
      count: 127,
      distribution: {
        1: 2,
        2: 3,
        3: 8,
        4: 32,
        5: 82
      }
    },
    tags: ['웹사이트', '비즈니스', '반응형', 'HTML'],
    status: 'active',
    seo: {
      title: '모던 비즈니스 웹사이트 템플릿 | Design Haus',
      description: '깔끔하고 현대적인 디자인의 비즈니스 웹사이트 템플릿입니다.',
      keywords: ['웹사이트', '템플릿', '비즈니스', '반응형'],
      ogImage: '/images/products/web-template-1-og.jpg'
    },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z'
  },
  {
    id: '2',
    name: '모바일 앱 UI 키트',
    description: '완성도 높은 모바일 앱 UI 컴포넌트 키트입니다.',
    longDescription: `
      50개 이상의 모바일 앱 화면과 200개 이상의 UI 컴포넌트를 포함한 
      종합적인 모바일 UI 키트입니다.
      
      포함 내용:
      • 온보딩 화면
      • 로그인/회원가입
      • 프로필 관리
      • 대시보드
      • 설정 화면
      
      제공 형식:
      • Figma 파일
      • Sketch 파일
      • Adobe XD 파일
      • PNG 에셋
    `,
    price: 89000,
    originalPrice: 129000,
    discount: 31,
    sku: 'UI-KIT-001',
    images: [
      '/images/products/mobile-ui-kit-1.jpg',
      '/images/products/mobile-ui-kit-2.jpg',
      '/images/products/mobile-ui-kit-3.jpg',
      '/images/products/mobile-ui-kit-4.jpg'
    ],
    category: mockProductCategories[2],
    brand: mockBrands[1],
    attributes: {
      format: 'Figma, Sketch, XD',
      screens: '50+',
      components: '200+',
      platform: 'iOS, Android'
    },
    inventory: {
      quantity: 999,
      inStock: true,
      lowStock: false,
      threshold: 10,
      reservedQuantity: 0
    },
    rating: {
      average: 4.9,
      count: 89,
      distribution: {
        1: 0,
        2: 1,
        3: 4,
        4: 19,
        5: 65
      }
    },
    tags: ['모바일', 'UI키트', 'Figma', '앱디자인'],
    status: 'active',
    seo: {
      title: '모바일 앱 UI 키트 | Design Haus',
      description: '완성도 높은 모바일 앱 UI 컴포넌트 키트입니다.',
      keywords: ['모바일', 'UI키트', 'Figma', '앱디자인'],
      ogImage: '/images/products/mobile-ui-kit-og.jpg'
    },
    createdAt: '2024-01-05T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z'
  },
  {
    id: '3',
    name: '프리미엄 한글 폰트 패밀리',
    description: '다양한 굵기와 스타일을 지원하는 프리미엄 한글 폰트입니다.',
    longDescription: `
      브랜딩과 편집 디자인에 최적화된 프리미엄 한글 폰트 패밀리입니다.
      가독성과 미적 완성도를 모두 고려하여 디자인되었습니다.
      
      포함된 폰트:
      • Light
      • Regular
      • Medium
      • Bold
      • Black
      
      지원 기능:
      • 완성형 한글 11,172자
      • 영문 대소문자
      • 숫자 및 특수문자
      • 웹폰트 포맷 포함
    `,
    price: 159000,
    originalPrice: 199000,
    discount: 20,
    sku: 'FONT-KOR-001',
    images: [
      '/images/products/korean-font-1.jpg',
      '/images/products/korean-font-2.jpg',
      '/images/products/korean-font-3.jpg'
    ],
    category: mockProductCategories[3],
    brand: mockBrands[2],
    attributes: {
      format: 'OTF, TTF, WOFF',
      weights: '5',
      characters: '11,172',
      license: 'Commercial'
    },
    inventory: {
      quantity: 999,
      inStock: true,
      lowStock: false,
      threshold: 10,
      reservedQuantity: 0
    },
    rating: {
      average: 4.7,
      count: 43,
      distribution: {
        1: 0,
        2: 1,
        3: 3,
        4: 12,
        5: 27
      }
    },
    tags: ['폰트', '한글', 'Typography', '상업용'],
    status: 'active',
    seo: {
      title: '프리미엄 한글 폰트 패밀리 | Design Haus',
      description: '다양한 굵기와 스타일을 지원하는 프리미엄 한글 폰트입니다.',
      keywords: ['폰트', '한글', 'Typography', '상업용'],
      ogImage: '/images/products/korean-font-og.jpg'
    },
    createdAt: '2024-01-10T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z'
  },
  {
    id: '4',
    name: '벡터 아이콘 메가 팩',
    description: '1000개 이상의 고품질 벡터 아이콘 컬렉션입니다.',
    longDescription: `
      다양한 카테고리의 벡터 아이콘 1000개 이상을 포함한 메가 팩입니다.
      일관된 디자인과 다양한 스타일로 모든 프로젝트에 활용 가능합니다.
      
      아이콘 카테고리:
      • 비즈니스 & 오피스
      • 테크놀로지
      • 소셜 미디어
      • 교통 & 여행
      • 음식 & 음료
      • 건강 & 의료
      
      제공 형식:
      • SVG
      • PNG (24px, 48px, 96px)
      • AI 소스 파일
    `,
    price: 39000,
    originalPrice: 59000,
    discount: 34,
    sku: 'ICON-MEGA-001',
    images: [
      '/images/products/icon-pack-1.jpg',
      '/images/products/icon-pack-2.jpg',
      '/images/products/icon-pack-3.jpg'
    ],
    category: mockProductCategories[4],
    brand: mockBrands[1],
    attributes: {
      format: 'SVG, PNG, AI',
      count: '1000+',
      styles: 'Outline, Filled',
      categories: '20+'
    },
    inventory: {
      quantity: 999,
      inStock: true,
      lowStock: false,
      threshold: 10,
      reservedQuantity: 0
    },
    rating: {
      average: 4.6,
      count: 234,
      distribution: {
        1: 3,
        2: 8,
        3: 15,
        4: 67,
        5: 141
      }
    },
    tags: ['아이콘', '벡터', 'SVG', '일러스트'],
    status: 'active',
    seo: {
      title: '벡터 아이콘 메가 팩 | Design Haus',
      description: '1000개 이상의 고품질 벡터 아이콘 컬렉션입니다.',
      keywords: ['아이콘', '벡터', 'SVG', '일러스트'],
      ogImage: '/images/products/icon-pack-og.jpg'
    },
    createdAt: '2024-01-12T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z'
  },
  {
    id: '5',
    name: '프리미엄 스톡 이미지 컬렉션',
    description: '고해상도 라이프스타일 스톡 이미지 100장 패키지입니다.',
    longDescription: `
      전문 사진작가가 촬영한 고품질 라이프스타일 스톡 이미지 컬렉션입니다.
      다양한 용도로 활용 가능한 상업용 라이선스가 포함되어 있습니다.
      
      이미지 주제:
      • 비즈니스 & 오피스
      • 라이프스타일
      • 기술 & 혁신
      • 자연 & 환경
      • 음식 & 요리
      
      이미지 사양:
      • 해상도: 5000px × 3333px
      • 300 DPI
      • JPEG 형식
      • 상업용 라이선스
    `,
    price: 79000,
    originalPrice: 120000,
    discount: 34,
    sku: 'STOCK-LIFE-001',
    images: [
      '/images/products/stock-images-1.jpg',
      '/images/products/stock-images-2.jpg',
      '/images/products/stock-images-3.jpg',
      '/images/products/stock-images-4.jpg'
    ],
    category: mockProductCategories[5],
    brand: mockBrands[0],
    attributes: {
      format: 'JPEG',
      resolution: '5000×3333px',
      dpi: '300',
      license: 'Commercial'
    },
    inventory: {
      quantity: 999,
      inStock: true,
      lowStock: false,
      threshold: 10,
      reservedQuantity: 0
    },
    rating: {
      average: 4.8,
      count: 67,
      distribution: {
        1: 0,
        2: 2,
        3: 3,
        4: 15,
        5: 47
      }
    },
    tags: ['스톡이미지', '사진', '라이프스타일', '상업용'],
    status: 'active',
    seo: {
      title: '프리미엄 스톡 이미지 컬렉션 | Design Haus',
      description: '고해상도 라이프스타일 스톡 이미지 100장 패키지입니다.',
      keywords: ['스톡이미지', '사진', '라이프스타일', '상업용'],
      ogImage: '/images/products/stock-images-og.jpg'
    },
    createdAt: '2024-01-08T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z'
  }
]

// Mock orders
export const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2024-001',
    userId: 'user123',
    items: [
      {
        id: '1',
        productId: '1',
        product: mockProducts[0],
        quantity: 1,
        price: 49000,
        total: 49000,
        options: {}
      },
      {
        id: '2',
        productId: '4',
        product: mockProducts[3],
        quantity: 1,
        price: 39000,
        total: 39000,
        options: {}
      }
    ],
    status: 'delivered',
    payment: {
      method: 'card',
      status: 'paid',
      transactionId: 'txn_123456789',
      paidAt: '2024-01-16T10:30:00.000Z'
    },
    shipping: {
      address: {
        type: 'shipping',
        name: '홍길동',
        address1: '서울시 강남구 테헤란로 123',
        address2: '456호',
        city: '서울',
        state: '서울특별시',
        zipCode: '06142',
        country: '대한민국',
        phone: '010-1234-5678',
        isDefault: true
      },
      method: '이메일 전송',
      cost: 0,
      shippedAt: '2024-01-16T14:00:00.000Z',
      deliveredAt: '2024-01-16T14:00:00.000Z'
    },
    billing: {
      address: {
        type: 'billing',
        name: '홍길동',
        address1: '서울시 강남구 테헤란로 123',
        address2: '456호',
        city: '서울',
        state: '서울특별시',
        zipCode: '06142',
        country: '대한민국',
        phone: '010-1234-5678',
        isDefault: true
      }
    },
    total: 88000,
    subtotal: 88000,
    shippingCost: 0,
    tax: 0,
    discount: 0,
    createdAt: '2024-01-16T09:15:00.000Z',
    updatedAt: '2024-01-16T14:00:00.000Z'
  }
]

// Helper functions
export const getFeaturedProducts = (limit = 8): Product[] => {
  return mockProducts
    .filter(product => product.status === 'active')
    .sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, limit)
}

export const getProductsByCategory = (categorySlug: string, limit = 12): Product[] => {
  return mockProducts
    .filter(product => 
      product.status === 'active' && 
      product.category.slug === categorySlug
    )
    .slice(0, limit)
}

export const getBestSellerProducts = (limit = 6): Product[] => {
  return mockProducts
    .filter(product => product.status === 'active')
    .sort((a, b) => b.rating.count - a.rating.count)
    .slice(0, limit)
}

export const getDiscountedProducts = (limit = 8): Product[] => {
  return mockProducts
    .filter(product => 
      product.status === 'active' && 
      product.discount && 
      product.discount > 0
    )
    .sort((a, b) => (b.discount || 0) - (a.discount || 0))
    .slice(0, limit)
}

export const getProductsByBrand = (brandSlug: string, limit = 12): Product[] => {
  return mockProducts
    .filter(product => 
      product.status === 'active' && 
      product.brand.slug === brandSlug
    )
    .slice(0, limit)
}

export const searchProducts = (query: string, limit = 20): Product[] => {
  const searchTerm = query.toLowerCase()
  return mockProducts
    .filter(product => 
      product.status === 'active' && (
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      )
    )
    .slice(0, limit)
}

// Main export object for easier importing
export const shoppingData = {
  products: mockProducts,
  categories: mockProductCategories,
  brands: mockBrands,
  orders: mockOrders
}