import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import MovieCard from "../components/MovieCard";
import { Flex, Heading } from "@chakra-ui/react";

const StarredPage = () => {
  const {
    state: { starred },
  } = useAppContext();

  if (starred.length === 0) {
    return (
      <Heading textAlign="center" mt={4} size="lg" color="red.500">
        No Starred Movies
      </Heading>
    );
  }

  return (
    <Flex flexWrap="wrap" gap={8} mt={4} p={8}>
      {starred.map((movie) => (
        <MovieCard key={movie.id} movie={movie} isInList />
      ))}
    </Flex>
  );
};

export default StarredPage;
