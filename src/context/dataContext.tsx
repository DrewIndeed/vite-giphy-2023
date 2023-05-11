import { GET_RANDOM, GET_SEARCH, GET_TRENDING, LOADING } from "@state/action";
import { globalReducer } from "@state/reducer";
import axios, { AxiosError } from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

// APIs info
const apiKey = import.meta.env.VITE_APP_API_KEY;
const baseUrl = "https://api.giphy.com/v1/gifs";

const initialState = {
  loading: false, // api loading state
  trending: [], // trending GIFs list
  random: {}, // a random GIFs
  searchResults: [], // searching GIFs list
  favorites: [], // favorized GIFs list
};

// GIFs data global context
const DataContext = createContext<any>(initialState);

// data wrapper
export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // [GET]: 30 trending GIFs
  const getTrending = async () => {
    // if trending is already populated
    if (initialState.trending.length > 0) return;

    // loading is true
    dispatch({ type: LOADING });

    // start fetching
    try {
      // fetch using axios
      const res = await axios.get(
        `${baseUrl}/trending?api_key=${apiKey}&limit=30`
      );

      // save data into context
      dispatch({ type: GET_TRENDING, payload: res.data.data });
    } catch (error) {
      let errorMessage = "Failed to get trending GIFs";
      if (error instanceof AxiosError) errorMessage = error.message;
      console.log(errorMessage);
    }
  };

  // [GET]: 1 random GIF
  const getRandom = async () => {
    // if random is already populated
    if (Object.keys(initialState.random).length > 0) return;

    // loading is true
    dispatch({ type: LOADING });

    // start fetching
    try {
      // fetch using axios
      const res = await axios.get(`${baseUrl}/random?api_key=${apiKey}`);

      // save data into context
      dispatch({ type: GET_RANDOM, payload: res.data.data });
    } catch (error) {
      let errorMessage = "Failed to get random GIF";
      if (error instanceof AxiosError) errorMessage = error.message;
      console.log(errorMessage);
    }
  };

  // [GET]: search for GIFs by query strings
  const getSearchResults = async (query: string) => {
    // if search result is already populated
    if (initialState.searchResults.length > 0) return;

    // loading is true
    dispatch({ type: LOADING });

    // start fetching
    try {
      // fetch using axios
      const res = await axios.get(
        `${baseUrl}/search?api_key=${apiKey}&q=${query}&limit=30`
      );

      // save data into context
      dispatch({ type: GET_SEARCH, payload: res.data.data });
    } catch (error) {
      let errorMessage = "Failed to get GIFs search results";
      if (error instanceof AxiosError) errorMessage = error.message;
      console.log(errorMessage);
    }
  };

  // initial data populating
  useEffect(() => {
    getTrending();
    getRandom();
  }, []);

  return (
    <DataContext.Provider
      value={{
        ...state,
        getRandom,
        getSearchResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
