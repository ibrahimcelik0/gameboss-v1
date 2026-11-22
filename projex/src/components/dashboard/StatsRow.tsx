import { formatHours } from '@/utils/formatters'

interface StatsRowProps {
  totalGames: number
  totalHours: number
  steamConnected: boolean
  epicConnected: boolean
}

function StatBox({
  label,
  value,
  sub,
  accent,
}: {
  label: string
  value: string
  sub: string
  accent?: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-extrabold" style={accent ? { color: accent } : undefined}>
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
    </div>
  )
}

export function StatsRow({ totalGames, totalHours, steamConnected, epicConnected }: StatsRowProps) {
  const connected = [steamConnected && 'Steam', epicConnected && 'Epic'].filter(Boolean).join(' · ') || 'Bağlı yok'

  return (
    <div className="grid grid-cols-3 gap-4">
      <StatBox
        label="Toplam Oyun Sayısı"
        value={String(totalGames)}
        sub="kütüphanendeki oyunlar"
      />
      <StatBox
        label="Toplam Oynama Süresi"
        value={`${formatHours(totalHours)} sa`}
        sub="tüm platformlar"
      />
      <StatBox
        label="Bağlı Platformlar"
        value={String([steamConnected, epicConnected].filter(Boolean).length)}
        sub={connected}
        accent="hsl(var(--primary))"
      />
    </div>
  )
}
