'use client'

import { useState } from 'react'
import { mockStocks, mockFIIs } from '@/lib/data'
import { Search as SearchIcon } from 'lucide-react'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const allAssets = [...mockStocks, ...mockFIIs]

  const results = allAssets.filter(
    (asset) =>
      asset.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Buscar Ativos</h1>
        <p className="text-gray-600 mt-1">Procure por ticker ou nome do ativo</p>
      </div>

      {/* Search Input */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Digite um ticker ou nome (ex: ITUB4, Itaú)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
        </div>
      </div>

      {/* Results */}
      {searchQuery && (
        <div className="space-y-4">
          <p className="text-sm text-gray-600 font-medium">
            {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((asset) => (
              <div
                key={asset.id}
                className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{asset.ticker}</p>
                    <p className="text-sm text-gray-600">{asset.name}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    asset.type === 'STOCK'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {asset.type === 'STOCK' ? 'Ação' : 'FII'}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Preço:</span>
                    <span className="font-semibold text-gray-900">
                      R$ {asset.currentPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">DY:</span>
                    <span className="font-semibold text-green-600">
                      {asset.dividendYield.toFixed(2)}%
                    </span>
                  </div>
                  {asset.type === 'STOCK' && asset.sector && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Setor:</span>
                      <span className="text-gray-900">{asset.sector}</span>
                    </div>
                  )}
                  {asset.type === 'FII' && asset.segment && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Segmento:</span>
                      <span className="text-gray-900">{asset.segment}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!searchQuery && (
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-8 text-center">
          <SearchIcon size={48} className="mx-auto text-blue-300 mb-4" />
          <p className="text-gray-600">Digite para começar a busca...</p>
        </div>
      )}
    </div>
  )
}