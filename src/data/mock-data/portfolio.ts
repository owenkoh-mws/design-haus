// Portfolio Mock Data - Design Haus
// Sample data for portfolio features

import type { Project, ProjectCategory, Service, Testimonial, ProjectClient, GalleryItem } from '@/types'

// Mock project categories
export const mockProjectCategories: ProjectCategory[] = [
  {
    id: '1',
    name: '웹 디자인',
    slug: 'web-design',
    description: '반응형 웹사이트 및 웹 애플리케이션 디자인',
    color: '#3b82f6',
    projectCount: 28,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '2',
    name: '모바일 앱',
    slug: 'mobile-app',
    description: 'iOS 및 Android 모바일 애플리케이션 디자인',
    color: '#10b981',
    projectCount: 22,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '3',
    name: '브랜딩',
    slug: 'branding',
    description: '브랜드 아이덴티티 및 로고 디자인',
    color: '#f59e0b',
    projectCount: 35,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '4',
    name: 'UI/UX',
    slug: 'ui-ux',
    description: '사용자 인터페이스 및 사용자 경험 디자인',
    color: '#8b5cf6',
    projectCount: 31,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '5',
    name: '인쇄물',
    slug: 'print-design',
    description: '브로슈어, 포스터, 명함 등 인쇄물 디자인',
    color: '#ef4444',
    projectCount: 18,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  }
]

// Mock clients
export const mockClients: ProjectClient[] = [
  {
    name: '테크 스타트업',
    logo: '/images/clients/tech-startup.svg',
    website: 'https://techstartup.com',
    industry: 'Technology',
    size: 'startup'
  },
  {
    name: '글로벌 이커머스',
    logo: '/images/clients/global-ecommerce.svg',
    website: 'https://globalecommerce.com',
    industry: 'E-commerce',
    size: 'enterprise'
  },
  {
    name: '핀테크 솔루션',
    logo: '/images/clients/fintech-solution.svg',
    website: 'https://fintechsolution.com',
    industry: 'Finance',
    size: 'medium'
  },
  {
    name: '헬스케어 플랫폼',
    logo: '/images/clients/healthcare-platform.svg',
    website: 'https://healthcareplatform.com',
    industry: 'Healthcare',
    size: 'medium'
  },
  {
    name: '에듀테크 회사',
    logo: '/images/clients/edutech-company.svg',
    website: 'https://edutechcompany.com',
    industry: 'Education',
    size: 'small'
  }
]

// Mock gallery items
const createGalleryItems = (projectId: string, count: number): GalleryItem[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `${projectId}-gallery-${index + 1}`,
    url: `/images/projects/${projectId}/gallery-${index + 1}.jpg`,
    alt: `Gallery image ${index + 1}`,
    caption: `Project detail view ${index + 1}`,
    type: 'image' as const,
    order: index + 1
  }))
}

