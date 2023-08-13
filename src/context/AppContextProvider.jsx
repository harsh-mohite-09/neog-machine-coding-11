import { createContext, useContext, useReducer } from "react";
import { movies } from "../data";

const AppContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = JSON.parse(localStorage.getItem("moviesData")) || {
  movies: movies,
  starred: [],
  watchlist: [],
  filters: {
    search: "",
    genre: "all",
    year: "",
    rating: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        filters: { ...state.filters, search: action.payload.searchText },
      };

    case "FILTER_BY_GENRE":
      return {
        ...state,
        filters: { ...state.filters, genre: action.payload.genre },
      };

    case "FILTER_BY_YEAR":
      return {
        ...state,
        filters: { ...state.filters, year: action.payload.year },
      };
    case "FILTER_BY_RATING":
      return {
        ...state,
        filters: { ...state.filters, rating: action.payload.rating },
      };

    case "ADD_TO_STARRED":
      return {
        ...state,
        starred: [...state.starred, action.payload.movie],
      };

    case "REMOVE_FROM_STARRED":
      return {
        ...state,
        starred: state.starred.filter(({ id }) => id !== action.payload.id),
      };

    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload.movie],
      };

    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(({ id }) => id !== action.payload.id),
      };

    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload.movie],
      };

    default:
      return;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  localStorage.setItem("moviesData", JSON.stringify(state));

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
