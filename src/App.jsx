import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { useDispatch, useSelector } from 'react-redux'
import { currentTheme } from './stores/theme'

const App = () => {
  const dispatch = useDispatch()
  dispatch(currentTheme(localStorage.getItem('theme')))
  return (
    <div data-theme={ useSelector(state => state.theme.theme) }>
        { useRoutes(routes) }
    </div>
  )
}

export default App