// Mock projects
export const mockProjects: Project[] = [
  {
    id: '1',
    title: '핀테크 모바일 앱 리디자인',
    description: '금융 서비스의 사용자 경험을 혁신한 모바일 앱 리디자인 프로젝트',
    longDescription: `
      기존 핀테크 앱의 복잡한 사용자 인터페이스와 낮은 사용성을 개선하기 위한 
      대규모 리디자인 프로젝트였습니다. 사용자 리서치부터 시작하여 
      완전히 새로운 디자인 시스템을 구축했습니다.
      
      주요 개선사항:
      • 직관적인 네비게이션 구조
      • 단순화된 거래 플로우
      • 개인화된 대시보드
      • 향상된 보안 UX
      • 다크 모드 지원
      
      결과:
      • 사용자 만족도 45% 증가
      • 거래 완료율 60% 향상
      • 앱 스토어 평점 3.2 → 4.7
    `,
    slug: 'fintech-mobile-app-redesign',
    images: [
      '/images/projects/fintech-app-1.jpg',
      '/images/projects/fintech-app-2.jpg',
      '/images/projects/fintech-app-3.jpg',
      '/images/projects/fintech-app-4.jpg'
    ],
    featuredImage: '/images/projects/fintech-app-featured.jpg',
    category: mockProjectCategories[1],
    services: ['UX Research', 'UI Design', 'Prototyping', 'Design System'],
    client: mockClients[2],
    technologies: ['Figma', 'Principle', 'React Native', 'TypeScript'],
    duration: '4개월',
    completedAt: '2024-01-15T00:00:00.000Z',
    status: 'published',
    featured: true,
    gallery: createGalleryItems('fintech-app', 8),
    testimonial: {
      content: '디자인 하우스와의 협업은 정말 환상적이었습니다. 사용자 중심적 접근 방식으로 우리 앱을 완전히 변화시켜주었어요.',
      author: '김프로덕트',
      position: 'CPO',
      company: '핀테크 솔루션',
      avatar: '/images/testimonials/kim-product.jpg',
      rating: 5
    },
    seo: {
      title: '핀테크 모바일 앱 리디자인 | Design Haus Portfolio',
      description: '금융 서비스의 사용자 경험을 혁신한 모바일 앱 리디자인 프로젝트',
      keywords: ['핀테크', '모바일앱', '리디자인', 'UX', 'UI'],
      ogImage: '/images/projects/fintech-app-og.jpg'
    },
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z'
  },
  {
    id: '2',
    title: '이커머스 플랫폼 웹사이트',
    description: '글로벌 이커머스 플랫폼의 반응형 웹사이트 구축',
    longDescription: `
      전 세계 고객을 대상으로 하는 이커머스 플랫폼의 새로운 웹사이트를 
      디자인하고 구축했습니다. 다국가, 다통화를 지원하며 
      높은 전환율을 목표로 했습니다.
      
      프로젝트 범위:
      • 사용자 여정 설계
      • 반응형 웹사이트 디자인
      • 다국어/다통화 지원
      • 결제 시스템 통합
      • 관리자 대시보드
      
      기술적 특징:
      • Next.js 기반 SSR
      • 마이크로서비스 아키텍처
      • CDN 최적화
      • A/B 테스트 지원
    `,
    slug: 'ecommerce-platform-website',
    images: [
      '/images/projects/ecommerce-web-1.jpg',
      '/images/projects/ecommerce-web-2.jpg',
      '/images/projects/ecommerce-web-3.jpg'
    ],
    featuredImage: '/images/projects/ecommerce-web-featured.jpg',
    category: mockProjectCategories[0],
    services: ['Web Design', 'Frontend Development', 'UX Strategy', 'Performance Optimization'],
    client: mockClients[1],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Vercel'],
    duration: '6개월',
    completedAt: '2023-12-20T00:00:00.000Z',
    status: 'published',
    featured: true,
    gallery: createGalleryItems('ecommerce-web', 6),
    testimonial: {
      content: '예상보다 훨씬 뛰어난 결과물을 받았습니다. 전환율이 40% 증가했어요!',
      author: '박이커머스',
      position: 'CEO',
      company: '글로벌 이커머스',
      avatar: '/images/testimonials/park-ecommerce.jpg',
      rating: 5
    },
    seo: {
      title: '이커머스 플랫폼 웹사이트 | Design Haus Portfolio',
      description: '글로벌 이커머스 플랫폼의 반응형 웹사이트 구축',
      keywords: ['이커머스', '웹사이트', '반응형', 'Next.js'],
      ogImage: '/images/projects/ecommerce-web-og.jpg'
    },
    createdAt: '2023-12-20T00:00:00.000Z',
    updatedAt: '2023-12-20T00:00:00.000Z'
  },
  {
    id: '3',
    title: '스타트업 브랜드 아이덴티티',
    description: '테크 스타트업의 완전한 브랜드 아이덴티티 구축',
    longDescription: `
      새로운 테크 스타트업을 위한 브랜드 아이덴티티를 처음부터 구축했습니다.
      브랜드 전략부터 시각적 아이덴티티까지 모든 요소를 포함합니다.
      
      프로젝트 구성:
      • 브랜드 전략 수립
      • 로고 및 심볼 디자인
      • 컬러 팔레트 개발
      • 타이포그래피 시스템
      • 브랜드 가이드라인
      • 애플리케이션 디자인
      
      결과물:
      • 브랜드 매뉴얼
      • 명함, 레터헤드
      • 웹사이트 가이드
      • 소셜 미디어 템플릿
      • 프레젠테이션 템플릿
    `,
    slug: 'startup-brand-identity',
    images: [
      '/images/projects/startup-brand-1.jpg',
      '/images/projects/startup-brand-2.jpg',
      '/images/projects/startup-brand-3.jpg',
      '/images/projects/startup-brand-4.jpg'
    ],
    featuredImage: '/images/projects/startup-brand-featured.jpg',
    category: mockProjectCategories[2],
    services: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines'],
    client: mockClients[0],
    technologies: ['Illustrator', 'Photoshop', 'Figma', 'InDesign'],
    duration: '3개월',
    completedAt: '2023-11-30T00:00:00.000Z',
    status: 'published',
    featured: false,
    gallery: createGalleryItems('startup-brand', 10),
    testimonial: {
      content: '우리 회사의 비전을 완벽하게 반영한 브랜드를 만들어주셨어요. 투자자들 반응도 정말 좋습니다.',
      author: '이스타트업',
      position: 'Founder & CEO',
      company: '테크 스타트업',
      avatar: '/images/testimonials/lee-startup.jpg',
      rating: 5
    },
    seo: {
      title: '스타트업 브랜드 아이덴티티 | Design Haus Portfolio',
      description: '테크 스타트업의 완전한 브랜드 아이덴티티 구축',
      keywords: ['브랜딩', '로고디자인', '아이덴티티', '스타트업'],
      ogImage: '/images/projects/startup-brand-og.jpg'
    },
    createdAt: '2023-11-30T00:00:00.000Z',
    updatedAt: '2023-11-30T00:00:00.000Z'
  },
  {
    id: '4',
    title: '헬스케어 대시보드 UI/UX',
    description: '의료진을 위한 직관적인 헬스케어 대시보드 설계',
    longDescription: `
      의료진이 환자 데이터를 효율적으로 관리할 수 있는 
      헬스케어 대시보드를 설계했습니다. 복잡한 의료 정보를 
      직관적으로 표현하는 것이 핵심 과제였습니다.
      
      설계 과정:
      • 의료진 인터뷰 및 관찰
      • 정보 아키텍처 설계
      • 와이어프레임 제작
      • 프로토타입 테스트
      • 비주얼 디자인
      • 개발 가이드 제공
      
      주요 기능:
      • 환자 정보 통합 뷰
      • 실시간 모니터링
      • 알림 시스템
      • 보고서 생성
      • 모바일 대응
    `,
    slug: 'healthcare-dashboard-ui-ux',
    images: [
      '/images/projects/healthcare-dash-1.jpg',
      '/images/projects/healthcare-dash-2.jpg',
      '/images/projects/healthcare-dash-3.jpg'
    ],
    featuredImage: '/images/projects/healthcare-dash-featured.jpg',
    category: mockProjectCategories[3],
    services: ['UX Research', 'Information Architecture', 'UI Design', 'Prototyping'],
    client: mockClients[3],
    technologies: ['Figma', 'Miro', 'Principle', 'React', 'D3.js'],
    duration: '5개월',
    completedAt: '2023-10-15T00:00:00.000Z',
    status: 'published',
    featured: true,
    gallery: createGalleryItems('healthcare-dash', 7),
    testimonial: {
      content: '의료진의 업무 효율성이 크게 향상되었습니다. 사용자 중심 설계의 힘을 느꼈어요.',
      author: '최의료진',
      position: 'CTO',
      company: '헬스케어 플랫폼',
      avatar: '/images/testimonials/choi-medical.jpg',
      rating: 5
    },
    seo: {
      title: '헬스케어 대시보드 UI/UX | Design Haus Portfolio',
      description: '의료진을 위한 직관적인 헬스케어 대시보드 설계',
      keywords: ['헬스케어', '대시보드', 'UI/UX', '의료'],
      ogImage: '/images/projects/healthcare-dash-og.jpg'
    },
    createdAt: '2023-10-15T00:00:00.000Z',
    updatedAt: '2023-10-15T00:00:00.000Z'
  },
  {
    id: '5',
    title: '교육 플랫폼 브로슈어 디자인',
    description: '에듀테크 회사의 마케팅 브로슈어 및 인쇄물 디자인',
    longDescription: `
      교육 플랫폼을 홍보하기 위한 다양한 인쇄물을 디자인했습니다.
      타겟 고객인 학부모와 교육자들에게 어필할 수 있는 
      신뢰감 있는 디자인을 목표로 했습니다.
      
      제작물 목록:
      • 회사 소개 브로슈어
      • 서비스 안내 팜플렛
      • 교육 프로그램 가이드
      • 명함 및 레터헤드
      • 전시회 배너
      • 포스터 시리즈
      
      디자인 컨셉:
      • 친근하면서도 전문적인 이미지
      • 교육적 요소를 시각화
      • 일관된 브랜드 아이덴티티
      • 가독성 최우선
    `,
    slug: 'education-platform-brochure',
    images: [
      '/images/projects/edu-brochure-1.jpg',
      '/images/projects/edu-brochure-2.jpg',
      '/images/projects/edu-brochure-3.jpg'
    ],
    featuredImage: '/images/projects/edu-brochure-featured.jpg',
    category: mockProjectCategories[4],
    services: ['Print Design', 'Layout Design', 'Brand Application', 'Production Management'],
    client: mockClients[4],
    technologies: ['InDesign', 'Illustrator', 'Photoshop'],
    duration: '2개월',
    completedAt: '2023-09-10T00:00:00.000Z',
    status: 'published',
    featured: false,
    gallery: createGalleryItems('edu-brochure', 5),
    testimonial: {
      content: '인쇄물 퀄리티가 정말 뛰어나고, 고객들 반응도 매우 좋습니다. 전문성이 느껴져요.',
      author: '정에듀테크',
      position: 'Marketing Director',
      company: '에듀테크 회사',
      avatar: '/images/testimonials/jung-edutech.jpg',
      rating: 4
    },
    seo: {
      title: '교육 플랫폼 브로슈어 디자인 | Design Haus Portfolio',
      description: '에듀테크 회사의 마케팅 브로슈어 및 인쇄물 디자인',
      keywords: ['브로슈어', '인쇄물', '교육', '에듀테크'],
      ogImage: '/images/projects/edu-brochure-og.jpg'
    },
    createdAt: '2023-09-10T00:00:00.000Z',
    updatedAt: '2023-09-10T00:00:00.000Z'
  }
]

