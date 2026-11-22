import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { gameService } from '@/services/gameService'
import { useAuthStore } from '@/store/authStore'
import { gameKeys } from './useLibrary'

export function useStats() {
  const { data: allGames = [], isLoading } = useQuery({
    queryKey: gameKeys.all,
    queryFn: gameService.getAllGames,
  })

  const { steamConnected, epicConnected } = useAuthStore()

  const stats = useMemo(() => {
    const visible = allGames.filter((g) =>
      g.platform === 'steam' ? steamConnected : epicConnected
    )
    const steamGames = visible.filter((g) => g.platform === 'steam')
    const epicGames  = visible.filter((g) => g.platform === 'epic')

    return {
      totalGames:  visible.length,
      totalHours:  visible.reduce((a, g) => a + g.playtime_hours, 0),
      steamGames:  steamGames.length,
      epicGames:   epicGames.length,
      steamHours:  steamGames.reduce((a, g) => a + g.playtime_hours, 0),
      epicHours:   epicGames.reduce((a, g) => a + g.playtime_hours, 0),
      recentlyPlayed: [...visible]
        .sort((a, b) => b.last_played.localeCompare(a.last_played))
        .slice(0, 5),
    }
  }, [allGames, steamConnected, epicConnected])

  return { ...stats, isLoading }
}
