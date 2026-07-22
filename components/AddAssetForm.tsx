'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Plus, X } from 'lucide-react'

interface AddAssetFormProps {
  onSubmit: (data: {
    ticker: string
    quantity: number
    averagePrice: number
  }) => void
  onCancel: () => void
}

export function AddAssetForm({ onSubmit, onCancel }: AddAssetFormProps) {
  const [formData, setFormData] = useState({
    ticker: '',
    quantity: 0,
    averagePrice: 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.ticker && formData.quantity > 0 && formData.averagePrice > 0) {
      onSubmit(formData)
      setFormData({ ticker: '', quantity: 0, averagePrice: 0 })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Adicionar Novo Ativo</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="ticker">Ticker</Label>
          <Input
            id="ticker"
            placeholder="ITUB4"
            value={formData.ticker}
            onChange={(e) => setFormData({ ...formData, ticker: e.target.value.toUpperCase() })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantidade</Label>
          <Input
            id="quantity"
            type="number"
            placeholder="0"
            value={formData.quantity || ''}
            onChange={(e) => setFormData({ ...formData, quantity: parseFloat(e.target.value) || 0 })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Preço Médio</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            placeholder="0.00"
            value={formData.averagePrice || ''}
            onChange={(e) => setFormData({ ...formData, averagePrice: parseFloat(e.target.value) || 0 })}
          />
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Button type="submit" className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
          <Plus size={18} />
          Salvar
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="flex items-center gap-2">
          <X size={18} />
          Cancelar
        </Button>
      </div>
    </form>
  )
}