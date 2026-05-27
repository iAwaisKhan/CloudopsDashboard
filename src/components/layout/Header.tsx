import { useTheme } from '@/hooks/useTheme'
import { useAppStore } from '@/store/useAppStore'
import { Sun, Moon, Wifi, WifiOff } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

const moduleNames: Record<string, string> = {
  overview: 'Overview',
  s3:       'S3 File Vault',
  lambda:   'Lambda Runner',
  ec2:      'EC2 Monitor',
}

interface HeaderProps {
  apiConnected?: boolean
}

export function Header({ apiConnected = false }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()
  const { activeModule } = useAppStore()

  return (
    <header className="h-14 shrink-0 flex items-center justify-between px-6
                       border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-500">CloudOps</span>
        <span className="text-slate-700">/</span>
        <span className="text-slate-200 font-medium">{moduleNames[activeModule]}</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* API connection status */}
        <div className={cn(
          'flex items-center gap-1.5 text-xs font-mono',
          apiConnected ? 'text-emerald-400' : 'text-slate-600'
        )}>
          {apiConnected ? <Wifi size={12} /> : <WifiOff size={12} />}
          {apiConnected ? 'API connected' : 'No API'}
        </div>

        {/* Region badge */}
        <span className="hidden sm:block text-xs font-mono text-slate-600 border border-slate-800
                         px-2 py-1 rounded">
          ap-south-1
        </span>

        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
        </Button>
      </div>
    </header>
  )
}
