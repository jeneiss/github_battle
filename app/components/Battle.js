import React from 'react'
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa'
import PropTypes from 'prop-types'

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

PlayerInput.proprTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default class Battle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />

      </React.Fragment>
    )
  }
}
