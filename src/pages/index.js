import React from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'antd';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Row className='img-row' style={{height: '10vh'}}>
          <Col className='img-col' span={12}></Col>
          <Col className='img-col' span={12}></Col>
        </Row>
        <Row className='img-row'>
          <Col className='img-col' span={6}></Col>
          <Col className='img-col' span={12}>
            <h1 className='name'>Roy and Xenia</h1>
          </Col>
          <Col className='img-col' span={6}></Col>
        </Row>
        <Row className='img-row'>
          <Col className='img-col' span={4}>
            <img id='clock' className='img-obj' src={require('../public/images/clock.png')}/>
          </Col>
          <Col className='img-col' span={4}></Col>
          <Col className='img-col' span={4}>
            <img id='frames' className='img-obj' src={require('../public/images/frames.png')}/>
          </Col>
          <Col className='img-col' span={4}>
            <img id='window' className='img-obj' src={require('../public/images/window.png')}/>
          </Col>
          <Col className='img-col' span={4}>
            <img id='shelf' className='img-obj' src={require('../public/images/shelf.png')}/>
          </Col>
          <Col className='img-col' span={4}></Col>
        </Row>
        <Row className='img-row'>
          <Col className='img-col' span={4}>
            <img id='pencil' className='img-obj' src={require('../public/images/pencil.png')}/>
          </Col>
          <Col className='img-col' span={4}>
            <img id='macpro' className='img-obj' src={require('../public/images/mac_pro.png')}/>
          </Col>
          <Col className='img-col' span={4}>
            <img id='cups' className='img-obj' src={require('../public/images/cups.png')}/>
          </Col>
          <Col className='img-col' span={4}>
              <img id='lamp' className='img-obj' src={require('../public/images/lamp.png')}/>
          </Col>
          <Col className='img-col' span={4}>
              <img id='macbook' className='img-obj' src={require('../public/images/mac.png')}/>
          </Col>
          <Col className='img-col' span={4}>
            <img id='earphone' className='img-obj' src={require('../public/images/earphone.png')}/>
          </Col>
        </Row>
        <Row className='img-row desktop-border'>
        </Row>
      </div>
    );
  }
}
