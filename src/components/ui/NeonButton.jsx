import React from 'react'
import { cn } from '../../lib/utils/cn'

export default function NeonButton({ className, children, as: Tag = 'button', ...props }) {
  return (
    <Tag
      className={cn(
        'relative inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold',
        'bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-purple-light)]',
        'text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300',
        'hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] hover:scale-[1.05]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--neon-purple)]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
