import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Nav from './components/common/Nav';
// import Movies from './components/Movies';
import Welcome from './components/common/Welcome';
// import Footer from './components/common/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Login from './components/Login';

const AppRouter = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Route path='/login' exact component={Login} />
      <Route path='/' exact component={Welcome} />
      {/* <Route path='/' exact component={Index} />
      <Route path='/about/' component={About} />
      <Route path='/users/' component={Users} /> */}
    </div>
  </Router >
);

export default AppRouter;