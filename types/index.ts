export interface Asset {
  id: string
  ticker: string
  name: string
  type: 'STOCK' | 'FII'
  currentPrice: number
  dividendYield: number
  payout?: number
  sector?: string
  pvp?: number
  segment?: string
}

export interface Dividend {
  id: string
  ticker: string
  assetName: string
  type: 'STOCK' | 'FII'
  dateComex: string
  dateEx: string
  datePaid: string
  amount: number
}

export interface WalletAsset {
  id: string
  ticker: string
  name: string
  type: 'STOCK' | 'FII'
  quantity: number
  averagePrice: number
  currentPrice: number
  dividendYield: number
}

export interface Portfolio {
  totalPatrimony: number
  monthlyIncome: number
  averageDividendYield: number
  assetsCount: number
  assets: WalletAsset[]
}