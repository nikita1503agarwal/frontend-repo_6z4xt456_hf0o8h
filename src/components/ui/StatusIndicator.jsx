import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '../../lib/utils/cn'

export default function StatusIndicator({ status = 'bullish', confidence = 72, className }) {
  const bullish = status?.toLowerCase() === 'bullish'
  return (
    <div className={cn('flex items-center gap-3', className)} aria-live="polite">
      {bullish ? (
        <TrendingUp className="w-8 h-8 text-[color:var(--success)]" aria-hidden />
      ) : (
        <TrendingDown className="w-8 h-8 text-[color:var(--error)]" aria-hidden />
      )}
      <div>
        <div className="text-sm text-[color:var(--text-secondary)]">Market Sentiment</div>
        <div className="text-base font-semibold">
          {bullish ? 'Bullish' : 'Bearish'} • {confidence}%
        </div>
      </div>
    </div>
  )
}
