'use client'
import { PageContainer } from '@/components/shared/PageContainer'
import { FilterBar } from '@/components/library/FilterBar'
import { GameCard } from '@/components/library/GameCard'
import { useLibrary } from '@/hooks/useLibrary'

export default function LibraryPage() {
  const { games, isLoading } = useLibrary()

  return (
    <PageContainer>
      <FilterBar />

      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-16 animate-pulse rounded-xl border border-border bg-card" />
          ))}
        </div>
      ) : games.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-4xl">🎮</p>
          <p className="mt-3 text-sm font-semibold">Oyun bulunamadı</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Filtreleri değiştirmeyi veya arama terimini düzenlemeyi deneyin
          </p>
        </div>
      ) : (
        <>
          <p className="text-xs text-muted-foreground">{games.length} oyun</p>
          <div className="space-y-1.5">
            {games.map((game, i) => (
              <GameCard key={game.id} game={game} index={i} />
            ))}
          </div>
        </>
      )}
    </PageContainer>
  )
}
