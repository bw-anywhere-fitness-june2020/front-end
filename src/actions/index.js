import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchUser = () => (dispatch) => {
  dispatch({ type: FETCH_START });

  axios
    .get()
    .then((res) => {
      console.log(res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
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

  axios
    .post('', user)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: POST_FAILURE, payload: err.response }),
    );
};
