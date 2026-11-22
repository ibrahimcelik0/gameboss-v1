import type { Game, DayActivity } from '@/types'

// Today: 2026-05-02 (Cumartesi)
// Son 7 gün: 04-26(Paz) 04-27(Pzt) 04-28(Sal) 04-29(Çar) 04-30(Per) 05-01(Cum) 05-02(Cmt)

export const STEAM_GAMES: Game[] = [
  // Cmt 05-02 steam 4h → CS2
  { id: 'steam-1',  title: 'Counter-Strike 2',            platform: 'steam', playtime_hours: 420,  last_played: '2026-05-02', cover_emoji: '🔫',  genre: 'action',  tags: ['competitive', 'fps']          },
  // Cum 05-01 steam 4.5h → RDR2 + Witcher 3
  { id: 'steam-2',  title: 'Red Dead Redemption 2',        platform: 'steam', playtime_hours: 183,  last_played: '2026-05-01', cover_emoji: '🤠',  genre: 'rpg',     tags: ['open-world', 'story-rich']    },
  { id: 'steam-3',  title: 'The Witcher 3',                platform: 'steam', playtime_hours: 154,  last_played: '2026-05-01', cover_emoji: '🗡️',  genre: 'rpg',     tags: ['open-world', 'story-rich']    },
  // Çar 04-29 steam 4h → GTA V + Cyberpunk
  { id: 'steam-4',  title: 'Grand Theft Auto V',           platform: 'steam', playtime_hours: 245,  last_played: '2026-04-29', cover_emoji: '🚗',  genre: 'action',  tags: ['open-world', 'story-rich']    },
  { id: 'steam-5',  title: 'Cyberpunk 2077',               platform: 'steam', playtime_hours: 87,   last_played: '2026-04-29', cover_emoji: '🤖',  genre: 'rpg',     tags: ['open-world', 'sci-fi']        },
  // Sal 04-28 steam 2h → The Last of Us Part I
  { id: 'steam-6',  title: 'The Last of Us Part I',        platform: 'steam', playtime_hours: 46,   last_played: '2026-04-28', cover_emoji: '🌿',  genre: 'action',  tags: ['story-rich', 'post-apocalyptic'] },
  // Paz 04-26 steam 2h → TLOU Part II
  { id: 'steam-7',  title: 'The Last of Us Part II',       platform: 'steam', playtime_hours: 39,   last_played: '2026-04-26', cover_emoji: '💔',  genre: 'action',  tags: ['story-rich', 'emotional']     },
  // Older
  { id: 'steam-8',  title: 'God of War',                   platform: 'steam', playtime_hours: 62,   last_played: '2026-04-18', cover_emoji: '🪓',  genre: 'action',  tags: ['story-rich', 'mythology']     },
  { id: 'steam-9',  title: 'Elden Ring',                   platform: 'steam', playtime_hours: 67,   last_played: '2026-04-10', cover_emoji: '⚔️',  genre: 'rpg',     tags: ['soulslike', 'open-world']     },
  { id: 'steam-10', title: 'Horizon Zero Dawn',            platform: 'steam', playtime_hours: 55,   last_played: '2026-03-25', cover_emoji: '🏹',  genre: 'rpg',     tags: ['open-world', 'sci-fi']        },
]

export const EPIC_GAMES: Game[] = [
  // Cmt 05-02 epic 2h → Ghost of Tsushima
  { id: 'epic-1',   title: 'Ghost of Tsushima',            platform: 'epic',  playtime_hours: 52,   last_played: '2026-05-02', cover_emoji: '⛩️',  genre: 'action',  tags: ['open-world', 'story-rich']    },
  // Per 04-30 epic 3h → GTA IV
  { id: 'epic-2',   title: 'Grand Theft Auto IV',          platform: 'epic',  playtime_hours: 78,   last_played: '2026-04-30', cover_emoji: '🗺️',  genre: 'action',  tags: ['open-world', 'story-rich']    },
  // Sal 04-28 epic 2.5h → Alan Wake 2
  { id: 'epic-3',   title: 'Alan Wake 2',                  platform: 'epic',  playtime_hours: 24,   last_played: '2026-04-28', cover_emoji: '🔦',  genre: 'action',  tags: ['horror', 'story-rich']        },
  // Pzt 04-27 epic 1.5h → Red Dead Redemption
  { id: 'epic-4',   title: 'Red Dead Redemption',          platform: 'epic',  playtime_hours: 65,   last_played: '2026-04-27', cover_emoji: '🐎',  genre: 'action',  tags: ['open-world', 'western']       },
  // Older
  { id: 'epic-5',   title: 'Death Stranding',              platform: 'epic',  playtime_hours: 41,   last_played: '2026-03-28', cover_emoji: '📦',  genre: 'simulation', tags: ['open-world', 'story-rich'] },
  { id: 'epic-6',   title: 'Control',                      platform: 'epic',  playtime_hours: 22,   last_played: '2026-04-05', cover_emoji: '💥',  genre: 'action',  tags: ['supernatural', 'story']       },
]

export const ALL_GAMES: Game[] = [...STEAM_GAMES, ...EPIC_GAMES]

// Paz 04-26: TLOU2 (steam 2h)
// Pzt 04-27: RDR1 (epic 1.5h)
// Sal 04-28: TLOU1 (steam 2h) + Alan Wake 2 (epic 2.5h)
// Çar 04-29: GTA V + Cyberpunk (steam 4h)
// Per 04-30: GTA IV (epic 3h)
// Cum 05-01: RDR2 + Witcher 3 (steam 4.5h)
// Cmt 05-02: CS2 (steam 4h) + Ghost of Tsushima (epic 2h)
export const WEEKLY_ACTIVITY: DayActivity[] = [
  { day: 'Paz', steam: 2.0, epic: 0.0 },
  { day: 'Pzt', steam: 0.0, epic: 1.5 },
  { day: 'Sal', steam: 2.0, epic: 2.5 },
  { day: 'Çar', steam: 4.0, epic: 0.0 },
  { day: 'Per', steam: 0.0, epic: 3.0 },
  { day: 'Cum', steam: 4.5, epic: 0.0 },
  { day: 'Cmt', steam: 4.0, epic: 2.0 },
]
