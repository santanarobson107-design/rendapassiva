'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Jan', patrimony: 125000, income: 980 },
  { month: 'Fev', patrimony: 128000, income: 1010 },
  { month: 'Mar', patrimony: 132000, income: 1050 },
  { month: 'Abr', patrimony: 138000, income: 1120 },
  { month: 'Mai', patrimony: 142000, income: 1180 },
  { month: 'Jun', patrimony: 145250, income: 1285 },
]

export function PortfolioChart() {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Evolução do Patrimônio e Rendimentos</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="patrimony"
            stroke="#0066ff"
            strokeWidth={2}
            dot={{ fill: '#0066ff', r: 5 }}
            activeDot={{ r: 7 }}
            name="Patrimônio (R$)"
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ fill: '#22c55e', r: 5 }}
            activeDot={{ r: 7 }}
            name="Renda Mensal (R$)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}