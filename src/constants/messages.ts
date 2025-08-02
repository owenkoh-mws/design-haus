// Messages - Design Haus
// Error, success, and informational messages

export const ERROR_MESSAGES = {
  // General errors
  GENERAL: {
    UNKNOWN: '알 수 없는 오류가 발생했습니다.',
    NETWORK: '네트워크 연결을 확인해주세요.',
    TIMEOUT: '요청 시간이 초과되었습니다.',
    UNAUTHORIZED: '로그인이 필요합니다.',
    FORBIDDEN: '접근 권한이 없습니다.',
    NOT_FOUND: '요청한 페이지를 찾을 수 없습니다.',
    SERVER_ERROR: '서버 오류가 발생했습니다.',
    VALIDATION: '입력 정보를 확인해주세요.'
  },

  // Authentication errors
  AUTH: {
    INVALID_CREDENTIALS: '이메일 또는 비밀번호가 올바르지 않습니다.',
    WEAK_PASSWORD: '비밀번호는 8자 이상이어야 하며, 숫자와 특수문자를 포함해야 합니다.',
    EMAIL_EXISTS: '이미 사용 중인 이메일입니다.',
    INVALID_EMAIL: '올바른 이메일 주소를 입력해주세요.',
    PASSWORD_MISMATCH: '비밀번호가 일치하지 않습니다.',
    ACCOUNT_LOCKED: '계정이 잠겨있습니다. 관리자에게 문의하세요.',
    TOKEN_EXPIRED: '로그인이 만료되었습니다. 다시 로그인해주세요.'
  },

  // Form validation errors
  VALIDATION: {
    REQUIRED: '필수 입력 항목입니다.',
    MIN_LENGTH: (min: number) => `최소 ${min}자 이상 입력해주세요.`,
    MAX_LENGTH: (max: number) => `최대 ${max}자까지 입력 가능합니다.`,
    EMAIL_FORMAT: '올바른 이메일 형식을 입력해주세요.',
    URL_FORMAT: '올바른 URL 형식을 입력해주세요.',
    PHONE_FORMAT: '올바른 전화번호 형식을 입력해주세요.',
    NUMBER_ONLY: '숫자만 입력 가능합니다.',
    POSITIVE_NUMBER: '0보다 큰 숫자를 입력해주세요.',
    FILE_SIZE: (maxSize: string) => `파일 크기는 ${maxSize} 이하여야 합니다.`,
    FILE_FORMAT: (formats: string[]) => `${formats.join(', ')} 형식의 파일만 업로드 가능합니다.`
  },

  // Feature specific errors
  MAGAZINE: {
    ARTICLE_NOT_FOUND: '존재하지 않는 글입니다.',
    COMMENT_FAILED: '댓글 작성에 실패했습니다.',
    LIKE_FAILED: '좋아요 처리에 실패했습니다.'
  },

  SHOPPING: {
    PRODUCT_NOT_FOUND: '존재하지 않는 상품입니다.',
    OUT_OF_STOCK: '재고가 부족합니다.',
    CART_ADD_FAILED: '장바구니 추가에 실패했습니다.',
    ORDER_FAILED: '주문 처리에 실패했습니다.',
    PAYMENT_FAILED: '결제 처리에 실패했습니다.'
  },

  PORTFOLIO: {
    PROJECT_NOT_FOUND: '존재하지 않는 프로젝트입니다.',
    CONTACT_FAILED: '문의 전송에 실패했습니다.'
  }
} as const

export const SUCCESS_MESSAGES = {
  // General success
  GENERAL: {
    SAVED: '성공적으로 저장되었습니다.',
    UPDATED: '성공적으로 수정되었습니다.',
    DELETED: '성공적으로 삭제되었습니다.',
    SUBMITTED: '성공적으로 제출되었습니다.'
  },

  // Authentication success
  AUTH: {
    LOGIN: '로그인되었습니다.',
    LOGOUT: '로그아웃되었습니다.',
    REGISTER: '회원가입이 완료되었습니다.',
    PASSWORD_CHANGED: '비밀번호가 변경되었습니다.',
    EMAIL_VERIFIED: '이메일 인증이 완료되었습니다.'
  },

  // Feature specific success
  MAGAZINE: {
    ARTICLE_PUBLISHED: '글이 게시되었습니다.',
    COMMENT_POSTED: '댓글이 작성되었습니다.',
    LIKED: '좋아요가 추가되었습니다.',
    UNLIKED: '좋아요가 취소되었습니다.'
  },

  SHOPPING: {
    ADDED_TO_CART: '장바구니에 추가되었습니다.',
    REMOVED_FROM_CART: '장바구니에서 제거되었습니다.',
    ORDER_PLACED: '주문이 완료되었습니다.',
    PAYMENT_SUCCESS: '결제가 완료되었습니다.'
  },

  PORTFOLIO: {
    CONTACT_SENT: '문의가 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.',
    NEWSLETTER_SUBSCRIBED: '뉴스레터 구독이 완료되었습니다.'
  }
} as const

export const INFO_MESSAGES = {
  // Loading states
  LOADING: {
    DEFAULT: '로딩 중...',
    SAVING: '저장 중...',
    UPLOADING: '업로드 중...',
    PROCESSING: '처리 중...',
    SENDING: '전송 중...'
  },

  // Empty states
  EMPTY: {
    NO_DATA: '데이터가 없습니다.',
    NO_RESULTS: '검색 결과가 없습니다.',
    NO_ARTICLES: '작성된 글이 없습니다.',
    NO_PRODUCTS: '상품이 없습니다.',
    NO_PROJECTS: '프로젝트가 없습니다.',
    EMPTY_CART: '장바구니가 비어있습니다.',
    NO_COMMENTS: '댓글이 없습니다.'
  },

  // Confirmation messages
  CONFIRM: {
    DELETE: '정말로 삭제하시겠습니까?',
    LOGOUT: '로그아웃하시겠습니까?',
    CANCEL_ORDER: '주문을 취소하시겠습니까?',
    REMOVE_FROM_CART: '장바구니에서 제거하시겠습니까?',
    UNSAVED_CHANGES: '저장하지 않은 변경사항이 있습니다. 페이지를 떠나시겠습니까?'
  },

  // Tips and hints
  TIPS: {
    PASSWORD_STRENGTH: '영문, 숫자, 특수문자를 조합하여 8자 이상 입력하세요.',
    FILE_UPLOAD: '드래그 앤 드롭으로 파일을 업로드할 수 있습니다.',
    SEARCH_TIPS: '키워드를 입력하여 검색하세요.',
    FILTER_TIPS: '카테고리를 선택하여 결과를 필터링할 수 있습니다.'
  }
} as const