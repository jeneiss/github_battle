import React from 'react'
import { FaUserFriends, FaFighterJet, FaTrophy, FaTimesCircle } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Results from './Results'

function Instructions() {
  return (
    <div className='instructions'>
      <h1 className='instructions__header'>
        Instructions
      </h1>
      <ol className='instructions__grid'>
        <li className='instructions__grid-item'>
          <h2 className='instructions__sub-header'>
            Enter two Github users
          </h2>
          <FaUserFriends className='bg-light' color='rgb(255, 191, 116' size={140} />
        </li>
        <li className='instructions__grid-item'>
          <h2 className='instructions__sub-header'>
            Battle
          </h2>
          <FaFighterJet className='bg-light' color='#727272' size={140} />
        </li>
        <li className='instructions__grid-item'>
          <h2 className='instructions__sub-header'>
            See the winners
          </h2>
          <FaTrophy className='bg-light' color='rgb(255, 215, 0' size={140} />
        </li>
      </ol>
    </div>
  )
}

class PlayerInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.onSubmit(this.state.username)
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <form
        className='player'
        onSubmit={this.handleSubmit}
      >
        <label htmlFor='username' className='player__label'>
          {this.props.label}
        </label>
        <div className='player__inputs'>
          <input
            type='text'
            id='username'
            className='player__input input-light'
            placeholder='github username'
            autoComplete='off'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className='player__input-btn btn btn-dark'
            type='submit'
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

function PlayerPreview({ username, onReset, label}) {
  return (
    <div className='player'>
      <h3 className='player__label'>{label}</h3>
      <div className='player__info-container bg-light'>
        <div className='player__info'>
          <img
            className='avatar-small'
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a
            href={`https://github.com/${username}`}
            className='link'
          >
            {username}
          </a>
        </div>
        <button
          className='btn btn-clear'
          onClick={onReset}
        >
          <FaTimesCircle color='rgb(194, 57, 42)' size={26} />
        </button>
      </div>
    </div>
  )
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default class Battle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player
    })
  }

  handleReset(id) {
    this.setState({
      [id]: null
    })
  }

  render() {
    const { playerOne, playerTwo, battle } = this.state

    if (battle) {
      return <Results playerOne={playerOne} playerTwo={playerTwo} />
    }

    return (
      <React.Fragment>
        <Instructions />

        <div className='players__container'>
          <h1 className='players__header'>Players</h1>
          <div className='players__inputs-container'>
            {!playerOne ?
              <PlayerInput
                label='Player One'
                onSubmit={(player) => this.handleSubmit('playerOne', player)}
              /> :
              <PlayerPreview
                username={playerOne}
                label='Player One'
                onReset={() => this.handleReset('playerOne')}
              />
            }
            {!playerTwo ?
              <PlayerInput
                label='Player Two'
                onSubmit={(player) => this.handleSubmit('playerTwo', player)}
              /> :
              <PlayerPreview
                username={playerTwo}
                label='Player Two'
                onReset={() => this.handleReset('playerTwo')}
              />
            }
          </div>

          {playerOne && playerTwo && (
            <button
              className='btn btn-dark btn-space'
              onClick={() => this.setState({battle: true})}
            >
              Battle
            </button>
          )}
        </div>

      </React.Fragment>
    )
  }
}
