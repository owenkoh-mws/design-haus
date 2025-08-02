// Design System Examples - Design Haus
// Example configurations and usage patterns for the design system

// Color system examples
export const colorExamples = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Base color
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },
  
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  
  usage: {
    backgrounds: ['#ffffff', '#f8fafc', '#f1f5f9'],
    texts: ['#1e293b', '#475569', '#64748b'],
    borders: ['#e2e8f0', '#cbd5e1', '#94a3b8']
  }
}

// Typography examples
export const typographyExamples = {
  headings: {
    h1: {
      fontSize: '3rem',
      lineHeight: '1.2',
      fontWeight: '700',
      letterSpacing: '-0.025em'
    },
    h2: {
      fontSize: '2.25rem',
      lineHeight: '1.3',
      fontWeight: '600',
      letterSpacing: '-0.025em'
    },
    h3: {
      fontSize: '1.875rem',
      lineHeight: '1.4',
      fontWeight: '600'
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: '1.5',
      fontWeight: '600'
    },
    h5: {
      fontSize: '1.25rem',
      lineHeight: '1.6',
      fontWeight: '500'
    },
    h6: {
      fontSize: '1.125rem',
      lineHeight: '1.6',
      fontWeight: '500'
    }
  },
  
  body: {
    large: {
      fontSize: '1.125rem',
      lineHeight: '1.7'
    },
    regular: {
      fontSize: '1rem',
      lineHeight: '1.6'
    },
    small: {
      fontSize: '0.875rem',
      lineHeight: '1.5'
    }
  },
  
  special: {
    caption: {
      fontSize: '0.75rem',
      lineHeight: '1.4',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    code: {
      fontSize: '0.875rem',
      fontFamily: 'Monaco, Consolas, monospace',
      backgroundColor: '#f1f5f9',
      padding: '0.125rem 0.25rem',
      borderRadius: '0.25rem'
    }
  }
}

// Spacing examples
export const spacingExamples = {
  scale: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem'    // 96px
  },
  
  usage: {
    componentPadding: {
      button: '0.5rem 1rem',
      input: '0.75rem 1rem',
      card: '1.5rem'
    },
    
    layoutMargins: {
      section: '4rem 0',
      container: '0 1rem',
      grid: '2rem'
    }
  }
}

// Component examples
export const componentExamples = {
  buttons: {
    primary: {
      className: 'bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500',
      usage: 'Main actions, form submissions'
    },
    
    secondary: {
      className: 'bg-gray-200 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-500',
      usage: 'Secondary actions, cancel buttons'
    },
    
    outline: {
      className: 'border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 focus:ring-2 focus:ring-gray-500',
      usage: 'Less prominent actions'
    }
  },
  
  cards: {
    basic: {
      className: 'bg-white rounded-lg border border-gray-200 shadow-sm p-6',
      usage: 'General content containers'
    },
    
    interactive: {
      className: 'bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer',
      usage: 'Clickable cards, navigation'
    },
    
    elevated: {
      className: 'bg-white rounded-lg shadow-lg p-6',
      usage: 'Important content, modals'
    }
  },
  
  forms: {
    input: {
      className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent',
      usage: 'Text inputs, email inputs'
    },
    
    select: {
      className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 bg-white',
      usage: 'Dropdown selections'
    },
    
    textarea: {
      className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-vertical',
      usage: 'Multi-line text inputs'
    }
  }
}

// Layout examples
export const layoutExamples = {
  containers: {
    narrow: {
      maxWidth: '42rem',
      usage: 'Blog posts, articles'
    },
    
    regular: {
      maxWidth: '72rem',
      usage: 'General content'
    },
    
    wide: {
      maxWidth: '96rem',
      usage: 'Dashboards, data tables'
    }
  },
  
  grids: {
    responsive: {
      className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
      usage: 'Product grids, card layouts'
    },
    
    sidebar: {
      className: 'grid grid-cols-1 lg:grid-cols-4 gap-8',
      usage: 'Main content with sidebar'
    }
  }
}

// Animation examples
export const animationExamples = {
  transitions: {
    fade: {
      enter: 'transition-opacity duration-200 ease-out',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'transition-opacity duration-150 ease-in',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0'
    },
    
    slide: {
      enter: 'transition-transform duration-300 ease-out',
      enterFrom: 'transform translate-y-4',
      enterTo: 'transform translate-y-0',
      leave: 'transition-transform duration-200 ease-in',
      leaveFrom: 'transform translate-y-0',
      leaveTo: 'transform translate-y-4'
    }
  },
  
  hovers: {
    lift: 'transition-transform hover:transform hover:-translate-y-1',
    glow: 'transition-shadow hover:shadow-lg',
    scale: 'transition-transform hover:transform hover:scale-105'
  }
}

// Icon usage examples
export const iconExamples = {
  sizes: {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem'
  },
  
  contexts: {
    buttons: 'Same size as text, aligned center',
    navigation: 'Consistent size across nav items',
    status: 'Color-coded for different states',
    decorative: 'Larger sizes for visual impact'
  }
}

// Usage guidelines
export const usageGuidelines = {
  dos: [
    'Use consistent spacing throughout the interface',
    'Follow the color hierarchy for text and backgrounds',
    'Maintain consistent border radius across components',
    'Use appropriate font weights for hierarchy',
    'Test components in different viewport sizes'
  ],
  
  donts: [
    'Mix different border radius values randomly',
    'Use colors outside the defined palette',
    'Create arbitrary spacing values',
    'Ignore accessibility contrast requirements',
    'Override component styles without considering the system'
  ],
  
  accessibility: [
    'Ensure minimum 4.5:1 contrast ratio for text',
    'Provide focus indicators for interactive elements',
    'Use semantic HTML elements',
    'Include alt text for images',
    'Test with keyboard navigation',
    'Verify screen reader compatibility'
  ]
}