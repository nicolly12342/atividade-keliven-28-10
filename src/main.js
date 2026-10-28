import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'

const rootElement = document.querySelector('#app')

if (!rootElement) {
  throw new Error('Não foi encontrado o elemento #app no index.html.')
}

createRoot(rootElement).render(
  createElement(StrictMode, null, createElement(App)),
)
