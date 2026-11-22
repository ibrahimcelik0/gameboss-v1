import { create } from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  steamConnected: boolean
  epicConnected: boolean
  steamConnecting: boolean
  epicConnecting: boolean
  steamUsername: string
  epicUsername: string
  loginAsGuest: () => void
  logout: () => void
  toggleSteam: () => Promise<void>
  toggleEpic: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  steamConnected: true,
  epicConnected: true,
  steamConnecting: false,
  epicConnecting: false,
  steamUsername: 'gameboss_77',
  epicUsername: 'GameBoss',

  loginAsGuest: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),

  toggleSteam: async () => {
    const { steamConnected } = get()
    if (steamConnected) {
      set({ steamConnected: false })
    } else {
      set({ steamConnecting: true })
      await new Promise((r) => setTimeout(r, 1200))
      set({ steamConnecting: false, steamConnected: true })
    }
  },

  toggleEpic: async () => {
    const { epicConnected } = get()
    if (epicConnected) {
      set({ epicConnected: false })
    } else {
      set({ epicConnecting: true })
      await new Promise((r) => setTimeout(r, 1200))
      set({ epicConnecting: false, epicConnected: true })
    }
  },
}))
