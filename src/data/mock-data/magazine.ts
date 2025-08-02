// Magazine Mock Data - Design Haus
// Sample data for magazine features

import type { Article, Category, ArticleAuthor, Comment } from '@/types'

// Mock authors
export const mockAuthors: ArticleAuthor[] = [
  {
    id: '1',
    name: '김디자인',
    avatar: '/images/authors/kim-design.jpg',
    bio: '10년 경력의 UX/UI 디자이너. 사용자 중심의 디자인을 추구합니다.',
    social: {
      twitter: '@kimdesign',
      linkedin: 'kim-designer',
      behance: 'kimdesign'
    }
  },
  {
    id: '2',
    name: '박크리에이터',
    avatar: '/images/authors/park-creator.jpg',
    bio: '브랜딩과 비주얼 아이덴티티 전문가. 창의적인 솔루션을 제공합니다.',
    social: {
      instagram: '@parkcreator',
      dribbble: 'parkcreator'
    }
  },
  {
    id: '3',
    name: '이개발자',
    avatar: '/images/authors/lee-developer.jpg',
    bio: '프론트엔드 개발자이자 디자인 시스템 전문가입니다.',
    social: {
      twitter: '@leedev',
      linkedin: 'lee-developer'
    }
  }
]

// Mock categories
export const mockCategories: Category[] = [
  {
    id: '1',
    name: '디자인 트렌드',
    slug: 'design-trends',
    description: '최신 디자인 트렌드와 인사이트를 소개합니다.',
    image: '/images/categories/design-trends.jpg',
    color: '#3b82f6',
    articleCount: 24,
    parentId: undefined,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '2',
    name: 'UI/UX',
    slug: 'ui-ux',
    description: '사용자 경험과 인터페이스 디자인에 대한 전문 지식을 공유합니다.',
    image: '/images/categories/ui-ux.jpg',
    color: '#10b981',
    articleCount: 18,
    parentId: undefined,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '3',
    name: '브랜딩',
    slug: 'branding',
    description: '브랜드 아이덴티티와 브랜딩 전략에 대해 다룹니다.',
    image: '/images/categories/branding.jpg',
    color: '#f59e0b',
    articleCount: 15,
    parentId: undefined,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '4',
    name: '개발',
    slug: 'development',
    description: '웹 개발과 디자인 시스템 구축에 대한 내용입니다.',
    image: '/images/categories/development.jpg',
    color: '#8b5cf6',
    articleCount: 12,
    parentId: undefined,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '5',
    name: '케이스 스터디',
    slug: 'case-study',
    description: '실제 프로젝트 사례와 경험을 공유합니다.',
    image: '/images/categories/case-study.jpg',
    color: '#ef4444',
    articleCount: 9,
    parentId: undefined,
    isActive: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  }
]

