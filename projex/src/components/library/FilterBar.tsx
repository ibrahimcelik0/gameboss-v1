'use client'
import { useLibraryStore } from '@/store/libraryStore'
import type { Platform, Genre, SortBy } from '@/types'

const PLATFORMS: { value: Platform | 'all'; label: string }[] = [
  { value: 'all',   label: 'Tümü' },
  { value: 'steam', label: 'Steam' },
  { value: 'epic',  label: 'Epic' },
]

const GENRES: { value: Genre | 'all'; label: string }[] = [
  { value: 'all',        label: 'Tüm Türler' },
  { value: 'action',     label: 'Aksiyon' },
  { value: 'rpg',        label: 'RPG' },
  { value: 'strategy',   label: 'Strateji' },
  { value: 'sports',     label: 'Spor' },
  { value: 'simulation', label: 'Simülasyon' },
  { value: 'puzzle',     label: 'Bulmaca' },
]

const SORTS: { value: SortBy; label: string }[] = [
  { value: 'playtime', label: 'En Çok Oynanan' },
  { value: 'recent',   label: 'Son Oynanan' },
  { value: 'alpha',    label: 'A–Z' },
]

export function FilterBar() {
  const { platformFilter, genreFilter, sortBy, setPlatformFilter, setGenreFilter, setSortBy } =
    useLibraryStore()

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Platform pills */}
      <div className="flex gap-1.5">
        {PLATFORMS.map((p) => (
          <button
            key={p.value}
            onClick={() => setPlatformFilter(p.value)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              platformFilter === p.value
                ? p.value === 'steam'
                  ? 'bg-[#1b2838] text-[#66c0f4]'
                  : p.value === 'epic'
                  ? 'bg-[#0f0f0f] text-[#7ab3f5]'
                  : 'bg-primary text-primary-foreground'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="h-4 w-px bg-border" />

      {/* Genre pills */}
      <div className="flex flex-wrap gap-1.5">
        {GENRES.map((g) => (
          <button
            key={g.value}
            onClick={() => setGenreFilter(g.value)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              genreFilter === g.value
                ? 'bg-primary/20 text-primary border border-primary/40'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* Sort — push to right */}
      <div className="ml-auto">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortBy)}
          className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
