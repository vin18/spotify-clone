import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Global } from './styles/Global';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Global />
      <Login />
    </Router>
  );
};

export default App;
