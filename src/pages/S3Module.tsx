import { HardDrive } from 'lucide-react'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function S3Module() {
  return (
    <div className="p-6 max-w-5xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle icon={<HardDrive size={16} />}>S3 File Vault</CardTitle>
          <Badge variant="warning">Week 3 — coming soon</Badge>
        </CardHeader>
        <p className="text-sm text-slate-400 leading-relaxed">
          This module will let you upload files directly to S3 using presigned URLs,
          list bucket contents, download, and delete — all without exposing AWS credentials
          to the browser.
        </p>
        <div className="mt-4 p-3 bg-slate-900 rounded-lg font-mono text-xs text-slate-500 space-y-1">
          <div>POST /api/s3/presign  → generate upload URL</div>
          <div>GET  /api/s3/list     → list objects</div>
          <div>DELETE /api/s3/:key  → delete object</div>
        </div>
      </Card>
    </div>
  )
}
