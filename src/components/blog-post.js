import React from "react"
import ReactDOM from "react-dom"
import hljs from 'highlight.js'

import '../assets/css/github-markdown.css'
import 'highlight.js/styles/github.css'

import _ from 'lodash'

class BlogPost extends React.Component {
  componentDidMount() {
    var codeBlocks = ReactDOM.findDOMNode(this).querySelectorAll('pre code')
    console.log(codeBlocks)
    _.forEach(codeBlocks, (block) => {
      hljs.highlightBlock(block)
    })
  }

  render() {
    const post = this.props.data.orga
    const { title, date } = post.meta

    return (
      <div className='blog-detail markdown-body'>
        <center>
          <h1>{title}</h1>
          <small>{date}</small>
        </center>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    orga(fields: { slug: { eq: $slug }}) {
      html
      meta
    }
  }
`
