const secoes = ['Visão geral', 'Produtos', 'Movimentações']

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Navegação principal">
      <div className="sidebar__marca">Estoque<span>+</span></div>
      <nav>
        <ul>
          {secoes.map((secao, indice) => (
            <li key={secao}>
              <button
                className={indice === 0 ? 'ativo' : ''}
                type="button"
                aria-current={indice === 0 ? 'page' : undefined}
              >
                {secao}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
