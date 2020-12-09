import React from 'react'

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
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <ul className='nav__container'>
        {languages.map((lang) => {
          return (
            <li key={lang}>
              <button
                className='nav__btn'
                style={lang === this.state.selectedLanguage ? {
                  backgroundColor: 'red',
                  color: 'white'
                } : null}
                onClick={() => this.updateLanguage(lang)}
              >
                {lang}
              </button>
            </li>
          )
        })}
      </ul>
    )
  }
}
