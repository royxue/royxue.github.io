import React from 'react'
import Link from 'gatsby-link'

class VlogPostItem extends React.Component {

  render() {
    const id = this.props.data.id || ''
    const name = this.props.data.name || ''
    const link = this.props.data.link || ''
    const thumbnail = this.props.data.thumbnail

    return (
      <div className="vlog-item flex jcsb">
        {name}
      </div>
    )
  }
}

export default VlogPostItem
