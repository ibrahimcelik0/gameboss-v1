'use client'
import { Search, LogOut, Settings } from 'lucide-react'
import { useLibraryStore } from '@/store/libraryStore'
import { useAuthStore } from '@/store/authStore'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const PAGE_TITLES: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/library':   'Kütüphane',
  '/settings':  'Hesap Bağlantıları',
}

export function Topbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { search, setSearch } = useLibraryStore()
  const { logout } = useAuthStore()
  const title = PAGE_TITLES[pathname] ?? 'Game Boss'
  const isLibrary = pathname === '/library'

  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <header className="flex h-16 flex-shrink-0 items-center gap-4 border-b border-border bg-card px-6">
      <h1 className="text-lg font-bold">{title}</h1>

      <div className="ml-auto flex items-center gap-3">
        {isLibrary && (
          <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Oyun ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-44 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        )}

        {/* Avatar + dropdown */}
        <div ref={ref} className="relative">
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            GB
          </button>

          {open && (
            <div className="absolute right-0 top-10 z-50 w-44 rounded-xl border border-border bg-card shadow-lg py-1">
              <p className="px-3 py-2 text-xs font-semibold text-muted-foreground border-b border-border mb-1">
                gameboss_77
              </p>
              <Link
                href="/settings"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent/50 transition-colors"
              >
                <Settings className="h-3.5 w-3.5" />
                Hesap Ayarları
              </Link>
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
                Çıkış Yap
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
