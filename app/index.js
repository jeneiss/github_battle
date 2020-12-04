import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './index.css'
import Popular from './components/Popular'

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Popular />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
