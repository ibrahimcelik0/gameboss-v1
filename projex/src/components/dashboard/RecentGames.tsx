import { formatHours, formatLastPlayed } from '@/utils/formatters'
import type { Game } from '@/types'

const GENRE_COLORS: Record<string, string> = {
  action:     '#ef4444',
  rpg:        '#8b5cf6',
  strategy:   '#3b82f6',
  sports:     '#22c55e',
  simulation: '#14b8a6',
  puzzle:     '#f97316',
}

export function RecentGames({ games }: { games: Game[] }) {
  return (
    <div className="space-y-2">
      {games.map((game) => (
        <div
          key={game.id}
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary/30"
        >
          {/* Cover */}
          <div
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg text-2xl"
            style={{
              background: `linear-gradient(135deg, ${GENRE_COLORS[game.genre] ?? '#7c3aed'}22, ${GENRE_COLORS[game.genre] ?? '#7c3aed'}44)`,
              border: `1px solid ${GENRE_COLORS[game.genre] ?? '#7c3aed'}33`,
            }}
          >
            {game.cover_emoji}
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{game.title}</p>
            <div className="mt-0.5 flex items-center gap-2">
              <span
                className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                  game.platform === 'steam'
                    ? 'bg-[#1b2838] text-[#66c0f4]'
                    : 'bg-[#121212] text-[#7ab3f5]'
                }`}
              >
                {game.platform === 'steam' ? 'Steam' : 'Epic'}
              </span>
              <span className="text-xs text-muted-foreground">{formatLastPlayed(game.last_played)}</span>
            </div>
          </div>

          {/* Playtime */}
          <div className="text-right">
            <p className="text-lg font-extrabold leading-none">{formatHours(game.playtime_hours)}</p>
            <p className="text-[10px] text-muted-foreground">saat</p>
          </div>
        </div>
      ))}
    </div>
  )
}
