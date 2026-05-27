import { lazy, Suspense } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'
import { Loader2 } from 'lucide-react'

const Overview     = lazy(() => import('@/pages/Overview'))
const S3Module     = lazy(() => import('@/pages/S3Module'))
const LambdaModule = lazy(() => import('@/pages/LambdaModule'))
const EC2Module    = lazy(() => import('@/pages/EC2Module'))

function PageLoader() {
  return (
    <div className="flex-1 flex items-center justify-center text-slate-600">
      <Loader2 size={20} className="animate-spin" />
    </div>
  )
}

export default function App() {
  const { activeModule, apiBaseUrl } = useAppStore()
  const hasApi = Boolean(apiBaseUrl)

  const Page = {
    overview: Overview,
    s3:       S3Module,
    lambda:   LambdaModule,
    ec2:      EC2Module,
  }[activeModule]

  return (
    <div className="flex h-screen overflow-hidden bg-[#0d1117] text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header apiConnected={hasApi} />
        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<PageLoader />}>
            <Page />
          </Suspense>
        </main>
      </div>
    </div>
  )
}
