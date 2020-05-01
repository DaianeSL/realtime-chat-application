import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { StateProvider } from './context';

import Join from './containers/Join';
import Chat from './containers/Chat';
import Theme from './styles/theme';
import GlobalStyle from './styles/global';

const App = () => (
  <StateProvider>
    <Theme>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </Router>
    </Theme>
  </StateProvider>
);

export default App;
