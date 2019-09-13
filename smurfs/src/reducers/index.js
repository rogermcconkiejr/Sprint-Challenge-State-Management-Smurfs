import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE
  } from "../actions";
  
  const initialState = {
    smurf:[],
    isFetching: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
      console.log(state);
    switch (action.type) {
      case FETCHING_SMURF_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCHING_SMURF_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error:"",
          smurf: action.payload
        };
        console.log(state);
      default:
        return state;
    }
  };