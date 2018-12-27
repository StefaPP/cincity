import React from 'react';
import { connect } from 'react-redux';
import { loadMovies } from '../../actions';
import { MovieCard } from './components/MovieCard';
import './assets/style/index.css';

class Movies extends React.Component {

  componentDidMount() {
    const { loadMovies } = this.props;
    loadMovies();
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map(movie => (<MovieCard key={movie._id} movie={movie} />))}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  movies: state.movies,
})

const mapDispatchToProps = dispatch => ({
  loadMovies: () => dispatch(loadMovies())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);