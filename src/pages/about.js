import React from 'react';
import Link from 'gatsby-link';
import { Row, Col } from 'antd';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <img className='row-center' src={require('../public/avatar/love.png')} style={{maxWidth: '20vw'}}/>
        <Row>
          <Col className='panel left' span={12}>
            <div className='flex panel left'>
              <p> Roy </p>
            </div>
          </Col>
          <Col className='panel right' span={12}>
            <div className='flex panel right'>
              <p> Xenia </p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
