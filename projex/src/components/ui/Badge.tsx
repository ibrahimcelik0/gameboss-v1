import { cn } from '@/utils/cn'

const VARIANTS: Record<string, string> = {
  default:      'bg-primary/10 text-primary',
  secondary:    'bg-secondary text-secondary-foreground',
  outline:      'border border-border text-foreground',
  low:          'bg-green-500/10 text-green-500',
  medium:       'bg-yellow-500/10 text-yellow-500',
  high:         'bg-orange-500/10 text-orange-500',
  urgent:       'bg-red-500/10 text-red-500',
  planning:     'bg-blue-500/10 text-blue-400',
  active:       'bg-green-500/10 text-green-400',
  'on-hold':    'bg-yellow-500/10 text-yellow-400',
  completed:    'bg-purple-500/10 text-purple-400',
  todo:         'bg-slate-500/10 text-slate-400',
  'in-progress':'bg-blue-500/10 text-blue-400',
  review:       'bg-purple-500/10 text-purple-400',
  done:         'bg-green-500/10 text-green-400',
}

interface BadgeProps {
  children: React.ReactNode
  variant?: string
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold',
        VARIANTS[variant] ?? VARIANTS.default,
        className
      )}
    >
      {children}
    </span>
  )
}
