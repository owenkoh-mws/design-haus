# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with code in this repository. It serves as your AI coding partner's "constitution" and control panel for this project.

## 🚀 Project Overview

**Project Type**: Modern Web Application  
**Stack**: Next.js + TypeScript + Tailwind CSS  
**Purpose**: Design portfolio and e-commerce platform prototype

### Tech Stack & Versions
```
Framework: Next.js 15.4.5 (App Router)
Language: TypeScript 5+ (strict mode)
Styling: Tailwind CSS v4
Runtime: Node.js
Fonts: Geist Sans & Geist Mono (next/font optimized)
Development: Turbopack enabled
Linting: ESLint with Next.js TypeScript config
```

## 📁 Project Structure & Architecture

```
project-design/
├── src/app/              # App Router pages & layouts
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Homepage component
│   ├── globals.css       # Global styles & CSS variables
│   └── favicon.ico       # Site favicon
├── public/               # Static assets (SVGs, images)
├── .mcp.json            # MCP server configurations
├── CLAUDE.md            # This file - AI guidance
├── next.config.ts       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration (if added)
├── tsconfig.json        # TypeScript configuration
├── eslint.config.mjs    # ESLint flat config
└── package.json         # Dependencies & scripts
```

### Key Architecture Decisions
- **App Router**: Using Next.js 13+ App Router (NOT Pages Router)
- **Import Alias**: `@/*` maps to `./src/*` for clean imports
- **TypeScript**: Strict mode enabled for maximum type safety
- **CSS Strategy**: Tailwind-first with CSS variables for theming
- **Font Strategy**: Geist fonts via next/font for optimization

## ⚡ Development Commands

### Primary Commands
```bash
# Development (with Turbopack - ALWAYS use this)
npm run dev

# Production build
npm run build

# Production server
npm run start

# Linting
npm run lint
```

### Development Workflow
1. **Start Development**: `npm run dev` (includes Turbopack)
2. **Create Components**: Place in `src/app/` or create `src/components/`
3. **Styling**: Use Tailwind classes with CSS variables
4. **Type Safety**: All files must be properly typed
5. **Import Paths**: Use `@/` alias for clean imports

## 🎨 Code Style & Conventions

### TypeScript Standards
```typescript
// ✅ Preferred: Arrow functions with explicit types
const Component: React.FC<Props> = ({ prop }) => {
  return <div>{prop}</div>
}

// ✅ Use strict typing
interface ComponentProps {
  title: string
  isVisible: boolean
}

// ❌ Avoid: any types, function declarations for components
```

### File Naming Conventions
```
Components: PascalCase (UserProfile.tsx, ProductCard.tsx)
Pages: lowercase (page.tsx, layout.tsx, not-found.tsx)
Utilities: camelCase (formatDate.ts, validateEmail.ts)
Types: PascalCase with descriptive names (User.ts, ApiResponse.ts)
Constants: UPPER_SNAKE_CASE files (API_ENDPOINTS.ts)
```

### Import Order & Organization
```typescript
// 1. React & Next.js imports
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// 2. Third-party libraries
import clsx from 'clsx'

// 3. Internal imports (use @/ alias)
import { Button } from '@/components/ui/Button'
import { formatDate } from '@/utils/formatDate'
import type { User } from '@/types/User'

// 4. Relative imports (only when necessary)
import '../styles/component.css'
```

### Styling Guidelines
```css
/* ✅ Use CSS variables for theming */
:root {
  --background: #ffffff;
  --foreground: #171717;
}

/* ✅ Tailwind utility classes preferred */
<div className="flex items-center justify-between p-4 bg-background text-foreground">

/* ❌ Avoid inline styles */
<div style={{ padding: '16px' }}>
```

## 🔧 MCP Server Configuration

The project uses several MCP (Model Context Protocol) servers for enhanced AI capabilities:

```json
Active MCP Servers:
- github: Repository management & Git operations
- playwright: Browser automation & E2E testing
- shadcn-ui-server: UI component library access
- context7: Context management & search (@upstash/context7-mcp)
- sequential-thinking: Enhanced reasoning capabilities
```

**MCP Files**: `.mcp.json` (project config), `~/.claude.json` (local config)

## 📋 Repository Etiquette & Git Workflow

### Branch Naming
```
feature/component-name-description
fix/bug-description
docs/documentation-update
refactor/code-improvement
```

### Commit Message Format
```
type(scope): description

Examples:
feat(components): add user profile component
fix(api): resolve authentication bug
docs(readme): update installation instructions
refactor(utils): improve date formatting function
```

## 🔍 Core Files & Utilities

### Essential Files to Reference
- `src/app/layout.tsx`: Root layout, font loading, metadata
- `src/app/globals.css`: Global styles, CSS variables, dark mode
- `next.config.ts`: Next.js configuration (minimal but important)
- `tsconfig.json`: TypeScript settings & path aliases
- `eslint.config.mjs`: Linting rules (flat config format)
- `package.json`: Dependencies, scripts, project metadata

### CSS Variables System
```css
Light Mode:
--background: #ffffff
--foreground: #171717

Dark Mode (auto-detected):
--background: #0a0a0a  
--foreground: #ededed

Font Variables:
--font-geist-sans: Geist Sans font family
--font-geist-mono: Geist Mono font family
```

## 🚫 Do Not Touch / Modify

### Protected Areas
- `node_modules/` directory (managed by npm)
- `.next/` directory (Next.js build output)
- `next-env.d.ts` (Next.js TypeScript definitions)
- Font loading configuration in `layout.tsx` (optimized setup)

### Careful Modification Required
- `tsconfig.json`: Path aliases are crucial for imports
- `eslint.config.mjs`: Uses new flat config format
- CSS variables in `globals.css`: Used throughout for theming

## 🎯 Development Priorities & Focus Areas

### Current Development Phase
1. **Setup Complete**: Basic Next.js project with TypeScript & Tailwind
2. **Ready for**: Component development, page creation, styling
3. **Architecture**: App Router with modern best practices

### Recommended Next Steps
1. Create component library in `src/components/`
2. Add pages for different routes in `src/app/`
3. Implement theming system with CSS variables
4. Add form handling with React Hook Form
5. Integrate with external APIs as needed

## 💡 Best Practices & Tips

### Performance Optimization
- Use `next/image` for all images
- Implement code splitting with dynamic imports
- Leverage Next.js built-in optimizations
- Use `next/font` for font optimization (already configured)

### TypeScript Best Practices
- Define interfaces for all props and data structures
- Use strict mode settings (already enabled)
- Avoid `any` types - prefer `unknown` or proper typing
- Export types alongside components

### Tailwind CSS Best Practices
- Use utility classes over custom CSS when possible
- Leverage CSS variables for consistent theming
- Use responsive prefixes (sm:, md:, lg:) for responsive design
- Group related classes logically

## 🔄 Iteration & Updates

This CLAUDE.md file is a living document. Update it as the project evolves:
- Add new conventions as they're established
- Document new dependencies and their usage patterns
- Update architecture decisions and their rationale
- Expand the "Do Not Touch" section as needed

---

**Last Updated**: 2025-08-01  
**Project Phase**: Initial Setup Complete  
**Next Review**: After major architectural changes