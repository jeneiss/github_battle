import React from 'react'

export default class Popular extends React.Component {
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <ul className='nav__container'>
        {languages.map((lang) => {
          return (
            <li key={lang}>
              <button className='nav__btn'>
                {lang}
              </button>
            </li>
          )
        })}
      </ul>
    )
  }
}
