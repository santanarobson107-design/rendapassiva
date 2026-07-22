'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Calendar,
  TrendingUp,
  BarChart3,
  Building2,
  Search,
  Briefcase,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Dividendos', href: '/dividends', icon: Calendar },
  { name: 'Simulador', href: '/simulator', icon: TrendingUp },
  { name: 'Ações', href: '/stocks', icon: BarChart3 },
  { name: 'FIIs', href: '/fiis', icon: Building2 },
  { name: 'Buscar', href: '/search', icon: Search },
  { name: 'Carteira', href: '/wallet', icon: Briefcase },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gradient-to-b from-blue-900 via-blue-800 to-green-700 text-white flex flex-col hidden md:flex shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">Renda Passiva</h1>
        <p className="text-sm text-blue-100 mt-1">Dividendos B3</p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-white text-blue-900 font-semibold'
                  : 'text-blue-100 hover:bg-white/10'
              )}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-blue-700">
        <p className="text-xs text-blue-100">© 2024 Renda Passiva</p>
      </div>
    </div>
  )
}