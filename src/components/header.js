import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames';

import _ from 'lodash'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 'Index'
    }
  }

  switchPage = (e) => {
    this.setState({selected: e.target.text});
  }

  render() {
    var navItems = _.map(this.props.nav, (item) => {
      const selected = item.name == this.state.selected
      return (
        <div className='link flex row middle' key={item.name}>
          <div className={cx('link-circle', {'animated infinite tada': selected })} style={{background: item.color}} />
          <Link to={item.link} onClick={this.switchPage} style={{borderBottomColor: item.color}} className={cx({'selected': selected})}>
            {item.name}
          </Link>
        </div>
      )
      navItems.push(item)
    })

    return (
      <div className='flex middle right' id='header'>
        {navItems}
      </div>
    )
  }
}

export default Header
