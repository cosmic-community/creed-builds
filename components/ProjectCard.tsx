import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const image = project.metadata?.featured_image
  const skills = project.metadata?.related_skills

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {image ? (
        <img
          src={`${image.imgix_url}?w=1200&h=700&fit=crop&auto=format,compress`}
          alt={project.title}
          width={600}
          height={350}
          className="h-52 w-full object-cover"
        />
      ) : (
        <div className="flex h-52 items-center justify-center bg-gray-100 text-gray-400">
          No image
        </div>
      )}
      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{project.metadata?.project_name}</h3>
          <p className="mt-2 text-sm text-gray-600">{project.metadata?.summary}</p>
        </div>
        {skills && skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
              >
                {skill.metadata?.skill_name ?? skill.title}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400">No related skills listed.</p>
        )}
        {project.metadata?.live_url ? (
          <a
            href={project.metadata.live_url}
            className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Project →
          </a>
        ) : null}
      </div>
    </article>
  )
}