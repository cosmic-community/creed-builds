import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'
import ExperienceCard from '@/components/ExperienceCard'
import TestimonialCard from '@/components/TestimonialCard'
import { getProjects, getSkills, getTestimonials, getWorkExperience } from '@/lib/cosmic'
import type { Project, Skill, Testimonial, WorkExperience } from '@/types'

export default async function HomePage() {
  const [projects, skills, experiences, testimonials] = await Promise.all([
    getProjects(),
    getSkills(),
    getWorkExperience(),
    getTestimonials()
  ])

  const hasProjects = projects.length > 0
  const hasSkills = skills.length > 0
  const hasExperience = experiences.length > 0
  const hasTestimonials = testimonials.length > 0

  return (
    <div className="space-y-20 pb-20">
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Web Developer Portfolio
              </p>
              <h1 className="text-4xl font-semibold text-gray-900 md:text-5xl">
                Building modern products with thoughtful engineering
              </h1>
              <p className="text-lg text-gray-600">
                A curated showcase of projects, skills, work experience, and client testimonials from a
                modern full-stack developer.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                  View Projects
                </a>
                <a
                  href="#experience"
                  className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-400"
                >
                  Work Experience
                </a>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <img
                src="https://imgix.cosmicjs.com/f5f33fc0-2698-11f1-8e38-f5dc12cfac40-photo-1500648767791-00dcc994a43e-1774257339157.jpg?w=900&h=900&fit=crop&auto=format,compress"
                alt="Developer workspace"
                width={450}
                height={450}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of build-ready products and platform experiences."
        />
        {!hasProjects ? (
          <p className="text-gray-500">No projects available yet.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Skills" subtitle="Core technologies and disciplines." />
        {!hasSkills ? (
          <p className="text-gray-500">No skills listed yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill: Skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        )}
      </section>

      <section id="experience" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Work Experience" subtitle="Roles that shaped my craft." />
          {!hasExperience ? (
            <p className="text-gray-500">No work experience available yet.</p>
          ) : (
            <div className="space-y-6">
              {experiences.map((experience: WorkExperience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Testimonials" subtitle="Feedback from teams and partners." />
        {!hasTestimonials ? (
          <p className="text-gray-500">No testimonials available yet.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial: Testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}