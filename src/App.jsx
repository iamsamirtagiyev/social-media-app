import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
  document.body.dataset.theme = JSON.parse(localStorage.getItem('theme'))
  return (
    <div>
        { useRoutes(routes) }
    </div>
  )
}

export default App