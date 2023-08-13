import { Flex, Heading, Select } from "@chakra-ui/react";
import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import AddMovie from "./AddMovie";
import { getAllYearsInRange, getGenresFromList } from "../helper";

const Filters = () => {
  const {
    state: { movies, filters },
    dispatch,
  } = useAppContext();

  const genres = getGenresFromList(movies);

  const years = getAllYearsInRange(1990, 2023);

  const ratings = Array(10)
    .fill()
    .map((_, i) => i + 1);

  const handleGenre = (e) => {
    dispatch({ type: "FILTER_BY_GENRE", payload: { genre: e.target.value } });
  };

  const handleYear = (e) => {
    dispatch({ type: "FILTER_BY_YEAR", payload: { year: e.target.value } });
  };

  const handleRating = (e) => {
    dispatch({
      type: "FILTER_BY_RATING",
      payload: { rating: e.target.value },
    });
  };

  return (
    <Flex w="full" justifyContent="space-between" alignItems="center">
      <Heading size="md">Movies</Heading>
      <Select w="fit-content" value={filters.genre} onChange={handleGenre}>
        <option value="all">All Genre</option>
        {genres.map((genre, i) => {
          return (
            <option key={i} value={genre}>
              {genre}
            </option>
          );
        })}
      </Select>
      <Select
        w="fit-content"
        placeholder="Release Year"
        value={filters.year}
        onChange={handleYear}
      >
        {years.map((year, i) => {
          return (
            <option key={i} value={year}>
              {year}
            </option>
          );
        })}
      </Select>
      <Select
        w="fit-content"
        placeholder="Rating"
        value={filters.rating}
        onChange={handleRating}
      >
        {ratings.map((rating, i) => {
          return (
            <option key={i} value={rating}>
              {rating}
            </option>
          );
        })}
      </Select>
      <AddMovie />
    </Flex>
  );
};

export default Filters;
