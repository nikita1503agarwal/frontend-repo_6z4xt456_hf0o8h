import React from 'react'
import { cn } from '../../lib/utils/cn'

export default function Skeleton({ className, lines = 0, height = 12, ...props }) {
  if (lines > 0) {
    return (
      <div className={cn('space-y-2', className)} {...props}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="w-full bg-white/5 rounded h-3 animate-pulse" />
        ))}
      </div>
    )
  }
  return <div className={cn('bg-white/5 rounded animate-pulse', `h-[${height}px]`, className)} {...props} />
}
