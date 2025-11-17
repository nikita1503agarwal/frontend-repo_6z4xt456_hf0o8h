import React from 'react'
import { cn } from '../../lib/utils/cn'

export default function GlassCard({ className, children, as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={cn(
        'glass rounded-xl p-6 border border-glass shadow-glass',
        'bg-[color:var(--glass-bg)] text-[color:var(--text-primary)]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
