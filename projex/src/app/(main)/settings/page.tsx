'use client'
import { PageContainer } from '@/components/shared/PageContainer'
import { useAuthStore } from '@/store/authStore'
import { formatHours } from '@/utils/formatters'
import { ALL_GAMES } from '@/data/mock'

function PlatformCard({
  platform,
  connected,
  connecting,
  username,
  onToggle,
}: {
  platform: 'steam' | 'epic'
  connected: boolean
  connecting: boolean
  username: string
  onToggle: () => void
}) {
  const isSteam = platform === 'steam'
  const games = ALL_GAMES.filter((g) => g.platform === platform)
  const hours = games.reduce((s, g) => s + g.playtime_hours, 0)

  return (
    <div
      className={`rounded-xl border p-5 transition-colors ${
        connected ? 'border-border bg-card' : 'border-border/40 bg-card/50'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg font-black ${
              isSteam ? 'bg-[#1b2838] text-[#66c0f4]' : 'bg-[#121212] text-[#7ab3f5]'
            }`}
          >
            {isSteam ? 'S' : 'E'}
          </div>
          <div>
            <p className="font-semibold">{isSteam ? 'Steam' : 'Epic Games'}</p>
            {connected ? (
              <p className="text-xs text-muted-foreground">@{username}</p>
            ) : (
              <p className="text-xs text-muted-foreground">Bağlı değil</p>
            )}
          </div>
        </div>

        <button
          onClick={onToggle}
          disabled={connecting}
          className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-bold transition-all disabled:opacity-70 ${
            connected
              ? 'bg-destructive/10 text-destructive hover:bg-destructive/20'
              : isSteam
              ? 'bg-[#1b2838] text-[#66c0f4] hover:bg-[#1b2838]/80'
              : 'bg-[#121212] text-[#7ab3f5] hover:bg-[#1a1a1a]'
          }`}
        >
          {connecting && (
            <svg className="h-3 w-3 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
          {connecting ? 'Bağlanıyor…' : connected ? 'Bağlantıyı Kes' : 'Bağlan'}
        </button>
      </div>

      {connected && (
        <div className="mt-4 flex gap-6 border-t border-border pt-4">
          <div>
            <p className="text-xl font-extrabold">{games.length}</p>
            <p className="text-xs text-muted-foreground">oyun</p>
          </div>
          <div>
            <p className="text-xl font-extrabold">{formatHours(hours)}</p>
            <p className="text-xs text-muted-foreground">saat</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SettingsPage() {
  const {
    steamConnected, epicConnected,
    steamConnecting, epicConnecting,
    steamUsername, epicUsername,
    toggleSteam, toggleEpic,
  } = useAuthStore()

  return (
    <PageContainer>
      <div className="max-w-xl space-y-6">
        <div>
          <h2 className="text-base font-bold">Platform Bağlantıları</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Oyun kütüphanelerini görüntülemek için hesaplarını bağla
          </p>
        </div>

        <div className="space-y-3">
          <PlatformCard
            platform="steam"
            connected={steamConnected}
            connecting={steamConnecting}
            username={steamUsername}
            onToggle={toggleSteam}
          />
          <PlatformCard
            platform="epic"
            connected={epicConnected}
            connecting={epicConnecting}
            username={epicUsername}
            onToggle={toggleEpic}
          />
        </div>

        <div className="rounded-xl border border-border bg-card p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Not</p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Bu bir demo uygulamasıdır. Gerçek Steam/Epic API entegrasyonu için OAuth akışı gereklidir.
            Şu anda veriler mock data ile gösterilmektedir.
          </p>
        </div>
      </div>
    </PageContainer>
  )
}
