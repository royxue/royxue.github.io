import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Layout, Menu }  from 'antd';

import 'antd/dist/antd.css';
import '../public/css/hamburgers.min.css';
import '../public/css/animate.min.css'
import '../public/css/illustraion.css';
import '../public/css/index.css';

import Header from '../components/header'

const { Content, Footer } = Layout;

export default class LayoutTemplate extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Roy and Xenia" meta={[
          {
            name: 'description',
            content: 'Roy and Xenia website'
          }, {
            name: 'keywords',
            content: 'love, life'
          }]}/>
        <Layout style={{ minHeight: '100vh' }}>
          <Header />
          <Content>
            {this.props.children()}
          </Content>
          <Footer className='footer flex jc-center'>
            Roy and Xenia ©2018 Created with Love
          </Footer>
        </Layout>
      </div>
    )
  }
}
