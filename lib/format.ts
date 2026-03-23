export function formatDateRange(startDate?: string, endDate?: string): string {
  if (!startDate) return 'Date unavailable'

  const start = new Date(startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  })

  if (!endDate) {
    return `${start} — Present`
  }

  const end = new Date(endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  })

  return `${start} — ${end}`
}