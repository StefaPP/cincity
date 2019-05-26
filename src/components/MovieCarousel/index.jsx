import React from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { loadMovies } from '../../actions';

import './assets/style/index.css';

class MovieCarousel extends React.Component {

  state = {
    currentSlide: 0,
  }

  componentDidMount() {
    const { loadMovies } = this.props;
    loadMovies();
  }

  renderCarouselItem = (movie, index) => (
    <div class="carousel-item active">
      <img class="d-block w-100" src={movie.poster} alt={movie.title} />
    </div>
  );

  handleActiveSlide = (kurac, currentSlide) => {
    this.setState({
      currentSlide
    });
  }

  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 1,
      speed: 500,
      arrows: false,
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.movies.map((movie, index) => (
            <div>
              <img src={movie.poster} alt={movie.title} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
})

const mapDispatchToProps = dispatch => ({
  loadMovies: () => dispatch(loadMovies())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCarousel);

