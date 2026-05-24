import * as React from 'react'
import { cn } from '~/lib/utils'

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: 'green' | 'yellow' | 'brown' | 'neutral'
}

const tones = {
  green: 'bg-secondary/15 text-primary ring-secondary/30',
  yellow: 'bg-accent/15 text-amber-900 ring-accent/30',
  brown: 'bg-earth/15 text-earth ring-earth/30',
  neutral: 'bg-muted text-muted-foreground ring-border',
}

export function Badge({ className, tone = 'green', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1',
        tones[tone],
        className,
      )}
      {...props}
    />
  )
}
