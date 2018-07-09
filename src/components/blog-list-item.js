import React from 'react'
import Link from 'gatsby-link'

class BlogListItem extends React.Component {

  render() {
    const title = this.props.data.meta.title || '无题'
    const date = this.props.data.meta.date || 'No Date'
    const slug = this.props.data.fields.slug

    return (
      <div className="blog-list-item">
        <div className="blog-list-title">
          <Link to={slug}>{title}</Link>
        </div>
        <span className="blog-list-tag" />
        <span className="blog-list-date">{date}</span>
      </div>
    )
  }
}

export default BlogListItem
