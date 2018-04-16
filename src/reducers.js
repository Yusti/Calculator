import { combineReducers } from 'redux';

import activeTools from './containers/ToolsManager/reducer';
import calculator from './containers/ButtonsGroup/reducer';

export default combineReducers({
  activeTools,
  calculator,
});
