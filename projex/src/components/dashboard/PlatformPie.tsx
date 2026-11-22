import { formatHours } from '@/utils/formatters'

interface PlatformPieProps {
  totalGames: number
  steamGames: number
  epicGames: number
  steamHours: number
  epicHours: number
}

export function PlatformPie({
  totalGames,
  steamGames,
  epicGames,
  steamHours,
  epicHours,
}: PlatformPieProps) {
  const steamPct = totalGames > 0 ? Math.round((steamGames / totalGames) * 100) : 0
  const epicPct  = 100 - steamPct

  // SVG stroke-dasharray trick (circumference ≈ 100 for r=15.9155)
  const steamDash = `${steamPct} ${100 - steamPct}`
  const epicDash  = `${epicPct} ${100 - epicPct}`

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-5 text-sm font-bold">Platform Dağılımı</h3>

      <div className="flex items-center gap-8">
        {/* SVG Pie */}
        <div className="relative h-28 w-28 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle cx="18" cy="18" r="15.9155" fill="none" stroke="hsl(var(--muted))" strokeWidth="3.5" />
            <circle
              cx="18" cy="18" r="15.9155"
              fill="none" stroke="#66c0f4" strokeWidth="3.5"
              strokeDasharray={steamDash} strokeLinecap="round"
            />
            <circle
              cx="18" cy="18" r="15.9155"
              fill="none" stroke="#0078f2" strokeWidth="3.5"
              strokeDasharray={epicDash}
              strokeDashoffset={`-${steamPct}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-extrabold">{totalGames}</span>
            <span className="text-[10px] text-muted-foreground">oyun</span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-sm bg-[#66c0f4]" />
              <span className="text-sm font-semibold text-[#66c0f4]">Steam</span>
            </div>
            <p className="pl-4 text-xs text-muted-foreground">
              {steamGames} oyun · {formatHours(steamHours)} sa ({steamPct}%)
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-sm bg-[#0078f2]" />
              <span className="text-sm font-semibold text-[#7ab3f5]">Epic Games</span>
            </div>
            <p className="pl-4 text-xs text-muted-foreground">
              {epicGames} oyun · {formatHours(epicHours)} sa ({epicPct}%)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
