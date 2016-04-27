import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './components/todos.js';
import store from './store.js';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Todos />
      </Provider>
    );
  }
}

export default App;
