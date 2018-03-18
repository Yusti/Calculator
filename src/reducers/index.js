import { combineReducers } from 'redux';
import activeTools from './activeTools';
import calculator from './calculator';

export default combineReducers({
  activeTools,
  calculator,
});
