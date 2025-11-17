import React from 'react'
import NeonButton from './NeonButton'
import { AlertTriangle } from 'lucide-react'

export default function ErrorState({ title = 'Something went wrong', message = 'We couldn\'t load this section.', onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 gap-3">
      <AlertTriangle className="text-[color:var(--warning)]" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-[color:var(--text-secondary)]">{message}</p>
      {onRetry && (
        <NeonButton onClick={onRetry} aria-label="Retry">
          Retry
        </NeonButton>
      )}
    </div>
  )
}
