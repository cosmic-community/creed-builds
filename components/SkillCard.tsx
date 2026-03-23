import type { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  const level = getMetafieldValue(skill.metadata?.skill_level)

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{skill.metadata?.skill_name}</h3>
          <p className="text-sm text-gray-500">{level}</p>
        </div>
        <span className="text-2xl">{skill.metadata?.icon ?? '🧩'}</span>
      </div>
    </div>
  )
}