// Mock services
export const mockServices: Service[] = [
  {
    id: '1',
    name: '웹 디자인 & 개발',
    slug: 'web-design-development',
    description: '반응형 웹사이트부터 복잡한 웹 애플리케이션까지',
    longDescription: `
      현대적이고 사용자 친화적인 웹사이트와 웹 애플리케이션을 
      설계하고 개발합니다. 사용자 경험을 최우선으로 하며, 
      모든 디바이스에서 완벽하게 작동하는 반응형 디자인을 제공합니다.
      
      포함 서비스:
      • UI/UX 디자인
      • 프론트엔드 개발
      • 백엔드 개발
      • 데이터베이스 설계
      • SEO 최적화
      • 성능 최적화
      • 유지보수
    `,
    icon: 'Globe',
    image: '/images/services/web-design-dev.jpg',
    features: [
      '반응형 디자인',
      '모던 기술 스택',
      'SEO 최적화',
      '성능 최적화',
      '크로스 브라우저 호환',
      '접근성 준수',
      '지속적인 지원'
    ],
    startingPrice: 3000000,
    duration: '4-12주',
    category: '웹 개발',
    portfolio: [mockProjects[1]],
    isActive: true,
    featured: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '2',
    name: '모바일 앱 디자인',
    slug: 'mobile-app-design',
    description: 'iOS와 Android를 위한 네이티브 및 크로스 플랫폼 앱 디자인',
    longDescription: `
      사용자가 사랑하는 모바일 앱을 만들어드립니다. 
      플랫폼 가이드라인을 준수하면서도 독창적인 
      사용자 경험을 제공하는 앱 디자인을 전문으로 합니다.
      
      서비스 범위:
      • UX 리서치 & 전략
      • 와이어프레임 & 프로토타입
      • UI 디자인
      • 디자인 시스템
      • 개발 지원
      • 사용성 테스트
      • 런칭 후 분석
    `,
    icon: 'Smartphone',
    image: '/images/services/mobile-app-design.jpg',
    features: [
      'iOS & Android 플랫폼',
      '사용자 중심 설계',
      '프로토타이핑',
      '디자인 시스템',
      '개발자 협업',
      '사용성 테스트',
      '지속적인 개선'
    ],
    startingPrice: 2500000,
    duration: '6-16주',
    category: '모바일',
    portfolio: [mockProjects[0]],
    isActive: true,
    featured: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '3',
    name: '브랜드 아이덴티티',
    slug: 'brand-identity',
    description: '로고부터 브랜드 가이드라인까지 완전한 브랜드 구축',
    longDescription: `
      브랜드의 핵심 가치와 개성을 시각적으로 표현하는 
      완전한 브랜드 아이덴티티를 구축합니다. 
      로고 디자인부터 브랜드 가이드라인까지, 
      일관된 브랜드 경험을 만들어드립니다.
      
      제공 서비스:
      • 브랜드 전략 수립
      • 로고 & 심볼 디자인
      • 컬러 팔레트
      • 타이포그래피
      • 브랜드 가이드라인
      • 명함/레터헤드 디자인
      • 브랜드 애플리케이션
    `,
    icon: 'Palette',
    image: '/images/services/brand-identity.jpg',
    features: [
      '브랜드 전략',
      '로고 디자인',
      '비주얼 아이덴티티',
      '브랜드 가이드라인',
      '애플리케이션 디자인',
      '상표 등록 지원',
      '브랜드 관리'
    ],
    startingPrice: 1500000,
    duration: '3-8주',
    category: '브랜딩',
    portfolio: [mockProjects[2]],
    isActive: true,
    featured: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '4',
    name: 'UI/UX 컨설팅',
    slug: 'ui-ux-consulting',
    description: '사용자 경험 개선을 위한 전문 컨설팅 서비스',
    longDescription: `
      기존 제품의 사용자 경험 문제를 진단하고 
      개선 방안을 제시하는 컨설팅 서비스입니다. 
      데이터 기반의 분석과 사용자 리서치를 통해 
      실질적인 개선안을 제공합니다.
      
      컨설팅 프로세스:
      • 현재 상태 분석
      • 사용자 리서치
      • 경쟁사 분석
      • 개선안 도출
      • 프로토타입 제작
      • 검증 테스트
      • 실행 계획 수립
    `,
    icon: 'Users',
    image: '/images/services/ui-ux-consulting.jpg',
    features: [
      '사용자 리서치',
      'UX 감사',
      '경쟁사 분석',
      '개선안 제시',
      '프로토타이핑',
      '사용성 테스트',
      '실행 로드맵'
    ],
    startingPrice: 800000,
    duration: '2-6주',
    category: 'UX',
    portfolio: [mockProjects[3]],
    isActive: true,
    featured: false,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  }
]

