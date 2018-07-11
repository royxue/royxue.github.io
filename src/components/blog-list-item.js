import React from 'react'
import Link from 'gatsby-link'

class BlogListItem extends React.Component {

  render() {
    const title = this.props.data.meta.title || '无题'
    const date = this.props.data.meta.date || 'No Date'
    const tag = this.props.data.meta.tag || ''
    const slug = this.props.data.fields.slug

    return (
      <div className="blog-list-item flex jcsb">
        <div className="blog-list-title">
          <Link to={slug}>{title}<span className='blog-list-tag'>/{tag}</span></Link>
        </div>
        <div className="blog-list-date">{date}</div>
      </div>
    )
  }
}

export default BlogListItem
