import { cn } from '@/utils/cn'

interface AvatarProps {
  initials: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SIZES = {
  sm: 'h-6 w-6 text-[10px]',
  md: 'h-8 w-8 text-xs',
  lg: 'h-10 w-10 text-sm',
}

export function Avatar({ initials, color = '#7c3aed', size = 'md', className }: AvatarProps) {
  return (
    <div
      className={cn(
        'flex flex-shrink-0 items-center justify-center rounded-full font-bold text-white',
        SIZES[size],
        className
      )}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  )
}
