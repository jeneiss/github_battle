import React from 'react'
import PropTypes from 'prop-types'
import Hover from './Hover'

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '10rem',
    bottom: '100%',
    left: '50%',
    marginLeft: '-5rem',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '0.5rem',
    marginBottom: '0.3125rem',
    color: '#fff',
    textAlign: 'center',
    fontSize: '1rem'
  }
}

export default function Tooltip ({ text, children }) {
  return (
    <Hover>
      {(hovering) => (
        <div style={styles.container}>
          {hovering && <div style={styles.tooltip}>{text}</div>}
          {children}
        </div>
      )}
    </Hover>
  )
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired
}
