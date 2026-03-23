'use client'

import { useEffect } from 'react'

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error('Portfolio error:', error)
  }, [error])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-center">
      <h2 className="text-2xl font-semibold text-gray-900">Something went wrong</h2>
      <p className="text-gray-600">Please refresh the page or try again later.</p>
    </div>
  )
}