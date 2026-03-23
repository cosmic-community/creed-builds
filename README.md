# Developer Portfolio Showcase
![App Preview](https://imgix.cosmicjs.com/f5f33fc0-2698-11f1-8e38-f5dc12cfac40-photo-1500648767791-00dcc994a43e-1774257339157.jpg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive web developer portfolio built with Next.js and Cosmic. It highlights projects, skills, work experience, and testimonials in a clean, engaging layout.

## Features
- Dynamic project showcase with related skills
- Skills grid with proficiency levels
- Work experience timeline with company branding
- Testimonials section with headshots and quotes
- Responsive navigation and section anchors
- SEO-friendly structure and accessibility-ready UI

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69c10323ec4fb67837105c02&clone_repository=69c1084eec4fb67837105c78)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials"

### Code Generation Prompt

> Based on the content model I created for "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cosmic](https://www.cosmicjs.com)
- [Cosmic SDK](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites
- Bun installed globally
- A Cosmic bucket with the provided content model

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples
```ts
import { cosmic } from '@/lib/cosmic'

const projects = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration
This app uses four Cosmic object types:
- Projects (project_name, summary, description, live_url, featured_image, related_skills)
- Skills (skill_name, skill_level, icon)
- Work Experience (role_title, company_name, start_date, end_date, summary, company_logo)
- Testimonials (person_name, title_company, quote, headshot)

## Deployment Options
- **Vercel**: Recommended for Next.js apps
- **Netlify**: Works well for static export scenarios

Set the required environment variables in your hosting platform’s dashboard.

<!-- README_END -->