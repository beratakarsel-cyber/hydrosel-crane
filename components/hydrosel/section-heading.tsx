import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
