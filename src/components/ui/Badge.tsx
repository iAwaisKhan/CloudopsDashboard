import { cn } from '@/utils/cn'

type Variant = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'muted'

interface BadgeProps {
  variant?: Variant
  children: React.ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  default: 'bg-slate-700 text-slate-200',
  success: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20',
  warning: 'bg-amber-500/15 text-amber-400 border border-amber-500/20',
  danger:  'bg-red-500/15 text-red-400 border border-red-500/20',
  info:    'bg-blue-500/15 text-blue-400 border border-blue-500/20',
  muted:   'bg-slate-800 text-slate-500 border border-slate-700/50',
}

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium font-mono',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
