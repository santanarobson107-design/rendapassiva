'use client'

import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  icon: LucideIcon
  title: string
  value: string | number
  description?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatCard({
  icon: Icon,
  title,
  value,
  description,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn('hover:shadow-lg transition-shadow', className)}>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold mt-2">{value}</p>
            {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
            {trend && (
              <p className={cn(
                'text-xs font-semibold mt-2',
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              )}>
                {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
              </p>
            )}
          </div>
          <div className="p-3 rounded-lg bg-gray-100">
            <Icon size={24} className="text-gray-700" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}