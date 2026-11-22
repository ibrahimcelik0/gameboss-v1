'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Library, Settings } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useAuthStore } from '@/store/authStore'

const NAV = [
  { href: '/dashboard', label: 'Dashboard',  icon: LayoutDashboard },
  { href: '/library',   label: 'Kütüphane',  icon: Library         },
  { href: '/settings',  label: 'Hesaplar',   icon: Settings        },
]

export function Sidebar() {
  const pathname = usePathname()
  const { steamConnected, epicConnected } = useAuthStore()

  return (
    <aside className="flex w-56 flex-shrink-0 flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-border px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground">
          G
        </div>
        <span className="text-base font-extrabold tracking-tight">Game Boss</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Platform badges */}
      <div className="space-y-2 border-t border-border p-3">
        <p className="px-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Bağlı Hesaplar
        </p>
        <div
          className={cn(
            'flex items-center justify-between rounded-lg border px-3 py-2 text-xs font-semibold transition-opacity',
            steamConnected
              ? 'border-[#2a475e] bg-[#1b2838]/60 text-[#66c0f4]'
              : 'border-border bg-muted/30 text-muted-foreground opacity-50'
          )}
        >
          <span>Steam</span>
          <span className={cn('h-2 w-2 rounded-full', steamConnected ? 'bg-[#66c0f4]' : 'bg-muted-foreground')} />
        </div>
        <div
          className={cn(
            'flex items-center justify-between rounded-lg border px-3 py-2 text-xs font-semibold transition-opacity',
            epicConnected
              ? 'border-[#0078f2]/40 bg-[#121212]/80 text-[#7ab3f5]'
              : 'border-border bg-muted/30 text-muted-foreground opacity-50'
          )}
        >
          <span>Epic Games</span>
          <span className={cn('h-2 w-2 rounded-full', epicConnected ? 'bg-[#0078f2]' : 'bg-muted-foreground')} />
        </div>
      </div>
    </aside>
  )
}
