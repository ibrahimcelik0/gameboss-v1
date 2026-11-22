import type { Game } from '@/types'
import { STEAM_GAMES, EPIC_GAMES, ALL_GAMES } from '@/data/mock'

const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

export const gameService = {
  getAllGames: async (): Promise<Game[]> => {
    await delay(500)
    return ALL_GAMES
  },
  getSteamGames: async (): Promise<Game[]> => {
    await delay(400)
    return STEAM_GAMES
  },
  getEpicGames: async (): Promise<Game[]> => {
    await delay(400)
    return EPIC_GAMES
  },
}
