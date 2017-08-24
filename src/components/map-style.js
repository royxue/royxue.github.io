import {fromJS} from 'immutable';
import MAPSTYLE from '../data/map-style.json';

export const timelineLayer = fromJS({
  id: 'timeline',
  source: 'timeline',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
});

export const defaultMapStyle = fromJS(MAPSTYLE);