import React from 'react'
import Link from 'gatsby-link'

class VlogDeviceItem extends React.Component {
  render() {
    const name = this.props.data.name || ''
    const thumbnail = this.props.data.thumbnail

    return (
      <div className="vlog-device flex jcsb">
        <div className="random">
          {name}
        </div>
      </div>
    )
  }
}

export default VlogDeviceItem
