import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='nav__container'>
          <ul className='nav__list'>
            <li>
              <NavLink
                  to='/'
                  exact
                  activeStyle={activeStyle}
                  className='nav__link'
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/battle'
                activeStyle={activeStyle}
                className='nav__link'
              >
                Battle
              </NavLink>
            </li>
          </ul>
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
