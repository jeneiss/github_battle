import React from 'react'
import { ThemeConsumer } from '../contexts/theme'

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='nav__container'>
          <button
            style={{fontSize: '2.5rem'}}
            className='btn'
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}
