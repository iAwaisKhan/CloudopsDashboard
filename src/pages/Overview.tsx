import { motion } from 'framer-motion'
import { HardDrive, Zap, Server, Cloud, ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { Card, CardHeader, CardTitle, StatCard } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useAppStore } from '@/store/useAppStore'

const modules = [
  {
    id: 's3' as const,
    icon: <HardDrive size={20} />,
    title: 'S3 File Vault',
    description: 'Upload, list, download, and delete files from an S3 bucket using presigned URLs.',
    tags: ['S3', 'IAM', 'CORS'],
    status: 'ready',
  },
  {
    id: 'lambda' as const,
    icon: <Zap size={20} />,
    title: 'Lambda Runner',
    description: 'Write and execute serverless functions in the browser. See cold start times and CloudWatch logs live.',
    tags: ['Lambda', 'API GW', 'CloudWatch'],
    status: 'ready',
  },
  {
    id: 'ec2' as const,
    icon: <Server size={20} />,
    title: 'EC2 Monitor',
    description: 'View running instances, start/stop them, and watch real-time CPU & network metrics.',
    tags: ['EC2', 'CloudWatch', 'IAM'],
    status: 'ready',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export default function Overview() {
  const { setActiveModule, apiBaseUrl } = useAppStore()
  const hasApi = Boolean(apiBaseUrl)

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8 animate-fade-in">
      {/* Hero */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Cloud size={18} className="text-cloud-400" />
          <span className="text-xs font-mono text-cloud-400 uppercase tracking-widest">CloudOps Dashboard</span>
        </div>
        <h1 className="text-2xl font-semibold text-white">Live AWS demo</h1>
        <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
          Three functional modules backed by real AWS APIs — S3, Lambda, and EC2.
          Each one demonstrates a cloud engineering skill recruiters look for.
        </p>
      </div>

      {/* API status banner */}
      {!hasApi && (
        <div className="flex items-start gap-3 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
          <Clock size={15} className="text-amber-400 mt-0.5 shrink-0" />
          <div className="text-sm text-amber-300/80 leading-relaxed">
            <span className="font-medium text-amber-300">API not configured.</span>
            {' '}Add <code className="font-mono text-xs bg-slate-800 px-1 py-0.5 rounded">VITE_API_BASE_URL</code> to
            your <code className="font-mono text-xs bg-slate-800 px-1 py-0.5 rounded">.env.local</code> file
            after deploying the Lambda layer in Week 3.
          </div>
        </div>
      )}

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard label="AWS Services"   value="6"    sub="wired end-to-end" icon={<Cloud size={14} />} />
        <StatCard label="Modules"        value="3"    sub="fully functional"  />
        <StatCard label="API Status"     value={hasApi ? 'Live' : 'Pending'} sub={hasApi ? 'Connected' : 'Add .env key'} accent={hasApi} />
        <StatCard label="Hosting"        value="Free" sub="Cloudflare Pages"  />
      </div>

      {/* Module cards */}
      <div>
        <p className="module-heading mb-4">Available modules</p>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-3 gap-4"
        >
          {modules.map((mod) => (
            <motion.div key={mod.id} variants={item}>
              <Card
                className="h-full flex flex-col hover:border-cloud-500/30 transition-colors"
                onClick={() => setActiveModule(mod.id)}
              >
                <CardHeader>
                  <CardTitle icon={mod.icon}>{mod.title}</CardTitle>
                  {mod.status === 'ready'
                    ? <Badge variant="success"><CheckCircle size={10} /> ready</Badge>
                    : <Badge variant="warning">soon</Badge>
                  }
                </CardHeader>
                <p className="text-xs text-slate-400 leading-relaxed flex-1">{mod.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-1.5 flex-wrap">
                    {mod.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" icon={<ArrowRight size={13} />} onClick={() => setActiveModule(mod.id)}>
                    Open
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Architecture note */}
      <Card>
        <CardHeader>
          <CardTitle icon={<Cloud size={14} />}>Architecture</CardTitle>
          <Badge variant="info">Recruiter note</Badge>
        </CardHeader>
        <div className="text-xs text-slate-400 font-mono space-y-1.5 leading-relaxed">
          <div className="flex gap-3"><span className="text-slate-600">Browser</span><span className="text-cloud-500">→</span><span>Cloudflare Pages CDN</span></div>
          <div className="flex gap-3"><span className="text-slate-600">API   </span><span className="text-cloud-500">→</span><span>API Gateway (HTTP) → Lambda (Node 20)</span></div>
          <div className="flex gap-3"><span className="text-slate-600">Storage</span><span className="text-cloud-500">→</span><span>S3 (presigned URLs, never expose keys)</span></div>
          <div className="flex gap-3"><span className="text-slate-600">Compute</span><span className="text-cloud-500">→</span><span>EC2 + CloudWatch metrics</span></div>
          <div className="flex gap-3"><span className="text-slate-600">CI/CD </span><span className="text-cloud-500">→</span><span>GitHub Actions → Cloudflare Pages</span></div>
        </div>
      </Card>
    </div>
  )
}
