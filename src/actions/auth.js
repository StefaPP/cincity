import { CALL_API } from '../middleware/api'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const loginAPI = ({ email, password}) => (dispatch, getState) => dispatch({
  [CALL_API]: {
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR],
    endpoint: `/login`,
    responseType: 'json',
    method: 'POST',
    body: {
      email,
      password,
    }
  }
});

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const login = ({ email, password }) => (dispatch, getState) => {
  return dispatch(loginAPI(email, password ))
};

