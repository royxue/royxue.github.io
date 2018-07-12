import React from 'react'
import Link from 'gatsby-link'

import BlogTags from '../components/blog-tags'
import BlogListItem from '../components/blog-list-item'


class BlogPage extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 'All'
    }
  }

  onSelectTag = (e) => {
    return undefined
  }

  render() {
    var data = this.props.data.allOrga.edges
    data = _.orderBy(data, ['node.meta.date'], ['desc']);
    const posts = _.map(data, ({node}) => {
      return <BlogListItem key={node.meta.title} data={node} />
    })

    var tags = _.map(data, 'node.meta.tag')
    tags = _.countBy(tags)

    return (
      <div className='container'>
        <BlogTags
          selected={this.state.selected}
          tags={tags}
        />
        <div className='divider' />
        <div>
          {posts}
        </div>
      </div>
    )
  }
}

export default BlogPage

export const blogListQuery = graphql`
  query BlogListQuery {
    allOrga {
      edges {
        node {
          fields {
            slug
          }
          meta
        }
      }
    }
  }
`
