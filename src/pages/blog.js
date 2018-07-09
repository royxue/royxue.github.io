import React from 'react'
import Link from 'gatsby-link'
import BlogListItem from '../components/blog-list-item'

class BlogPage extends React.Component {
  render() {
    const data = this.props.data.allOrga.edges
    const posts = _.map(data, ({node}) => {
      return <BlogListItem data={node} />
    })

    return (
      <div>
        {posts}
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
