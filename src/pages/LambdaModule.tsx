import { Zap } from 'lucide-react'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function LambdaModule() {
  return (
    <div className="p-6 max-w-5xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle icon={<Zap size={16} />}>Lambda Function Runner</CardTitle>
          <Badge variant="warning">Week 5 — coming soon</Badge>
        </CardHeader>
        <p className="text-sm text-slate-400 leading-relaxed">
          Write a JavaScript or Python snippet in the browser editor, hit Run, and
          watch it execute on Lambda. Cold start time, billed duration, and
          CloudWatch logs stream back in real time.
        </p>
        <div className="mt-4 p-3 bg-slate-900 rounded-lg font-mono text-xs text-slate-500 space-y-1">
          <div>POST /api/lambda/run  → invoke sandboxed Lambda</div>
          <div>GET  /api/lambda/logs → tail CloudWatch log stream</div>
        </div>
      </Card>
    </div>
  )
}
