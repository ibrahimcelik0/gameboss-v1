import { WEEKLY_ACTIVITY } from '@/data/mock'

export function WeeklyChart() {
  const max = Math.max(...WEEKLY_ACTIVITY.map((d) => d.steam + d.epic), 1)

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-5 text-sm font-bold">Son 7 Günün Oynama Süresi (saat)</h3>

      <div className="flex h-32 items-end gap-3">
        {WEEKLY_ACTIVITY.map((d) => {
          const steamH = Math.round((d.steam / max) * 112)
          const epicH  = Math.round((d.epic  / max) * 112)
          const total  = (d.steam + d.epic).toFixed(1)
          return (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
              <span className="text-[10px] text-muted-foreground">{total}</span>
              <div className="flex w-full items-end justify-center gap-0.5" style={{ height: 112 }}>
                <div
                  className="w-3 rounded-t-sm bg-[#66c0f4] transition-all"
                  style={{ height: steamH }}
                />
                <div
                  className="w-3 rounded-t-sm bg-[#0078f2] transition-all"
                  style={{ height: epicH }}
                />
              </div>
              <span className="text-[11px] text-muted-foreground">{d.day}</span>
            </div>
          )
        })}
      </div>

      <div className="mt-4 flex justify-center gap-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="h-3 w-3 rounded-sm bg-[#66c0f4]" />
          Steam
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="h-3 w-3 rounded-sm bg-[#0078f2]" />
          Epic Games
        </div>
      </div>
    </div>
  )
}
