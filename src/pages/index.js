import React from 'react'
import Link from 'gatsby-link'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to the new space</p>
        <p>WIP</p>
        <Link to='/about'>About</Link>
      </div>
    );
  }
}
