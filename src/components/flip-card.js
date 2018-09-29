import React from 'react'

class FlipCard extends React.Component {
  render() {
    return (
      <div className="flip-card">
        <div className="flipper">
          <div className="front">
            {this.props.front}
          </div>
          <div className="back">
            {this.props.back}
          </div>
        </div>
      </div>
    )
  }
}

export default FlipCard
