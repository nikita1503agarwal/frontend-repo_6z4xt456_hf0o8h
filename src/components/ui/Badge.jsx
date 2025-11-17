import React from 'react'
import { cn } from '../../lib/utils/cn'

const variants = {
  high: 'bg-[color:var(--error)]/15 text-[color:var(--error)] border-[color:var(--error)]/30',
  medium: 'bg-[color:var(--warning)]/15 text-[color:var(--warning)] border-[color:var(--warning)]/30',
  low: 'bg-[color:var(--neon-cyan)]/15 text-[color:var(--neon-cyan)] border-[color:var(--neon-cyan)]/30',
}

export default function Badge({ variant = 'low', className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-3 py-1 text-xs font-medium border',
        variants[variant] || variants.low,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )}
