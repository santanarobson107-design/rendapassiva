import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DashboardCardProps {
  title: string
  value: string
  icon: LucideIcon
  color: string
  change?: string
}

export function DashboardCard({
  title,
  value,
  icon: Icon,
  color,
  change,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {change && (
            <p className="text-sm text-green-600 font-medium mt-2">{change}</p>
          )}
        </div>
        <div className={cn('p-3 rounded-lg text-white', `bg-gradient-to-br ${color}`)}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  )
}