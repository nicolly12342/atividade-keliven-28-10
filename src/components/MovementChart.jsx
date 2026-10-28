function MovementChart({ dados }) {
  const maiorMovimento = Math.max(
    1,
    ...dados.flatMap(({ entradas, saidas }) => [entradas, saidas]),
  )

  return (
    <div className="grafico" role="img" aria-label="Gráfico de entradas e saídas mensais">
      <div className="grafico__legenda" aria-hidden="true">
        <span><i className="cor-entrada" />Entradas</span>
        <span><i className="cor-saida" />Saídas</span>
      </div>
      <div className="grafico__barras">
        {dados.map(({ mes, entradas, saidas }) => (
          <div className="grafico__grupo" key={mes}>
            <div className="grafico__par">
              <span
                className="barra cor-entrada"
                style={{ height: `${(entradas / maiorMovimento) * 100}%` }}
                title={`Entradas: ${entradas}`}
              />
              <span
                className="barra cor-saida"
                style={{ height: `${(saidas / maiorMovimento) * 100}%` }}
                title={`Saídas: ${saidas}`}
              />
            </div>
            <span>{mes}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovementChart
