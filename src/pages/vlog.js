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
    follow_count: 0
  }

  componentDidMount() {
    this.loadBilibiliData()
  }

  loadBilibiliData = () => {
    axios
      .get(`https://api.bilibili.com/x/relation/stat?vmid=1601274`, { crossdomain: true })
      .then(resp => {
        const {
          data: { follower: follow_count },
        } = resp
        this.setState({
          follow_count
        })
      })
      .catch(error => {
        this.setState({ follow_count: "ERROR" })
      })
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
        <div className="faninfo">
          Fans: {this.state.follow_count}
        </div>
        <div id="device-list">
          {devices_list}
        </div>
        <div id="vlog-list">
          {posts_list}
        </div>
      </div>
    )
  }
}

export default VlogPage
