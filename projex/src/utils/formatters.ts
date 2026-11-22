export function formatHours(hours: number): string {
  if (hours >= 1000) return `${(hours / 1000).toFixed(1)}k`
  return `${hours}`
}

export function formatLastPlayed(dateStr: string): string {
  const diff = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24)
  )
  if (diff === 0) return 'Bugün'
  if (diff === 1) return 'Dün'
  if (diff < 7) return `${diff} gün önce`
  if (diff < 30) return `${Math.floor(diff / 7)} hafta önce`
  return `${Math.floor(diff / 30)} ay önce`
}
