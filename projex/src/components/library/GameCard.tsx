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

export function GameCard({ game, index }: { game: Game; index: number }) {
  const color = GENRE_COLORS[game.genre] ?? '#7c3aed'

  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/30">
      {/* Sıra numarası */}
      <span className="w-5 flex-shrink-0 text-center text-xs text-muted-foreground">{index + 1}</span>

      {/* Kapak */}
      <div
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-xl"
        style={{
          background: `linear-gradient(135deg, ${color}22, ${color}44)`,
          border: `1px solid ${color}33`,
        }}
      >
        {game.cover_emoji}
      </div>

      {/* İsim + platform */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{game.title}</p>
        <span
          className={`mt-0.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold ${
            game.platform === 'steam'
              ? 'bg-[#1b2838] text-[#66c0f4]'
              : 'bg-[#121212] text-[#7ab3f5]'
          }`}
        >
          {game.platform === 'steam' ? 'Steam' : 'Epic'}
        </span>
      </div>

      {/* Son oynama */}
      <p className="w-24 flex-shrink-0 text-right text-xs text-muted-foreground">
        {formatLastPlayed(game.last_played)}
      </p>

      {/* Oynama süresi */}
      <div className="w-20 flex-shrink-0 text-right">
        <p className="text-base font-extrabold leading-none" style={{ color }}>
          {formatHours(game.playtime_hours)}
        </p>
        <p className="mt-0.5 text-[10px] text-muted-foreground">saat</p>
      </div>
    </div>
  )
}
