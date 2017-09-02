import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Layout, Menu }  from 'antd';

import 'antd/dist/antd.css';
import '../public/css/hamburgers.min.css'
import '../public/css/illustraion.css';
import '../public/css/index.css';

const { Header, Content, Footer } = Layout;

export default class LayoutTemplate extends React.Component {
  constructor(){
    super();
    this.state = {
      openMenu: false,
    }
  }

  toggleMenu = () => {
    const { openMenu } = this.state;
    this.setState({openMenu: !openMenu });
  }

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
          <div className={cx("hamburger hamburger--spin hamburger-btn", {"is-active": this.state.openMenu})} onClick={this.toggleMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
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
