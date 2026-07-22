import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from '@/components/Sidebar'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Renda Passiva - Acompanhamento de Dividendos B3',
  description: 'Plataforma profissional para acompanhamento de dividendos e rendimentos da Bolsa Brasileira',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex h-screen bg-background">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}