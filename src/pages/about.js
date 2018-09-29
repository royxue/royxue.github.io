import React from 'react'
import FlipCard from '../components/flip-card'


class AboutPage extends React.Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div className="container">
        <FlipCard
          front="happy"
          back="sad"
        />
      </div>
    )
  }
}

export default AboutPage