// Mock articles
export const mockArticles: Article[] = [
  {
    id: '1',
    title: '2024년 웹 디자인 트렌드: 미니멀리즘을 넘어서',
    content: `
      <p>2024년 웹 디자인은 단순한 미니멀리즘을 넘어 보다 표현적이고 개성 있는 방향으로 발전하고 있습니다.</p>
      
      <h2>주요 트렌드</h2>
      <ul>
        <li>대담한 타이포그래피</li>
        <li>3D 요소의 활용</li>
        <li>인터랙티브 애니메이션</li>
        <li>다크 모드의 정교화</li>
      </ul>
      
      <p>이러한 트렌드들은 사용자 경험을 향상시키면서도 브랜드의 개성을 표현하는 데 중요한 역할을 하고 있습니다.</p>
    `,
    excerpt: '2024년 웹 디자인 트렌드를 살펴보고, 미니멀리즘을 넘어선 새로운 표현 방식들을 알아봅니다.',
    slug: '2024-web-design-trends',
    featuredImage: '/images/articles/web-design-trends-2024.jpg',
    author: mockAuthors[0],
    category: mockCategories[0],
    tags: ['웹디자인', '트렌드', '2024', 'UI'],
    publishedAt: '2024-01-15T09:00:00.000Z',
    readTime: 8,
    views: 1250,
    likes: 89,
    commentsCount: 12,
    status: 'published',
    seo: {
      title: '2024년 웹 디자인 트렌드: 미니멀리즘을 넘어서 | Design Haus',
      description: '2024년 웹 디자인 트렌드를 살펴보고, 미니멀리즘을 넘어선 새로운 표현 방식들을 알아봅니다.',
      keywords: ['웹디자인', '트렌드', '2024', 'UI', '미니멀리즘'],
      ogImage: '/images/articles/web-design-trends-2024-og.jpg'
    },
    createdAt: '2024-01-15T09:00:00.000Z',
    updatedAt: '2024-01-15T09:00:00.000Z'
  },
  {
    id: '2',
    title: '효과적인 사용자 리서치 방법론',
    content: `
      <p>성공적인 UX 디자인을 위해서는 체계적인 사용자 리서치가 필수입니다.</p>
      
      <h2>리서치 방법론</h2>
      <ol>
        <li>사용자 인터뷰</li>
        <li>설문조사</li>
        <li>사용성 테스트</li>
        <li>A/B 테스트</li>
      </ol>
      
      <p>각 방법론의 장단점을 이해하고 프로젝트에 적합한 방법을 선택하는 것이 중요합니다.</p>
    `,
    excerpt: 'UX 디자인의 기초가 되는 사용자 리서치 방법론들을 체계적으로 정리했습니다.',
    slug: 'effective-user-research-methods',
    featuredImage: '/images/articles/user-research-methods.jpg',
    author: mockAuthors[0],
    category: mockCategories[1],
    tags: ['UX', '리서치', '사용자조사', '방법론'],
    publishedAt: '2024-01-12T14:30:00.000Z',
    readTime: 12,
    views: 890,
    likes: 67,
    commentsCount: 8,
    status: 'published',
    seo: {
      title: '효과적인 사용자 리서치 방법론 | Design Haus',
      description: 'UX 디자인의 기초가 되는 사용자 리서치 방법론들을 체계적으로 정리했습니다.',
      keywords: ['UX', '리서치', '사용자조사', '방법론', '인터뷰'],
      ogImage: '/images/articles/user-research-methods-og.jpg'
    },
    createdAt: '2024-01-12T14:30:00.000Z',
    updatedAt: '2024-01-12T14:30:00.000Z'
  },
  {
    id: '3',
    title: '브랜드 아이덴티티 구축하기: 로고에서 가이드라인까지',
    content: `
      <p>일관성 있는 브랜드 아이덴티티는 고객과의 신뢰 관계를 구축하는 핵심 요소입니다.</p>
      
      <h2>브랜드 아이덴티티 구성 요소</h2>
      <ul>
        <li>로고 디자인</li>
        <li>컬러 팔레트</li>
        <li>타이포그래피</li>
        <li>비주얼 언어</li>
        <li>브랜드 가이드라인</li>
      </ul>
      
      <p>각 요소들이 조화롭게 어우러져 하나의 일관된 브랜드 경험을 만들어내는 것이 중요합니다.</p>
    `,
    excerpt: '성공적인 브랜드 아이덴티티 구축을 위한 단계별 가이드를 제공합니다.',
    slug: 'building-brand-identity-guide',
    featuredImage: '/images/articles/brand-identity-guide.jpg',
    author: mockAuthors[1],
    category: mockCategories[2],
    tags: ['브랜딩', '아이덴티티', '로고', '가이드라인'],
    publishedAt: '2024-01-10T11:15:00.000Z',
    readTime: 15,
    views: 1420,
    likes: 103,
    commentsCount: 15,
    status: 'published',
    seo: {
      title: '브랜드 아이덴티티 구축하기: 로고에서 가이드라인까지 | Design Haus',
      description: '성공적인 브랜드 아이덴티티 구축을 위한 단계별 가이드를 제공합니다.',
      keywords: ['브랜딩', '아이덴티티', '로고', '가이드라인', '디자인'],
      ogImage: '/images/articles/brand-identity-guide-og.jpg'
    },
    createdAt: '2024-01-10T11:15:00.000Z',
    updatedAt: '2024-01-10T11:15:00.000Z'
  },
  {
    id: '4',
    title: 'React와 TypeScript로 디자인 시스템 만들기',
    content: `
      <p>확장 가능하고 일관성 있는 디자인 시스템을 구축하는 방법을 알아봅니다.</p>
      
      <h2>디자인 시스템 구성 요소</h2>
      <ul>
        <li>토큰 시스템</li>
        <li>컴포넌트 라이브러리</li>
        <li>문서화</li>
        <li>테스트</li>
      </ul>
      
      <p>TypeScript를 활용하면 컴포넌트의 타입 안정성을 보장하고 개발 효율성을 높일 수 있습니다.</p>
    `,
    excerpt: 'React와 TypeScript를 활용한 현대적인 디자인 시스템 구축 방법을 소개합니다.',
    slug: 'react-typescript-design-system',
    featuredImage: '/images/articles/react-design-system.jpg',
    author: mockAuthors[2],
    category: mockCategories[3],
    tags: ['React', 'TypeScript', '디자인시스템', '개발'],
    publishedAt: '2024-01-08T16:45:00.000Z',
    readTime: 18,
    views: 756,
    likes: 54,
    commentsCount: 6,
    status: 'published',
    seo: {
      title: 'React와 TypeScript로 디자인 시스템 만들기 | Design Haus',
      description: 'React와 TypeScript를 활용한 현대적인 디자인 시스템 구축 방법을 소개합니다.',
      keywords: ['React', 'TypeScript', '디자인시스템', '개발', '컴포넌트'],
      ogImage: '/images/articles/react-design-system-og.jpg'
    },
    createdAt: '2024-01-08T16:45:00.000Z',
    updatedAt: '2024-01-08T16:45:00.000Z'
  },
  {
    id: '5',
    title: 'E-commerce 플랫폼 리디자인 케이스 스터디',
    content: `
      <p>월 방문자 100만 명의 이커머스 플랫폼 리디자인 프로젝트 사례를 공유합니다.</p>
      
      <h2>프로젝트 개요</h2>
      <ul>
        <li>기간: 6개월</li>
        <li>팀 구성: 디자이너 3명, 개발자 5명</li>
        <li>목표: 전환율 30% 향상</li>
      </ul>
      
      <h2>주요 개선사항</h2>
      <ol>
        <li>사용자 여정 최적화</li>
        <li>모바일 UX 개선</li>
        <li>결제 프로세스 간소화</li>
      </ol>
      
      <p>결과적으로 전환율 35% 향상이라는 목표를 초과 달성했습니다.</p>
    `,
    excerpt: '대규모 E-commerce 플랫폼 리디자인 프로젝트의 전 과정과 성과를 상세히 분석합니다.',
    slug: 'ecommerce-redesign-case-study',
    featuredImage: '/images/articles/ecommerce-case-study.jpg',
    author: mockAuthors[0],
    category: mockCategories[4],
    tags: ['케이스스터디', '이커머스', '리디자인', 'UX'],
    publishedAt: '2024-01-05T13:20:00.000Z',
    readTime: 22,
    views: 2100,
    likes: 156,
    commentsCount: 28,
    status: 'published',
    seo: {
      title: 'E-commerce 플랫폼 리디자인 케이스 스터디 | Design Haus',
      description: '대규모 E-commerce 플랫폼 리디자인 프로젝트의 전 과정과 성과를 상세히 분석합니다.',
      keywords: ['케이스스터디', '이커머스', '리디자인', 'UX', '전환율'],
      ogImage: '/images/articles/ecommerce-case-study-og.jpg'
    },
    createdAt: '2024-01-05T13:20:00.000Z',
    updatedAt: '2024-01-05T13:20:00.000Z'
  }
]

