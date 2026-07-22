'use client'

import { mockStocks } from '@/lib/data'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function StocksPage() {
  const sortedStocks = [...mockStocks].sort((a, b) => b.dividendYield - a.dividendYield)

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Ranking de Ações</h1>
        <p className="text-gray-600 mt-1">Ações com maior dividend yield</p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Ações por Dividend Yield</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sortedStocks}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="ticker" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar dataKey="dividendYield" fill="#0066ff" name="Dividend Yield (%)" />
          </BarChart>
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Payout</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Setor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedStocks.map((stock) => (
                <tr key={stock.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-900">{stock.ticker}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{stock.name}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    R$ {stock.currentPrice.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      {stock.dividendYield.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{stock.payout}%</td>
                  <td className="px-6 py-4 text-gray-600">{stock.sector}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}