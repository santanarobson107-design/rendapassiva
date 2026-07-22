'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StockCardProps {
  ticker: string
  name: string
  price: number
  change: number
  dividendYield: number
  type: 'STOCK' | 'FII'
}

export function StockCard({
  ticker,
  name,
  price,
  change,
  dividendYield,
  type,
}: StockCardProps) {
  const isPositive = change >= 0

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{ticker}</CardTitle>
            <p className="text-sm text-gray-600 mt-1">{name}</p>
          </div>
          <Badge variant={type === 'STOCK' ? 'default' : 'secondary'}>
            {type === 'STOCK' ? 'Ação' : 'FII'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-baseline">
          <span className="text-2xl font-bold">R$ {price.toFixed(2)}</span>
          <span className={`flex items-center gap-1 text-sm font-semibold ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {Math.abs(change).toFixed(2)}%
          </span>
        </div>
        <div className="pt-2 border-t border-gray-100">
          <p className="text-sm text-gray-600">Dividend Yield</p>
          <p className="text-lg font-semibold text-green-600">{dividendYield.toFixed(2)}%</p>
        </div>
      </CardContent>
    </Card>
  )
}