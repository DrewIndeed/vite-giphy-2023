import {
  ADD_TO_FAVORITES,
  GET_FAVORITES,
  GET_MORE_TRENDING,
  GET_RANDOM,
  GET_SEARCH,
  GET_TRENDING,
  LOADING,
} from "@state/action";
import { globalReducer } from "@state/reducer";
import axios, { AxiosError } from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { toast } from "react-toastify";

// APIs info
const apiKey = import.meta.env.VITE_APP_API_KEY;
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

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
        `${baseUrl}/trending?api_key=${apiKey}&limit=12&offset=0`
      );

      // save data into context
      dispatch({ type: GET_TRENDING, payload: res.data.data });
    } catch (error) {
      let errorMessage = "Failed to get trending GIFs";
      if (error instanceof AxiosError) errorMessage = error.message;
      console.log(errorMessage);
    }
  };

  // [GET]: load more trending GIFs
  const getMoreTrending = async (newOffset: number) => {
    // loading is true
    dispatch({ type: LOADING });

    // start fetching
    try {
      // fetch using axios
      const res = await axios.get(
        `${baseUrl}/trending?api_key=${apiKey}&limit=12&offset=${newOffset}`
      );

      // save data into context
      dispatch({ type: GET_MORE_TRENDING, payload: res.data.data });
    } catch (error) {
      let errorMessage = "Failed to get more trending GIFs";
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

  // [LOCAL STORAGE]: check for existing data and add new item to favorites
  const saveToFavorites = (gifData: any) => {
    // access and find favorites in local storage
    const storedItems =
      JSON.parse(window.localStorage.getItem("myFavoriteGifs") as string) || [];

    // find in the list in local storage for the same data using id
    const existingItem = storedItems.find(
      (item: any) => item.id === gifData.id
    );

    // if there is  data with the same id
    // then, notify and stop adding process
    if (existingItem) {
      // notify here
      toast.error("Opps! Already Added!");
      return;
    }

    // concat new data to existing list
    const items = [...storedItems, gifData];

    // save to local storage
    window.localStorage.setItem("myFavoriteGifs", JSON.stringify(items));
    dispatch({ type: ADD_TO_FAVORITES, payload: gifData });
    // notify here
    toast.success("Yayy! Added to Favorties!");
  };

  // [LOCAL STORAGE]: check and get stored favorite items
  const getFromLocalStorage = () => {
    // access and find favorites in local storage
    const storedItems =
      JSON.parse(window.localStorage.getItem("myFavoriteGifs") as string) || [];
    dispatch({ type: GET_FAVORITES, payload: storedItems });
  };

  // [LOCAL STORAGE]: check and delete data with the same id as delete target
  const removeFromFavorites = (gifData: any) => {
    // access and find favorites in local storage
    const storedItems =
      JSON.parse(window.localStorage.getItem("myFavoriteGifs") as string) || [];

    // filter out items whose id is different from current delete target
    const items = storedItems.filter((item: any) => item.id !== gifData.id);

    // update favorites list in local storage
    window.localStorage.setItem("myFavoriteGifs", JSON.stringify(items));

    // get favorites list again for updated data
    getFromLocalStorage();

    // notify here
    toast.success("Removed from Favorties!");
  };

  // initial data populating
  useEffect(() => {
    getTrending();
    getFromLocalStorage();
  }, []);

  return (
    <DataContext.Provider
      value={{
        ...state,
        getRandom,
        getTrending,
        getSearchResults,
        saveToFavorites,
        removeFromFavorites,
        getMoreTrending,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
