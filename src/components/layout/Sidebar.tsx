import { cn } from '@/utils/cn'
import { useAppStore, type ActiveModule } from '@/store/useAppStore'
import { Cloud, Server, Zap, HardDrive, LayoutDashboard, ExternalLink } from 'lucide-react'

interface NavItem {
  id: ActiveModule
  label: string
  icon: React.ReactNode
  badge?: string
}

const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview',        icon: <LayoutDashboard size={16} /> },
  { id: 's3',       label: 'S3 File Vault',   icon: <HardDrive size={16} />,  badge: 'Module 1' },
  { id: 'lambda',   label: 'Lambda Runner',   icon: <Zap size={16} />,        badge: 'Module 2' },
  { id: 'ec2',      label: 'EC2 Monitor',     icon: <Server size={16} />,     badge: 'Module 3' },
]

export function Sidebar() {
  const { activeModule, setActiveModule } = useAppStore()

  return (
    <aside className="w-[var(--sidebar-width)] shrink-0 h-screen sticky top-0 flex flex-col
                      bg-slate-900 border-r border-slate-800">
      {/* Logo */}
      <div className="h-14 flex items-center gap-2.5 px-5 border-b border-slate-800">
        <div className="w-7 h-7 rounded-lg bg-cloud-500/15 flex items-center justify-center">
          <Cloud size={14} className="text-cloud-400" />
        </div>
        <span className="text-sm font-semibold text-white tracking-tight">CloudOps</span>
        <span className="text-xs text-slate-600 font-mono ml-auto">v0.1</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5">
        <p className="module-heading px-2 py-2 mb-1">Modules</p>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveModule(item.id)}
            className={cn(
              'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm',
              'transition-all duration-150 text-left',
              activeModule === item.id
                ? 'bg-cloud-500/15 text-cloud-300 border border-cloud-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            )}
          >
            <span className={activeModule === item.id ? 'text-cloud-400' : ''}>{item.icon}</span>
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="text-[10px] font-mono text-slate-600 hidden lg:block">{item.badge}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-slate-800">
        <a
          href="https://github.com/yourusername/cloudops-dashboard"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-slate-500
                     hover:text-slate-300 hover:bg-slate-800 transition-colors"
        >
          <ExternalLink size={13} />
          View source on GitHub
        </a>
      </div>
    </aside>
  )
}
