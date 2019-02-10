import React from 'react';

import './assets/style/index.css';
// import Movies from '../../Movies';
import MovieCarousel from '../../MovieCarousel';
import { NeonLogo } from './components/NeonLogo';
import { ReserveButton } from '../ReserveButton';
class Welcome extends React.PureComponent {


  render() {
    return (
      <div className="welcome">
        {/* <NeonLogo /> */}
        <MovieCarousel />
        <ReserveButton />
        <div className="card-columns">
        </div>
      </div>
    );
  }
};

export default Welcome;