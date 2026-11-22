'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'

export default function RegisterPage() {
  const router = useRouter()
  const loginAsGuest = useAuthStore((s) => s.loginAsGuest)
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
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
        <p className="text-sm text-muted-foreground">Yeni hesap oluştur</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-4 rounded-xl border border-border bg-card p-6">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Kullanıcı Adı
          </label>
          <input
            required
            placeholder="gameboss_77"
            className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            E-posta
          </label>
          <input
            type="email"
            required
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
            placeholder="••••••••"
            className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-primary py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {loading ? 'Hesap oluşturuluyor…' : 'Kayıt Ol'}
        </button>
      </form>

      <p className="text-center text-xs text-muted-foreground">
        Zaten hesabın var mı?{' '}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Giriş yap
        </Link>
      </p>
    </div>
  )
}
