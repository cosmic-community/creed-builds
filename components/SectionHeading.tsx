interface SectionHeadingProps {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Section</p>
      <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  )
}