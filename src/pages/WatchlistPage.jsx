import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import MovieCard from "../components/MovieCard";
import { Flex, Heading } from "@chakra-ui/react";

const WatchlistPage = () => {
  const {
    state: { watchlist },
  } = useAppContext();

  if (watchlist.length === 0) {
    return (
      <Heading textAlign="center" mt={4} size="lg" color="red.500">
        No Movies in Watchlist
      </Heading>
    );
  }

  return (
    <Flex flexWrap="wrap" gap={8} mt={4} p={8}>
      {watchlist.map((movie) => (
        <MovieCard key={movie.id} movie={movie} isInList />
      ))}
    </Flex>
  );
};

export default WatchlistPage;
