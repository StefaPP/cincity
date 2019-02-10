import { CALL_API } from '../middleware/api'

export const MOVIES_REQUEST = 'MOVIES_REQUEST'
export const MOVIES_SUCCESS = 'MOVIES_SUCCESS'
export const MOVIES_ERROR = 'MOVIES_ERROR'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchMovies = () => (dispatch, getState) => dispatch({
  [CALL_API]: {
    types: [MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_ERROR],
    endpoint: `/movies`,
    responseType: 'json'
  }
});

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const loadMovies = (login, requiredFields = []) => (dispatch, getState) => {
  return dispatch(fetchMovies())
};

