import React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {history, timeline} from '../data/history';
import {defaultMapStyle, timelineLayer} from './map-style';
import {mapBoxToken} from '../data/constants';
import {fromJS} from 'immutable';

const token = mapBoxToken;

let animation = null;

export default class TimelineMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapStyle: defaultMapStyle,
      viewport: {
        width: window.innerWidth,
        height: 0.9 *window.innerHeight,
        latitude: 34.019017381755184,
        longitude: -177.71270941671457,
        zoom: 3
      },
      positions: {
        roy: null,
        xenia: null
      },
      playing: false
    };

    this.map = null;
  }

  componentWillMount() {
    const ts = timeline[0];
    this._loadData(ts);
    // this._loadData(ts);
  }

  _loadData = (timestamp) => {
    const data = history[timestamp];
    this.setState({positions: data});
  }

  // _loadData = (timestamp) => {
  //   const data = history[timestamp];
  //   const mapStyle = defaultMapStyle
  //                   .setIn(['sources', 'timeline'], fromJS({type: 'geojson', data}))
  //                   .set('layers', defaultMapStyle.get('layers').push(timelineLayer));

  //   this.setState({mapStyle: mapStyle});
  // }

  _onViewportChange = (viewport) => {
    console.log(viewport);
    this.setState({viewport: viewport});
  }

  renderMarkers = () => {
    return (
      <Marker {...this.state.positions.roy}>
        <img src={require('../public/images/code.png')} style={{
          width: '50px'
        }}/>
      </Marker>
    )
  }

  render() {
    return (
      <ReactMapGL ref= {(ref) => this.map = ref} mapStyle={this.state.mapStyle} {...this.state.viewport} mapboxApiAccessToken={token} onViewportChange={this._onViewportChange}>
        {this.renderMarkers()}
      </ReactMapGL>
    )
  }
}
