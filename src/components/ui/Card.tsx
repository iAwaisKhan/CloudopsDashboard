import { cn } from '@/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'glass-card p-5',
        onClick && 'cursor-pointer hover:border-slate-600 transition-colors duration-150',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-center justify-between mb-4', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      {icon && <span className="text-cloud-400">{icon}</span>}
      <h2 className="text-sm font-medium text-slate-200">{children}</h2>
    </div>
  )
}

export function StatCard({
  label,
  value,
  sub,
  icon,
  accent = false,
}: {
  label: string
  value: string | number
  sub?: string
  icon?: React.ReactNode
  accent?: boolean
}) {
  return (
    <div className={cn(
      'glass-card p-4 flex flex-col gap-1',
      accent && 'border-cloud-500/30'
    )}>
      <div className="flex items-center justify-between">
        <span className="module-heading">{label}</span>
        {icon && <span className="text-slate-500">{icon}</span>}
      </div>
      <span className={cn('metric-value text-xl', accent && 'text-cloud-400')}>{value}</span>
      {sub && <span className="text-xs text-slate-500">{sub}</span>}
    </div>
  )
}
