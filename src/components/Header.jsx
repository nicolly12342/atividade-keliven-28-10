function Header({ titulo, subtitulo }) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </header>
  )
}

export default Header
