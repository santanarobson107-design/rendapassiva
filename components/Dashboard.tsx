'use client'

import { mockPortfolio } from '@/lib/data'
import { DashboardCard } from '@/components/Dashboard/DashboardCard'
import { PortfolioChart } from '@/components/Dashboard/PortfolioChart'
import { RecentDividends } from '@/components/Dashboard/RecentDividends'
import { TrendingUp, DollarSign, Percent, Award } from 'lucide-react'

export function Dashboard() {
  const portfolio = mockPortfolio

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Acompanhe seus investimentos e rendimentos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Patrimônio Total"
          value={`R$ ${portfolio.totalPatrimony.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          icon={TrendingUp}
          color="from-blue-500 to-blue-600"
          change="+5.2%"
        />
        <DashboardCard
          title="Renda Passiva Mensal"
          value={`R$ ${portfolio.monthlyIncome.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          icon={DollarSign}
          color="from-green-500 to-green-600"
          change="+2.1%"
        />
        <DashboardCard
          title="Dividend Yield Médio"
          value={`${portfolio.averageDividendYield.toFixed(2)}%`}
          icon={Percent}
          color="from-purple-500 to-purple-600"
          change="-0.3%"
        />
        <DashboardCard
          title="Quantidade de Ativos"
          value={portfolio.assetsCount.toString()}
          icon={Award}
          color="from-orange-500 to-orange-600"
          change="+1 novo"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PortfolioChart />
        </div>
        <div>
          <RecentDividends />
        </div>
      </div>
    </div>
  )
}