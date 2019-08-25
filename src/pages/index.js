import React from 'react'

import selfieImg from '../assets/imgs/selfie_only.png'

const IndexPage = () => (
  <div id='index'>
    <div className='index-intro'>
      <p id='name-en'>Roy Xue</p>
      <p id='name-jp'>ロイ</p>
    </div>

    <img src={selfieImg} className='index-selfie' />
  </div>
)

export default IndexPage
