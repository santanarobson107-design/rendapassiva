'use client'

import { mockPortfolio } from '@/lib/data'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function WalletPage() {
  const portfolio = mockPortfolio
  const [showForm, setShowForm] = useState(false)

  const chartData = portfolio.assets.map((asset) => ({
    ticker: asset.ticker,
    value: asset.quantity * asset.currentPrice,
  }))

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Carteira do Investidor</h1>
          <p className="text-gray-600 mt-1">Gerencie sua carteira de investimentos</p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2"
        >
          <Plus size={20} />
          Adicionar Ativo
        </Button>
      </div>

      {/* Add Asset Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Adicionar Novo Ativo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Ticker"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Quantidade"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Preço Médio"
              step="0.01"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <Button className="bg-green-600 hover:bg-green-700">Salvar</Button>
            <Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button>
          </div>
        </div>
      )}

      {/* Wallet Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
          <p className="text-sm font-medium text-blue-100">Patrimônio Total</p>
          <p className="text-3xl font-bold mt-2">
            R$ {portfolio.totalPatrimony.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
          <p className="text-sm font-medium text-green-100">Renda Mensal</p>
          <p className="text-3xl font-bold mt-2">
            R$ {portfolio.monthlyIncome.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
          <p className="text-sm font-medium text-purple-100">DY Médio</p>
          <p className="text-3xl font-bold mt-2">{portfolio.averageDividendYield.toFixed(2)}%</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição da Carteira</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="ticker" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
              formatter={(value) => `R$ ${(value as number).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            />
            <Legend />
            <Bar dataKey="value" fill="#0066ff" name="Valor (R$)" />
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ativo</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Qtd</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Preço Médio</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Preço Atual</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Patrimônio</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">DY</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {portfolio.assets.map((asset) => (
                <tr key={asset.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-900">{asset.ticker}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{asset.name}</td>
                  <td className="px-6 py-4 text-gray-600">{asset.quantity}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    R$ {asset.averagePrice.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    R$ {asset.currentPrice.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    R$ {(asset.quantity * asset.currentPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {asset.dividendYield.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-red-600 hover:text-red-800 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}