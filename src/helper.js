const filterBySearch = (movies, filters) => {
  return filters.search.trim() !== ""
    ? movies.filter(
        (movie) =>
          movie.title
            .toLowerCase()
            .includes(filters.search.trim().toLowerCase()) ||
          movie.cast.some((actor) =>
            actor.toLowerCase().includes(filters.search.trim().toLowerCase())
          ) ||
          movie.director
            .toLowerCase()
            .includes(filters.search.trim().toLowerCase())
      )
    : movies;
};

const filterByGenre = (movies, filters) => {
  return filters.genre !== "all"
    ? movies.filter((movie) => movie.genre.includes(filters.genre))
    : movies;
};
const filterByYear = (movies, filters) => {
  return filters.year !== ""
    ? movies.filter((movie) => "" + movie.year === filters.year)
    : movies;
};
const filterByRating = (movies, filters) => {
  return filters.rating !== ""
    ? movies.filter((movie) => "" + movie.rating === filters.rating)
    : movies;
};

export const getFilteredMovies = (movies, filters) => {
  const filterFunctions = [
    filterBySearch,
    filterByGenre,
    filterByYear,
    filterByRating,
  ];

  // This will make sure that the movies array passes through all the filter functions
  return filterFunctions.reduce((acc, func) => func(acc, filters), movies);
};

export const getGenresFromList = (movies) => {
  return [...new Set(movies.flatMap(({ genre }) => genre))].sort();
};

export const getAllYearsInRange = (lower, upper) => {
  const n = upper - lower + 1;
  return Array(n)
    .fill()
    .map((_, i) => i + lower);
};
