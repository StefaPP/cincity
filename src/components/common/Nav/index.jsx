import React from 'react';

const Nav = () => (
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link active" href="/">Showing now</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Coming Soon</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Prices</a>
    </li>
  </ul>
);

export default Nav;