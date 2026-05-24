import { Badge } from '~/components/ui/badge'
import { cn } from '~/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-3xl',
        align === 'center' && 'text-center',
        align === 'left' && 'mx-0',
      )}
    >
      {eyebrow ? <Badge tone="yellow">{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-bold tracking-normal text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
