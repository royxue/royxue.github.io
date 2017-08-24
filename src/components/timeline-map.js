import _ from 'lodash';
import React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {history, timeline} from '../data/history';
import {defaultMapStyle, timelineLayer} from './map-style';
import {mapBoxToken} from '../data/constants';
import {fromJS} from 'immutable';

const token = mapBoxToken;
let animation = null;

const markerMapping = {
  roy: require('../public/images/code.png'),
  xenia: require('../public/images/study.png')
};

export default class TimelineMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapStyle: defaultMapStyle,
      viewport: {
        width: window.innerWidth,
        height: 0.9 *window.innerHeight
      },
      positions: null,
      playing: false
    };

    this.map = null;
  }

  componentWillMount() {
    const ts = timeline[0];
    this._loadData(ts);
  }

  _loadData = (timestamp) => {
    const data = history[timestamp];
    const {viewport, positions} = this.state;
    this.setState({
      positions: data.positions,
      viewport: _.assign(viewport, data.viewport)
    });
  }

  _onViewportChange = (viewport) => {
    console.log(viewport);
    this.setState({viewport: viewport});
  }

  renderMarkers = () => {
    return (
      _.map(this.state.positions, (val, i) => (
        <Marker key={`marker-${i}`} {...val}>
          <img src={_.get(markerMapping, val.name)} style={{
            width: '50px'
          }}/>
        </Marker>
    )));
  }

  render() {
    return (
      <ReactMapGL ref= {(ref) => this.map = ref} mapStyle={this.state.mapStyle} {...this.state.viewport} mapboxApiAccessToken={token} onViewportChange={this._onViewportChange}>
        {this.renderMarkers()}
      </ReactMapGL>
    )
  }
}
