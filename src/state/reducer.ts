import {
  ADD_TO_FAVORITES,
  GET_FAVORITES,
  GET_RANDOM,
  GET_SEARCH,
  GET_TRENDING,
  LOADING,
} from "./action";

export const globalReducer = (state: any, action: any) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case GET_TRENDING:
      return {
        ...state,
        loading: false,
        trending: action.payload,
      };

    case GET_RANDOM:
      return {
        ...state,
        loading: false,
        random: action.payload,
      };

    case GET_SEARCH:
      return {
        ...state,
        loading: false,
        searchResults: action.payload,
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };

    default:
      break;
  }

  return state;
};
