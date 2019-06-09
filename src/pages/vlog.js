import React from 'react'
import axios from 'axios'

import VlogDeviceItem from '../components/vlog/vlog-device-item'
import VlogPostItem from '../components/vlog/vlog-post-item'

const devices = [
  {
    name: 'Sony A6300',
    thumbnail: 'some image link'
  }
]

const archive = [
  {
    id: '009',
    name: 'Dubai 001 Longway to Dubai',
    link: 'asd',
    thumbnail: 'some image url',
    devices: [ ]
  },
]

class VlogPage extends React.Component {
  constructor() {
    super()
  }

  state = {
    follow_count: 1192
  }

  componentDidMount() {
    //this.loadBilibiliData()
  }

  render() {
    const devices_list = _.map(devices, (device) => {
      return <VlogDeviceItem data={device} key={device.name}/>
    })

    const posts_list = _.map(archive, (post) => {
      return <VlogPostItem data={post} key={post.id}/>
    })

    return (
      <div className="container">
        {/* <div className="faninfo">
        </div>
        <div id="device-list">
          {devices_list}
        </div>
        <div id="vlog-list">
          {posts_list}
        </div> */}
        <div id="player">
          <iframe
            src="//player.bilibili.com/player.html?aid=44610664&cid=78091714&page=1"
            allowfullscreen="true"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
          >
          </iframe>
        </div>
      </div>
    )
  }
}

export default VlogPage
