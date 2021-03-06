import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_START,
  POST_SUCCESS,
  POST_FAILURE,
} from '../actions/index';

const initialState = {
  // users: [],
  // isFetching: false,
  // error: '',
  username: '',
  password: '',
  userpermisions: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        userpermisions: action.payload.userpermisions,
        // ...state,
        // users: action.payload,
        // isFetching: true,
        // error: ''
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case POST_START:
      return {
        ...state,

        // users: [
        //   ...state.users
        // ],
        // isFetching: true,
        // error: ''
      }
    case POST_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        userpermisions: action.payload.userpermisions
        // users: action.payload,
        // isFetching: false,
        // error: ''
      };
    case POST_FAILURE:
      return {
        ...state,
        // isFetching: false,
        // error: action.payload
      }
  
    default:
      return state;
  }
};

export default reducer
