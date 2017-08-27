import React from 'react'
import Link from 'gatsby-link'

export default class Index extends React.Component {
  render() {
    return (
      <div className='flex fcol al-c jc-sb'>
        <img src={require('../public/images/index.jpeg')} style={{ maxWidth: '60%' }}/>
      </div>
    );
  }
}
