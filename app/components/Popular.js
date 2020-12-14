import React from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos} from '../utils/api'

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

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All',
      repos: null,
      error: null
    }

    this.updateLanguage = this.updateLanguage.bind(this)
    this.isLoading = this.isLoading.bind(this)
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      error: null,
      repos: null
    })

    fetchPopularRepos(selectedLanguage)
      .then((repos) => {
        this.setState ({
          repos,
          error:null
        })
      })
      .catch((err) => {
        console.log('Error fetching repos', err)
        this.setState({
          error: 'There was an error fetching repos'
        })
      })
  }

  isLoading() {
    return !this.state.repos && !this.state.error
  }

  render() {
    const { selectedLanguage, repos, error } = this.state

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />

        {this.isLoading() && <p>LOADING</p>}

        {error && <p>{error}</p>}

        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </React.Fragment>
    )
  }
}
