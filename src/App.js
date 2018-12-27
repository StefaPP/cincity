import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/common/Nav';
import Movies from './components/Movies';
import Welcome from "./components/common/Welcome";
import Footer from "./components/common/Footer";

const Index = () => <h2></h2>;
const About = () => <h2></h2>;
const Users = () => <h2></h2>;

const AppRouter = () => (
  <Router>
    <div>
      <Nav />
      <Welcome />
      <Footer />
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router >
);

export default AppRouter;