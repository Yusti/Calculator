import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import ToolsManager from './src/containers/ToolsManager';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <ToolsManager />
    </Provider>
  );
}
