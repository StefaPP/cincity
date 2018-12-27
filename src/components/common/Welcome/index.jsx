import React from 'react';

import './assets/style/index.css';
import Movies from '../../Movies';
class Welcome extends React.PureComponent {


  render() {
    return (
      <div className="welcome">
        <div className="card-columns">
          <Movies />
        </div>
      </div>
    );
  }
};

export default Welcome;