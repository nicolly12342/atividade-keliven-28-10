import StatusBadge from './StatusBadge'

function ProductTable({ produtos }) {
  if (produtos.length === 0) {
    return <p className="vazio">Nenhum produto encontrado neste filtro.</p>
  }

  return (
    <div className="tabela-wrapper">
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th className="num">Quantidade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((p) => {
            const baixo = p.quantidade <= p.minimo
            return (
              <tr key={p.id} className={baixo ? 'linha-baixa' : ''}>
                <td>{p.nome}</td>
                <td>{p.categoria}</td>
                <td className="num">{p.quantidade}</td>
                <td><StatusBadge baixo={baixo} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