// Mock testimonials
export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    content: '디자인 하우스와의 협업은 정말 환상적이었습니다. 우리의 비전을 완벽하게 이해하고 그 이상의 결과물을 만들어주셨어요.',
    author: '김대표',
    position: 'CEO',
    company: '테크 스타트업',
    avatar: '/images/testimonials/kim-ceo.jpg',
    rating: 5,
    projectId: '1',
    isPublished: true,
    featured: true,
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z'
  },
  {
    id: '2',
    content: '전환율이 40% 증가했어요! 사용자들의 반응도 너무 좋고, 투자한 비용 이상의 가치를 얻었습니다.',
    author: '박마케터',
    position: 'Marketing Director',
    company: '글로벌 이커머스',
    avatar: '/images/testimonials/park-marketer.jpg',
    rating: 5,
    projectId: '2',
    isPublished: true,
    featured: true,
    createdAt: '2023-12-20T00:00:00.000Z',
    updatedAt: '2023-12-20T00:00:00.000Z'
  },
  {
    id: '3',
    content: '브랜드 아이덴티티 작업 후 고객들의 브랜드 인지도가 크게 향상되었습니다. 정말 전문적인 작업이었어요.',
    author: '이창업자',
    position: 'Founder',
    company: '테크 스타트업',
    avatar: '/images/testimonials/lee-founder.jpg',
    rating: 5,
    projectId: '3',
    isPublished: true,
    featured: false,
    createdAt: '2023-11-30T00:00:00.000Z',
    updatedAt: '2023-11-30T00:00:00.000Z'
  },
  {
    id: '4',
    content: '의료진들이 시스템을 훨씬 쉽게 사용할 수 있게 되었어요. UX 개선 효과가 정말 컸습니다.',
    author: '최개발자',
    position: 'CTO',
    company: '헬스케어 플랫폼',
    avatar: '/images/testimonials/choi-cto.jpg',
    rating: 5,
    projectId: '4',
    isPublished: true,
    featured: true,
    createdAt: '2023-10-15T00:00:00.000Z',
    updatedAt: '2023-10-15T00:00:00.000Z'
  }
]

