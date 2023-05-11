import { GET_TRENDING, LOADING } from "./action";

export const globalReducer = (state: {}, action: any) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case GET_TRENDING:
      return {
        ...state,
        loading: false,
        trending: action.payload,
      };

    default:
      break;
  }

  return state;
};
