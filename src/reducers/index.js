import { combineReducers } from 'redux';

import playlist from './playlist';
import track from './track';
import weather from './weather';

export default combineReducers({
  track,
  playlist,
  weather
});