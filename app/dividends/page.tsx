'use client'

import { mockDividends } from '@/lib/data'
import { Calendar, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function DividendsPage() {
  const [selectedType, setSelectedType] = useState<'ALL' | 'STOCK' | 'FII'>('ALL')

  const filteredDividends = mockDividends.filter(
    (div) => selectedType === 'ALL' || div.type === selectedType
  )

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Calendário de Proventos</h1>
        <p className="text-gray-600 mt-1">Acompanhe as datas de pagamento de dividendos</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4">
        <div className="flex items-center gap-4 flex-wrap">
          <Filter size={20} className="text-gray-600" />
          <Button
            variant={selectedType === 'ALL' ? 'default' : 'outline'}
            onClick={() => setSelectedType('ALL')}
          >
            Todos
          </Button>
          <Button
            variant={selectedType === 'STOCK' ? 'default' : 'outline'}
            onClick={() => setSelectedType('STOCK')}
          >
            Ações
          </Button>
          <Button
            variant={selectedType === 'FII' ? 'default' : 'outline'}
            onClick={() => setSelectedType('FII')}
          >
            FIIs
          </Button>
        </div>
      </div>

      {/* Calendar Table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-50 to-green-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ticker</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ativo</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tipo</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Data COM</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Data EX</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Data Pgto</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Valor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDividends.map((div) => (
                <tr key={div.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900">{div.ticker}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{div.assetName}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      div.type === 'STOCK'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {div.type === 'STOCK' ? 'Ação' : 'FII'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(div.dateComex).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(div.dateEx).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(div.datePaid).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-semibold text-green-600">R$ {div.amount.toFixed(2)}</span>
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