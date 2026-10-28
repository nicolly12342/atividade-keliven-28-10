// Componente reutilizado 3 vezes, sempre configurado via props
function StatCard({ titulo, valor, descricao, variante = 'neutro' }) {
  return (
    <article className={`stat-card stat-card--${variante}`}>
      <span className="stat-card__titulo">{titulo}</span>
      <strong className="stat-card__valor">{valor}</strong>
      <span className="stat-card__descricao">{descricao}</span>
    </article>
  )
}

export default StatCard
