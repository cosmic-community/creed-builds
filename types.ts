export interface CosmicFile {
  url: string
  imgix_url: string
}

export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, unknown>
  type?: string
  created_at?: string
  modified_at?: string
}

export type SkillLevelKey = 'beginner' | 'intermediate' | 'advanced' | 'expert'
export type SkillLevelValue = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

export interface Skill extends CosmicObject {
  type?: 'skills'
  metadata: {
    skill_name?: string
    skill_level?: { key: SkillLevelKey; value: SkillLevelValue } | string
    icon?: string
  }
}

export interface Project extends CosmicObject {
  type?: 'projects'
  metadata: {
    project_name?: string
    summary?: string
    description?: string
    live_url?: string
    featured_image?: CosmicFile
    related_skills?: Skill[]
  }
}

export interface WorkExperience extends CosmicObject {
  type?: 'work-experience'
  metadata: {
    role_title?: string
    company_name?: string
    start_date?: string
    end_date?: string
    summary?: string
    company_logo?: CosmicFile
  }
}

export interface Testimonial extends CosmicObject {
  type?: 'testimonials'
  metadata: {
    person_name?: string
    title_company?: string
    quote?: string
    headshot?: CosmicFile
  }
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}