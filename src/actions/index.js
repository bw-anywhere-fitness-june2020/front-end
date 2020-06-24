import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchUser = (user) => (dispatch) => {
  dispatch({ type: FETCH_START });

  axiosWithAuth()
    .post('auth/login', user)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      console.log(localStorage);
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data.created_user,
      });
    })
    .catch((err) =>
      dispatch({ type: FETCH_FAILURE, payload: err.response }),
    );
};

export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const postUser = (user) => (dispatch) => {
  dispatch({ type: POST_START });

  axiosWithAuth()
    .post('auth/register', user)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: POST_SUCCESS,
        payload: res.data.created_user,
      });
    })
    .catch((err) =>
      dispatch({ type: POST_FAILURE, payload: err.response }),
    );
};

// export const CHECK_BOX = 'CHECK_BOX'

// export const checkBox = () => dispatch => {
//   dispatch ({type: CHECK_BOX})

//   const checkboxChange = (e) => {
//     setSignUp({
//       ...signUp,
//       userpermisions: 23412,
//     });
//   };

// }
