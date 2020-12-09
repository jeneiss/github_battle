import React from 'react'

function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='nav__container'>
      {languages.map((lang) => {
        return (
          <li key={lang}>
            <button
              className='nav__btn'
              style={lang === selected ? {
                backgroundColor: 'red',
                color: 'white'
              } : null}
              onClick={() => onUpdateLanguage(lang)}
            >
              {lang}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default class Popular extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage(selectedLanguage) {
    this.setState({selectedLanguage})
  }

  render() {
    const { selectedLanguage } = this.state

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
          />
      </React.Fragment>
    )
  }
}
