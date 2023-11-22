
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CreateUser from './components/CreateUser';
import AddPoints from './components/AddPoints';
import RedeemPoints from './components/RedeemPoints';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreateUser />
        <AddPoints />
        <RedeemPoints />
      </div>
    </Provider>
  );
}

export default App;
