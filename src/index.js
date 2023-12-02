// import component
import { App } from 'App';

// import redux store and provider
import { store } from 'redux/store';
import { Provider } from 'react-redux';

// other imports
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
