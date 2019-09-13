import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    ADD_SMURF
  } from "../actions";
  
export const initialState = {
    smurf:[],
    isFetching: false,
    error: "",
    newSmurf:{}
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
        case ADD_SMURF:
            return [...state,
                {
                newSmurf: action.payload
                }
            ];
      default:
        return state;
    }
  };