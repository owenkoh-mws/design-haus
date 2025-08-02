# Portfolio Components - Design Haus

이 디렉토리는 Design Haus 포트폴리오 페이지를 위한 컴포넌트들을 포함합니다.

## Components

### PortfolioGrid
메인 포트폴리오 그리드 컴포넌트로, 프로젝트들을 마사수리(masonry) 레이아웃으로 표시합니다.

**Features:**
- 반응형 마사수리 그리드 레이아웃
- 통합된 검색 및 필터링 기능
- 로딩 상태 및 스켈레톤 UI
- Framer Motion을 사용한 애니메이션
- 페이지네이션 지원 (향후 구현)

**Props:**
```typescript
interface PortfolioGridProps {
  projects: Project[]
  categories: ProjectCategory[]
  className?: string
  showFilters?: boolean
  gridColumns?: 2 | 3 | 4
  loadingCount?: number
}
```

**Usage:**
```tsx
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import { mockProjects, mockProjectCategories } from '@/data/mock-data/portfolio'

<PortfolioGrid 
  projects={mockProjects}
  categories={mockProjectCategories}
  showFilters={true}
  gridColumns={3}
/>
```

### PortfolioFilters
포트폴리오 필터링 및 검색을 위한 컴포넌트입니다.

**Features:**
- 실시간 검색
- 카테고리별 필터링
- 활성 필터 표시 및 관리
- 결과 카운트 표시
- 반응형 디자인

**Props:**
```typescript
interface PortfolioFiltersProps {
  categories: ProjectCategory[]
  onCategoryChange: (categoryIds: string[]) => void
  onSearchChange: (query: string) => void
  selectedCategories: string[]
  searchQuery: string
  totalProjects: number
  filteredCount: number
  className?: string
}
```

## ProjectCard (Updated)
기존 ProjectCard 컴포넌트가 포트폴리오 데이터 구조에 맞게 업데이트되었습니다.

**New Features:**
- 카테고리 색상 배지
- Featured 프로젝트 표시
- 클라이언트 정보 및 프로젝트 기간 표시
- 서비스/기술 태그
- 다크 모드 지원
- 개선된 호버 효과

## Design System Integration

모든 컴포넌트는 Design Haus 디자인 시스템을 사용합니다:

- **Colors**: accent, neutral, success 컬러 팔레트
- **Typography**: 일관된 폰트 크기 및 가중치
- **Spacing**: 표준화된 여백 시스템
- **Animations**: 부드러운 전환 및 호버 효과
- **Shadows**: 시각적 깊이를 위한 그림자 시스템

## Responsive Design

컴포넌트들은 모바일 우선 접근 방식으로 설계되었습니다:

- **Mobile (< 640px)**: 1열 그리드
- **Tablet (640px - 1024px)**: 2열 그리드  
- **Desktop (> 1024px)**: 3열 또는 4열 그리드 (설정 가능)

## Performance Optimizations

- **이미지 최적화**: Next.js Image 컴포넌트 사용
- **애니메이션**: will-change 속성으로 GPU 가속
- **가상화**: 큰 데이터셋을 위한 준비
- **지연 로딩**: 이미지 및 컴포넌트 지연 로딩
- **메모화**: React.memo 및 useMemo 활용

## Accessibility

- **키보드 네비게이션**: 모든 인터랙티브 요소
- **스크린 리더**: 적절한 ARIA 라벨
- **색상 대비**: WCAG AA 기준 준수
- **포커스 표시**: 명확한 포커스 인디케이터
- **모션 감소**: prefers-reduced-motion 지원

## Dependencies

- **framer-motion**: 애니메이션 및 전환
- **lucide-react**: 아이콘
- **next**: 이미지 최적화 및 라우팅
- **tailwind-merge**: 클래스 병합
- **clsx**: 조건부 클래스명

## Future Enhancements

- [ ] 무한 스크롤 또는 페이지네이션
- [ ] 프로젝트 정렬 옵션
- [ ] 즐겨찾기 기능
- [ ] 공유 기능
- [ ] 고급 필터 (날짜 범위, 기술 스택 등)
- [ ] 그리드/리스트 뷰 토글
- [ ] 프로젝트 미리보기 모달