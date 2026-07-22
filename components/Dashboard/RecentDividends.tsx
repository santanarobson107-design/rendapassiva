'use client'

import { mockDividends } from '@/lib/data'

export function RecentDividends() {
  const recentDividends = mockDividends.slice(0, 5)

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Próximos Proventos</h3>
      <div className="space-y-3">
        {recentDividends.map((div) => (
          <div
            key={div.id}
            className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-900">{div.ticker}</p>
                <p className="text-sm text-gray-600">{div.assetName}</p>
              </div>
              <span className="text-green-600 font-bold">R$ {div.amount.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Pago em: {new Date(div.datePaid).toLocaleDateString('pt-BR')}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}