import axios from "axios";

export const Fetch_NEW_GREETING_REQUEST = "Fetch_NEW_GREETING_REQUEST";
export const Fetch_NEW_GREETING_SUCCESS = "Fetch_NEW_GREETING_SUCCESS";
export const Fetch_NEW_GREETING_FAILURE = "Fetch_NEW_GREETING_FAILURE";

export const fetchNewGreetingRequest = () => ({
  type: Fetch_NEW_GREETING_REQUEST,
});

export const fetchNewGreetingSuccess = (payload) => ({
  type: Fetch_NEW_GREETING_SUCCESS,
  payload,
});

export const fetchNewGreetingFailure = (payload) => ({
  type: Fetch_NEW_GREETING_FAILURE,
  payload
});

export const fetchNewGreeting = () => {
  return dispatch => {
    dispatch(fetchNewGreetingRequest());
    axios
      .get("https://calm-gorge-20349.herokuapp.com/api/random_greeting")
      .then((response) => {
          dispatch(fetchNewGreetingSuccess(response.data.message));
      })
      .catch((error) => dispatch(fetchNewGreetingFailure(error)));
  };
};
