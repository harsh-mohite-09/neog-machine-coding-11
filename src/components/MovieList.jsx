import React from "react";
import MovieCard from "./MovieCard";
import { Flex, Heading } from "@chakra-ui/react";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <Heading textAlign="center" mt={4} size="lg" color="red.500">
        No Movies Found
      </Heading>
    );
  }

  return (
    <Flex flexWrap="wrap" gap={8} mt={4}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Flex>
  );
};

export default MovieList;
