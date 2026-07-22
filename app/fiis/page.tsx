'use client'

import { mockFIIs } from '@/lib/data'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const COLORS = ['#0066ff', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6']

export default function FIIsPage() {
  const sortedFIIs = [...mockFIIs].sort((a, b) => b.dividendYield - a.dividendYield)

  const chartData = sortedFIIs.map((fii) => ({
    name: fii.ticker,
    value: fii.dividendYield,
  }))

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Ranking de FIIs</h1>
        <p className="text-gray-600 mt-1">Fundos Imobiliários com melhor dividend yield</p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição do Dividend Yield</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value.toFixed(2)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-50 to-green-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ticker</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nome</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Preço Atual</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dividend Yield</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">P/VP</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Segmento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedFIIs.map((fii) => (
                <tr key={fii.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-900">{fii.ticker}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{fii.name}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    R$ {fii.currentPrice.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {fii.dividendYield.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{fii.pvp?.toFixed(2)}</td>
                  <td className="px-6 py-4 text-gray-600">{fii.segment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}