import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Counter from './Counter';
import CounterControl from './CounterControl';
import SideEffectOutput from './SideEffectOutput';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <CounterControl />
        <SideEffectOutput />
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