// Helper functions
export const getFeaturedProjects = (limit = 6): Project[] => {
  return mockProjects
    .filter(project => project.status === 'published' && project.featured)
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, limit)
}

export const getLatestProjects = (limit = 8): Project[] => {
  return mockProjects
    .filter(project => project.status === 'published')
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, limit)
}

export const getProjectsByCategory = (categorySlug: string, limit = 10): Project[] => {
  return mockProjects
    .filter(project => 
      project.status === 'published' && 
      project.category.slug === categorySlug
    )
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, limit)
}

export const getFeaturedServices = (limit = 4): Service[] => {
  return mockServices
    .filter(service => service.isActive && service.featured)
    .slice(0, limit)
}

export const getFeaturedTestimonials = (limit = 3): Testimonial[] => {
  return mockTestimonials
    .filter(testimonial => testimonial.isPublished && testimonial.featured)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit)
}

export const getProjectsByService = (serviceSlug: string, limit = 6): Project[] => {
  const service = mockServices.find(s => s.slug === serviceSlug)
  if (!service) return []
  
  return service.portfolio.slice(0, limit)
}

// Main export object for easier importing
export const portfolioData = {
  projects: mockProjects,
  categories: mockProjectCategories,
  clients: mockClients,
  services: mockServices,
  testimonials: mockTestimonials
}