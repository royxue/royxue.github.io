import React from 'react'

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="flex jc-center">
        <img className="img-404" src={require('../public/images/404.png')}/>
      </div>
    )
  }
}
