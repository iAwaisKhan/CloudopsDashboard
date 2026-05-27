import { Server } from 'lucide-react'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function EC2Module() {
  return (
    <div className="p-6 max-w-5xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle icon={<Server size={16} />}>EC2 Instance Monitor</CardTitle>
          <Badge variant="warning">Week 6 — coming soon</Badge>
        </CardHeader>
        <p className="text-sm text-slate-400 leading-relaxed">
          List your EC2 instances, see real-time CPU and network metrics from CloudWatch,
          and start or stop instances with one click. Status badges refresh every 10 seconds.
        </p>
        <div className="mt-4 p-3 bg-slate-900 rounded-lg font-mono text-xs text-slate-500 space-y-1">
          <div>GET  /api/ec2/instances        → describe instances</div>
          <div>POST /api/ec2/:id/start        → start instance</div>
          <div>POST /api/ec2/:id/stop         → stop instance</div>
          <div>GET  /api/ec2/:id/metrics      → CloudWatch data</div>
        </div>
      </Card>
    </div>
  )
}
