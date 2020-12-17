import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ header, subheader, avatar, href, name, uniqueKey, children }) {
  return (
    <div className='grid__card bg-light' key={uniqueKey}>
      <h3 className='grid__card-header'>
        {header}
      </h3>
      <img
        className='grid__card-avatar'
        src={avatar}
        alt={`Avatar from ${name}`}
      />
      {subheader && (
        <h4>
          {subheader}
        </h4>
      )}
      <h2>
        <a className='link' href={href}>
          {name}
        </a>
      </h2>
      {children}
    </div>
  )
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  uniqueKey: PropTypes.string
}
