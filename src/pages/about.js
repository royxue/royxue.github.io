import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

import teslaImg from '../assets/imgs/tesla.png'
import cmuImg from '../assets/imgs/cmu.png'
import djiImg from '../assets/imgs/dji.png'

library.add(fab)

class AboutPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container">
        <h2>Roy Xue</h2>
        <div className="divider"/>
        <div className>
          > software engineer.
          <br />
          > amateur vlogger.
        </div>

        <div id="about-block">
          <div>
            <img src={cmuImg} />
            <p>CMU alumni</p>
          </div>
          <div>
            <img src={teslaImg} />
            <p>Tesla Software Engineer</p>
          </div>
          <div>
            <img src={djiImg} />
            <p>DJI Software Engineer</p>
          </div>
        </div>

        <div id="about-links">
          <a href="https://www.linkedin.com/in/royxue/">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a href="https://github.com/royxue">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a href="https://www.instagram.com/xljroy/">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </div>
      </div>
    )
  }
}

export default AboutPage
