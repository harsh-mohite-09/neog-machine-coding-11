import { Flex } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContextProvider";
import Filters from "../components/Filters";
import MovieList from "../components/MovieList";
import { getFilteredMovies } from "../helper";

const HomePage = () => {
  const {
    state: { movies, filters },
  } = useAppContext();

  const filteredMovies = getFilteredMovies(movies, filters);

  return (
    <Flex px={8} py={4} flexDir="column" gap={4}>
      <Filters />
      <MovieList movies={filteredMovies} />
    </Flex>
  );
};

export default HomePage;
