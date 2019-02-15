import React from 'react'
import Link from 'gatsby-link'

class VlogPostItem extends React.Component {

  render() {
    const id = this.props.data.id || ''
    const name = this.props.data.name || ''
    const link = this.props.data.link || ''
    const thumbnail = this.props.data.thumbnail

    return (
      <div className="vlog-post-item flex jcsb">
        <div className="">
        </div>
        <div className="blog-list-date">{date}</div>
      </div>
    )
  }
}

export default VlogPostItem
