import React from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';

const menu = [
  {link: '/', title: 'Index'},
  {link: '/', title: 'WIP, Coming soon'}
  // {link: '/project', title: 'Project'},
  // {link: '/about', title: 'About'}
]

export default class Header extends React.Component {
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
    const items = []
    _.map(menu, (val, key) => {
      const item = (<Link to={val.link} key={key} className='menu-item'>{val.title}</Link>)
      items.push(item)
    })

    return (
      <div className='menu-row flex jc-sb'>
        <div className={cx('menu flex ai-c jc-end f1 animated', {'slideInDown': this.state.openMenu, 'slideOutUp': !this.state.openMenu})}>
          {items}
        </div>
        <div className={cx("hamburger hamburger--spin hamburger-btn", {"is-active": this.state.openMenu})} onClick={this.toggleMenu}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>
    )
  }
}
