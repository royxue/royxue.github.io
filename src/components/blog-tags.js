import React from 'react'
import cx from 'classnames'

import _ from 'lodash'

class BlogTags extends React.Component {
  constructor() {
    super()
  }

  render() {
    const tags = this.props.tags
    const selected = this.props.selected

    const tagsBlocks = []
    _.forEach(tags, (count, tag) => {
      tagsBlocks.push(
        <div key={tag} className={cx('blog-tag-item flex row', {'selected': tag == selected})}>
          <div className='blog-tag-name'>{tag}</div>
          <div className='blog-tag-count'>{count}</div>
        </div>
      )
    })

    return (
      <div id='blog-tags' className='flex'>
        {tagsBlocks}
      </div>
    )
  }
}

export default BlogTags
