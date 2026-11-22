import { create } from 'zustand'
import type { Platform, Genre, SortBy } from '@/types'

interface LibraryState {
  platformFilter: Platform | 'all'
  genreFilter: Genre | 'all'
  search: string
  sortBy: SortBy
  setPlatformFilter: (f: Platform | 'all') => void
  setGenreFilter: (f: Genre | 'all') => void
  setSearch: (s: string) => void
  setSortBy: (s: SortBy) => void
  reset: () => void
}

export const useLibraryStore = create<LibraryState>((set) => ({
  platformFilter: 'all',
  genreFilter: 'all',
  search: '',
  sortBy: 'playtime',
  setPlatformFilter: (f) => set({ platformFilter: f }),
  setGenreFilter: (f) => set({ genreFilter: f }),
  setSearch: (s) => set({ search: s }),
  setSortBy: (s) => set({ sortBy: s }),
  reset: () => set({ platformFilter: 'all', genreFilter: 'all', search: '', sortBy: 'playtime' }),
}))
