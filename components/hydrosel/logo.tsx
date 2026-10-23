import { cn } from '@/lib/utils'

function Spiral({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="5" className="text-foreground" />
      <path d="M20 9.5a10.5 10.5 0 1 1-10.2 13" stroke="var(--primary)" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M20 14a6 6 0 1 1-5.8 7.5" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="20" r="2" fill="var(--primary)" />
    </svg>
  )
}

export function Logo({ className, size = 'md' }: { className?: string; size?: 'md' | 'lg' }) {
  const lg = size === 'lg'
  return (
    <a href="#home" className={cn('inline-flex items-start gap-2', className)} aria-label="Hydrosel Crane anasayfa">
      <span className="flex flex-col">
        <span
          className={cn(
            'relative flex items-center font-sans font-black lowercase leading-none tracking-tighter text-foreground',
            lg ? 'text-4xl' : 'text-[1.7rem]',
          )}
        >
          hydr
          <Spiral className={cn('mx-px shrink-0', lg ? 'size-[1.85rem]' : 'size-[1.35rem]')} />
          sel
          <sup className="ml-0.5 self-start text-[0.4em] font-medium">®</sup>
        </span>
        <span className="mt-1 flex items-center gap-1.5">
          <span className="h-0.5 w-4 bg-primary" aria-hidden="true" />
          <span className={cn('font-sans font-bold uppercase tracking-wider text-muted-foreground', lg ? 'text-[0.65rem]' : 'text-[0.5rem]')}>
            GÜCÜN KONTROL MERKEZİ
          </span>
        </span>
      </span>
      <span
        className={cn(
          'rounded-md bg-primary font-sans font-bold lowercase leading-none tracking-tight text-white',
          lg ? 'px-2.5 py-1.5 text-3xl' : 'px-2 py-1 text-xl',
        )}
      >
        crane
      </span>
    </a>
  )
}
