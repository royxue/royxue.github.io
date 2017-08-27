import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from '../components/header'

import './index.css'

export default class Layout extends React.Component {
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
        <Header/>
        <div style={{
          width: '60%',
          paddingTop: '4rem',
          margin: '0 auto',
        }}>
          {this.props.children()}
        </div>
      </div>
    )
  }
}
