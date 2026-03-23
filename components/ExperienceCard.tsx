import type { WorkExperience } from '@/types'
import { formatDateRange } from '@/lib/format'

interface ExperienceCardProps {
  experience: WorkExperience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const logo = experience.metadata?.company_logo
  const dates = formatDateRange(experience.metadata?.start_date, experience.metadata?.end_date)

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-start">
      {logo ? (
        <img
          src={`${logo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
          alt={`${experience.metadata?.company_name} logo`}
          width={80}
          height={80}
          className="h-16 w-16 rounded-xl object-cover"
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
          🏢
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{experience.metadata?.role_title}</h3>
        <p className="text-sm text-gray-600">{experience.metadata?.company_name}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{dates}</p>
        <p className="text-sm text-gray-600">{experience.metadata?.summary}</p>
      </div>
    </article>
  )
}