// Mock comments
export const mockComments: Comment[] = [
  {
    id: '1',
    content: '정말 유용한 정보네요! 2024년 트렌드를 미리 파악할 수 있어서 좋았습니다.',
    author: {
      id: 'user1',
      name: '디자인러버',
      avatar: '/images/users/user1.jpg'
    },
    articleId: '1',
    parentId: undefined,
    likes: 5,
    replies: [],
    status: 'published',
    createdAt: '2024-01-15T10:30:00.000Z',
    updatedAt: '2024-01-15T10:30:00.000Z'
  },
  {
    id: '2',
    content: '특히 3D 요소 활용 부분이 인상적이었어요. 실제 적용 사례가 더 있으면 좋겠습니다.',
    author: {
      id: 'user2',
      name: '웹디자이너김',
      avatar: '/images/users/user2.jpg'
    },
    articleId: '1',
    parentId: undefined,
    likes: 3,
    replies: [
      {
        id: '3',
        content: '다음 글에서 실제 사례들을 더 자세히 다뤄보겠습니다!',
        author: {
          id: '1',
          name: '김디자인',
          avatar: '/images/authors/kim-design.jpg'
        },
        articleId: '1',
        parentId: '2',
        likes: 2,
        replies: [],
        status: 'published',
        createdAt: '2024-01-15T11:15:00.000Z',
        updatedAt: '2024-01-15T11:15:00.000Z'
      }
    ],
    status: 'published',
    createdAt: '2024-01-15T11:00:00.000Z',
    updatedAt: '2024-01-15T11:00:00.000Z'
  }
]

// Helper functions
export const getFeaturedArticles = (limit = 5): Article[] => {
  return mockArticles
    .filter(article => article.status === 'published')
    .sort((a, b) => new Date(b.publishedAt || '').getTime() - new Date(a.publishedAt || '').getTime())
    .slice(0, limit)
}

export const getArticlesByCategory = (categorySlug: string, limit = 10): Article[] => {
  return mockArticles
    .filter(article => 
      article.status === 'published' && 
      article.category.slug === categorySlug
    )
    .sort((a, b) => new Date(b.publishedAt || '').getTime() - new Date(a.publishedAt || '').getTime())
    .slice(0, limit)
}

export const getPopularArticles = (limit = 5): Article[] => {
  return mockArticles
    .filter(article => article.status === 'published')
    .sort((a, b) => b.views - a.views)
    .slice(0, limit)
}

export const getArticlesByTag = (tag: string, limit = 10): Article[] => {
  return mockArticles
    .filter(article => 
      article.status === 'published' && 
      article.tags.includes(tag)
    )
    .sort((a, b) => new Date(b.publishedAt || '').getTime() - new Date(a.publishedAt || '').getTime())
    .slice(0, limit)
}