'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calculator } from 'lucide-react'

export default function SimulatorPage() {
  const [quantity, setQuantity] = useState<number>(100)
  const [averagePrice, setAveragePrice] = useState<number>(50)
  const [dividendYield, setDividendYield] = useState<number>(7.5)

  const patrimony = quantity * averagePrice
  const monthlyIncome = (patrimony * dividendYield) / 100 / 12
  const annualIncome = patrimony * (dividendYield / 100)

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Simulador de Dividendos</h1>
        <p className="text-gray-600 mt-1">Simule seus rendimentos passivos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Dados de Entrada</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantidade de Cotas/Ações
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preço Médio (R$)
            </label>
            <input
              type="number"
              value={averagePrice}
              onChange={(e) => setAveragePrice(parseFloat(e.target.value))}
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="50.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dividend Yield (%)
            </label>
            <input
              type="number"
              value={dividendYield}
              onChange={(e) => setDividendYield(parseFloat(e.target.value))}
              step="0.1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="7.5"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <p className="text-sm font-medium text-blue-100">Patrimônio Total</p>
            <p className="text-3xl font-bold mt-2">
              R$ {patrimony.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <p className="text-sm font-medium text-green-100">Renda Mensal</p>
            <p className="text-3xl font-bold mt-2">
              R$ {monthlyIncome.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-green-100 mt-2">
              {(monthlyIncome * 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} por ano
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <p className="text-sm font-medium text-purple-100">Renda Anual</p>
            <p className="text-3xl font-bold mt-2">
              R$ {annualIncome.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-purple-100 mt-2">
              R$ {(annualIncome / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} por mês
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}