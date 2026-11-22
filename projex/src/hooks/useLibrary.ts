import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { gameService } from '@/services/gameService'
import { useAuthStore } from '@/store/authStore'
import { useLibraryStore } from '@/store/libraryStore'

export const gameKeys = {
  all: ['games'] as const,
}

export function useLibrary() {
  const { data: allGames = [], isLoading } = useQuery({
    queryKey: gameKeys.all,
    queryFn: gameService.getAllGames,
  })

  const { steamConnected, epicConnected } = useAuthStore()
  const { platformFilter, genreFilter, search, sortBy } = useLibraryStore()

  const games = useMemo(() => {
    let list = allGames.filter((g) =>
      g.platform === 'steam' ? steamConnected : epicConnected
    )

    if (platformFilter !== 'all') list = list.filter((g) => g.platform === platformFilter)
    if (genreFilter !== 'all') list = list.filter((g) => g.genre === genreFilter)
    if (search) list = list.filter((g) => g.title.toLowerCase().includes(search.toLowerCase()))

    if (sortBy === 'alpha') return [...list].sort((a, b) => a.title.localeCompare(b.title))
    if (sortBy === 'recent') return [...list].sort((a, b) => b.last_played.localeCompare(a.last_played))
    return [...list].sort((a, b) => b.playtime_hours - a.playtime_hours)
  }, [allGames, steamConnected, epicConnected, platformFilter, genreFilter, search, sortBy])

  return { games, isLoading }
}
