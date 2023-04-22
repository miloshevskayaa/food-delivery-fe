import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './app/store';
import { router } from './router';

import './styles/global/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    {/* <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
    {/* </StyleProvider> */}
  </React.StrictMode>,
);
