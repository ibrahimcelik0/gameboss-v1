import type { Metadata } from 'next'
import './globals.css'
import { QueryProvider } from '@/components/shared/QueryProvider'

export const metadata: Metadata = {
  title: 'Game Boss — Gaming Library',
  description: 'Steam ve Epic Games kütüphanenizi tek yerden yönetin',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="dark">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
