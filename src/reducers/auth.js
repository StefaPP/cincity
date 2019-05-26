const INITIAL_STATE = {
    loading: false,
    error: '',
  };

export default function auth(state = [], action) {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return { ...state, loading: true }}
    case 'LOGIN_SUCCESS': {
      return { ...state, ...INITIAL_STATE, ...action.response.body }}
    case 'LOGIN_ERROR':{
      return { ...state, error: 'Login failed' }}
    default:
      return state;
  }
};