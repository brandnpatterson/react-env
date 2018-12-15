import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => {
  return <div>Hello React</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();
