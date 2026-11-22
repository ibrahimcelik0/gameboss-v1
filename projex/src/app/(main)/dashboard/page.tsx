'use client'
import { PageContainer } from '@/components/shared/PageContainer'
import { StatsRow } from '@/components/dashboard/StatsRow'
import { WeeklyChart } from '@/components/dashboard/WeeklyChart'
import { PlatformPie } from '@/components/dashboard/PlatformPie'
import { RecentGames } from '@/components/dashboard/RecentGames'
import { useStats } from '@/hooks/useStats'
import { useAuthStore } from '@/store/authStore'

export default function DashboardPage() {
  const stats = useStats()
  const { steamConnected, epicConnected } = useAuthStore()

  if (stats.isLoading) {
    return (
      <PageContainer>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-28 animate-pulse rounded-xl border border-border bg-card" />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-56 animate-pulse rounded-xl border border-border bg-card" />
            <div className="h-56 animate-pulse rounded-xl border border-border bg-card" />
          </div>
        </div>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <StatsRow
        totalGames={stats.totalGames}
        totalHours={stats.totalHours}
        steamConnected={steamConnected}
        epicConnected={epicConnected}
      />

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <WeeklyChart />
        </div>
        <PlatformPie
          totalGames={stats.totalGames}
          steamGames={stats.steamGames}
          epicGames={stats.epicGames}
          steamHours={stats.steamHours}
          epicHours={stats.epicHours}
        />
      </div>

      <div>
        <h2 className="mb-3 text-sm font-bold">Son Oynananlar</h2>
        <RecentGames games={stats.recentlyPlayed} />
      </div>
    </PageContainer>
  )
}
