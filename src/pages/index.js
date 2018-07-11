import React from 'react'
import Link from 'gatsby-link'

import indexImg from '../assets/imgs/Index.png'

const IndexPage = () => (
  <div id='index'>
    <div className='index-intro'>
      <h1>Roy Xue</h1>
      <h1>ロイ</h1>
    </div>

    <img src={indexImg} className='index-selfie' />
  </div>
)

export default IndexPage
