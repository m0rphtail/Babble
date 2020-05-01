import React from 'react';

import { BrowserRouter as Router, Router } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => (
    <Router>
        <Route path = "/" exact component = {Join} />
        <Route path = "/Chat" component = {Chat} />
    </Router>
);

export default App;