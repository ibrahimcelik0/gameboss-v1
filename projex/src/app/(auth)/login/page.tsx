'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'

export default function LoginPage() {
  const router = useRouter()
  const loginAsGuest = useAuthStore((s) => s.loginAsGuest)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    loginAsGuest()
    router.push('/dashboard')
  }

  const handleGuest = () => {
    loginAsGuest()
    router.push('/dashboard')
  }

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* Logo */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl font-extrabold text-primary-foreground">
          G
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight">Game Boss</h1>
        <p className="text-sm text-muted-foreground">Oyun kütüphanene giriş yap</p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-4 rounded-xl border border-border bg-card p-6">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            E-posta
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ornek@mail.com"
            className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Şifre
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-primary py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {loading ? 'Giriş yapılıyor…' : 'Giriş Yap'}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">veya</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Guest */}
      <button
        onClick={handleGuest}
        className="w-full rounded-xl border border-border bg-card py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
      >
        Misafir Olarak Devam Et
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Hesabın yok mu?{' '}
        <Link href="/register" className="font-semibold text-primary hover:underline">
          Kayıt ol
        </Link>
      </p>
    </div>
  )
}
