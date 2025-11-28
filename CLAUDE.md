# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Jose Izarra's personal portfolio website built with Next.js 16, React 19, and TypeScript. It's a single-page application showcasing projects, skills, and professional background.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Core Structure
- **Next.js App Router**: Uses the new app directory structure with layout.tsx and page.tsx
- **Component-based**: Modular React components in `/components` with dedicated `/sections` for page sections
- **Data-driven**: Project and skill data stored in JSON files in `/data` directory
- **TypeScript**: Full TypeScript setup with strict mode enabled

### Key Directories
- `/app` - Next.js app router pages and API routes
- `/components` - Reusable React components and page sections
- `/data` - JSON data files for projects, skills, and background images
- `/lib` - Utility functions and TypeScript type definitions
- `/public` - Static assets including icons, images, and PDF resume

### Data Management
Projects, skills, and other content are managed through JSON files:
- `data/projects.json` - Project portfolio data with tech stacks, descriptions, and URLs
- `data/skills.json` - Technical skills and proficiency levels
- `data/background-pics.json` - Background image configuration

### API Integration
- GitHub API integration at `/app/api/github/route.ts` for fetching commit statistics
- Requires `PAT_1` environment variable for GitHub Personal Access Token
- Used by StatsCard component to display GitHub activity

### Styling
- Tailwind CSS v4 with custom configuration
- Global styles in `app/globals.css`
- TailwindCSS Animate for animations
- Custom color scheme using CSS variables

### Analytics
- Vercel Analytics integration via `@vercel/analytics/next`
- Google Analytics with tracking ID G-54D6PWBZ8R

### Image Handling
- Next.js Image component with remote patterns configured for GitHub assets
- Static assets served from `/public/images` and `/public/icons`

## Environment Variables

Required for full functionality:
- `PAT_1` - GitHub Personal Access Token for API requests

## Component Architecture

The main page (`app/page.tsx`) is composed of article sections:
- Hero - Landing section with name and title
- Intro - Personal introduction
- Keywords - Skill highlights
- TechStack - Technical skills grid
- ProjectsCompact - Project portfolio
- StatsCard - GitHub statistics

Each section is a self-contained component in `/components/sections/`.