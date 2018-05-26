import React from 'react'
import Link from 'gatsby-link'
import { Card, Row, Col } from 'antd';


export default class Project extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={20}>
          <Col className="gutter-row" span={6}>
            <Card className='proj-card' style={{ width: '100%', height: '30vh', overflow: 'hidden' }} bodyStyle={{ padding: 0 }}>
              <img src={require('../public/images/index.jpeg')} style={{ borderRadius: 5 }}/>
              <div className='proj-desc'>
                Project Happen
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
