import React from 'react';
import ReactPlayer from 'react-player'


const MovieTrailer = () => (
  <div>
    <ReactPlayer
      playing={false}
      width="100%"
      height="100vh"
      url="https://www.youtube.com/watch?v=gCcx85zbxz4&autoplay=0&showinfo=0&controls=0"
    />
  </div>
);

export {
  MovieTrailer
};