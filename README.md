# Renda Passiva

Plataforma profissional para acompanhamento de dividendos e rendimentos de investimentos na B3.

## 🚀 Funcionalidades

- **Dashboard Principal** - Visualize seu patrimônio total, renda passiva mensal e dividend yield
- **Calendário de Proventos** - Acompanhe datas COM, EX e pagamento de dividendos
- **Simulador de Dividendos** - Simule rendimentos com base em suas cotas/ações
- **Rankings** - Ranking de ações e FIIs por dividend yield
- **Carteira** - Gerencie sua carteira de investimentos
- **Busca** - Busque por ativos específicos

## 📋 Stack

- **Next.js 14** - Framework React com Server Components
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Recharts** - Gráficos interativos
- **Shadcn/ui** - Componentes UI reutilizáveis
- **Lucide React** - Ícones

## 🔧 Como instalar

```bash
npm install
npm run dev
```

Abra http://localhost:3000 no seu navegador.

## 📁 Estrutura do Projeto

```
app/
├── layout.tsx              # Layout principal
├── page.tsx                # Dashboard
├── globals.css             # Estilos globais

components/
├── Sidebar.tsx             # Menu lateral
├── Navbar.tsx              # Barra superior
├── Dashboard/
│   ├── Dashboard.tsx       # Dashboard principal
│   ├── DashboardCard.tsx   # Card de indicador
│   ├── PortfolioChart.tsx  # Gráfico do patrimônio
│   └── RecentDividends.tsx # Próximos proventos
└── ui/                     # Componentes UI base

lib/
├── data.ts                 # Dados mock
└── utils.ts                # Utilitários

types/
└── index.ts                # Tipos TypeScript
```

## 🎨 Tema de Cores

- **Primária**: Azul (#0066ff)
- **Secundária**: Verde (#22c55e)
- **Fundo**: Branco (#ffffff)
- **Texto**: Cinza escuro (#1f2937)

## 📝 Features a Implementar

- [ ] Página de Dividendos com calendário
- [ ] Simulador de dividendos
- [ ] Ranking de Ações
- [ ] Ranking de FIIs
- [ ] Página de Busca
- [ ] Gerenciamento da Carteira
- [ ] Autenticação
- [ ] Persistência de dados

## 📄 Licença

MIT