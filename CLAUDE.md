# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional business services portfolio built with Next.js 14, TypeScript, and Tailwind CSS. This is a conversion-focused website showcasing AI automation, web development, and digital marketing services for businesses.

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Development Commands

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## Architecture

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/          # Reusable components
│   │   ├── ui/              # Basic UI components
│   │   ├── sections/        # Page sections (Hero, Services, etc.)
│   │   └── forms/           # Contact forms
│   ├── lib/                 # Utilities and configurations
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
└── tailwind.config.js       # Tailwind configuration
```

## Key Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Performance Optimized**: Next.js Image optimization, lazy loading, SEO-ready
- **Conversion Focused**: Strategic CTAs, social proof, clear value propositions
- **Professional Animations**: Smooth scroll animations and micro-interactions
- **Contact Integration**: Multiple contact methods with form validation

## Content Strategy

The portfolio positions the owner as a business growth expert through:
- **AI Automation**: Streamlining business processes and reducing costs
- **Web Development**: Creating high-converting websites and web applications
- **Digital Marketing**: SEO, lead generation, and online presence optimization
- **Business Consulting**: Process optimization and technology integration

## Styling Approach

- Uses Tailwind CSS utility classes for rapid development
- Custom color palette focused on trust and professionalism
- Consistent spacing and typography scale
- Dark mode support for modern appeal