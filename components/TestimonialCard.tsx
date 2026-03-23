import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const headshot = testimonial.metadata?.headshot

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-600">“{testimonial.metadata?.quote}”</p>
      <div className="flex items-center gap-3">
        {headshot ? (
          <img
            src={`${headshot.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
            alt={testimonial.metadata?.person_name}
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
            👤
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-gray-900">{testimonial.metadata?.person_name}</p>
          <p className="text-xs text-gray-500">{testimonial.metadata?.title_company}</p>
        </div>
      </div>
    </article>
  )
}