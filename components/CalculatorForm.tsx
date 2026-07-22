'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface CalculatorFormProps {
  onCalculate: (data: {
    quantity: number
    averagePrice: number
    dividendYield: number
  }) => void
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [formData, setFormData] = useState({
    quantity: 100,
    averagePrice: 50,
    dividendYield: 7.5,
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: parseFloat(value),
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dados de Entrada</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantidade de Cotas/Ações</Label>
          <Input
            id="quantity"
            type="number"
            value={formData.quantity}
            onChange={(e) => handleChange('quantity', e.target.value)}
            placeholder="100"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Preço Médio (R$)</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={formData.averagePrice}
            onChange={(e) => handleChange('averagePrice', e.target.value)}
            placeholder="50.00"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="yield">Dividend Yield (%)</Label>
          <Input
            id="yield"
            type="number"
            step="0.1"
            value={formData.dividendYield}
            onChange={(e) => handleChange('dividendYield', e.target.value)}
            placeholder="7.5"
          />
        </div>

        <Button
          onClick={() => onCalculate(formData)}
          className="w-full mt-4"
        >
          Calcular
        </Button>
      </CardContent>
    </Card>
  )
}