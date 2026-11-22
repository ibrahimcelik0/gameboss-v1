import { cn } from '@/utils/cn'

interface PageContainerProps {
  title?: string
  description?: string
  action?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function PageContainer({
  title,
  description,
  action,
  children,
  className,
}: PageContainerProps) {
  return (
    <div className={cn('space-y-6 p-6', className)}>
      {(title || action) && (
        <div className="flex items-center justify-between">
          <div>
            {title && <h1 className="text-2xl font-bold">{title}</h1>}
            {description && (
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  )
}
