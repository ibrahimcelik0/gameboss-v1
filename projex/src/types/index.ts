export type Platform = 'steam' | 'epic'
export type Genre = 'action' | 'rpg' | 'strategy' | 'sports' | 'simulation' | 'puzzle'
export type SortBy = 'playtime' | 'alpha' | 'recent'

export interface Game {
  id: string
  title: string
  platform: Platform
  playtime_hours: number
  last_played: string
  cover_emoji: string
  genre: Genre
  tags: string[]
}

export interface DayActivity {
  day: string
  steam: number
  epic: number
}

export interface UserStats {
  totalGames: number
  totalHours: number
  steamGames: number
  epicGames: number
  steamHours: number
  epicHours: number
  weeklyActivity: DayActivity[]
  recentlyPlayed: Game[]
}

export interface PlatformAccount {
  platform: Platform
  connected: boolean
  username: string
  gameCount: number
  totalHours: number
}
