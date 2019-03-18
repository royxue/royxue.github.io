import React from 'react'
// import Link from 'gatsby-link'

import indexImg from '../assets/imgs/Index.png'
import nameImg from '../assets/imgs/name.png'

const IndexPage = () => (
  <div id='index'>
    <div className='index-intro'>
      <img src={nameImg} className='index-name'/>
      <h1>ロイ</h1>
    </div>

    <img src={indexImg} className='index-selfie' />
  </div>
)

export default IndexPage
