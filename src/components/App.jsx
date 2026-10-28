import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'
import StatCard from './StatCard'
import ProductTable from './ProductTable'
import MovementChart from './MovementChart'
import { products, movements } from '../data/products.js'

function App() {
  const [filtro, setFiltro] = useState('todos') // 'todos' | 'baixo'

  const estoqueBaixo = products.filter((p) => p.quantidade <= p.minimo)
  const emEstoque = products.length - estoqueBaixo.length

  const produtosVisiveis = filtro === 'baixo' ? estoqueBaixo : products

  return (
    <div className="layout">
      <Sidebar />

      <main className="conteudo">
        <Header
          titulo="Gestão de Estoque"
          subtitulo="Acompanhe produtos, movimentações e itens que precisam de reposição."
        />

        <section className="cards">
          <StatCard
            titulo="Total de Produtos"
            valor={products.length}
            descricao="Itens cadastrados"
          />
          <StatCard
            titulo="Produtos em Estoque"
            valor={emEstoque}
            descricao="Acima do mínimo"
            variante="ok"
          />
          <StatCard
            titulo="Estoque Baixo"
            valor={estoqueBaixo.length}
            descricao="Precisam de reposição"
            variante="alerta"
          />
        </section>

        <section className="painel">
          <h2>Entradas e saídas por mês</h2>
          <MovementChart dados={movements} />
        </section>

        <section className="painel">
          <div className="painel__topo">
            <h2>Produtos</h2>
            <div className="filtros">
              <button
                className={filtro === 'todos' ? 'ativo' : ''}
                onClick={() => setFiltro('todos')}
              >
                Todos
              </button>
              <button
                className={filtro === 'baixo' ? 'ativo' : ''}
                onClick={() => setFiltro('baixo')}
              >
                Estoque baixo
              </button>
            </div>
          </div>
          <ProductTable produtos={produtosVisiveis} />
        </section>
      </main>
    </div>
  )
}

export default App
