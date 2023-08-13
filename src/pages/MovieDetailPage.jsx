import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const MovieDetailPage = () => {
  const {
    state: { movies, starred, watchlist },
    dispatch,
  } = useAppContext();

  const { id: movieId } = useParams();

  const movie = movies.find(({ id }) => "" + id === movieId);

  const isStarred = starred.some(({ id }) => id === movie.id);
  const isWatchlisted = watchlist.some(({ id }) => id === movie.id);

  const handleStarred = () => {
    if (isStarred) {
      dispatch({ type: "REMOVE_FROM_STARRED", payload: { id: movie.id } });
    } else {
      dispatch({ type: "ADD_TO_STARRED", payload: { movie: movie } });
    }
  };
  const handleWatchlist = () => {
    if (isWatchlisted) {
      dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: { id: movie.id } });
    } else {
      dispatch({ type: "ADD_TO_WATCHLIST", payload: { movie: movie } });
    }
  };

  return (
    <Flex as={"main"} flexDir="column" alignItems="center" gap={8} p={4}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        boxShadow="xl"
        w="80%"
        p={4}
      >
        <Image
          objectFit="cover"
          maxW="20rem"
          src={movie.imageURL}
          alt={movie.title}
        />

        <CardBody>
          <Flex flexDir="column" gap={4}>
            <Heading fontSize="1.5rem">{movie.title}</Heading>
            <Text>{movie.summary}</Text>
            <Text>Year: {movie.year}</Text>
            <Text>Genre: {movie.genre.join(", ")}</Text>
            <Text>Rating: {movie.rating}</Text>
            <Text>Director: {movie.director}</Text>
            <Text>Writer: {movie.writer}</Text>
            <Text>Cast: {movie.cast.join(", ")}</Text>
            <Flex w="full" justifyContent="space-between">
              <Button
                onClick={handleStarred}
                bg={isStarred ? "#FFD700" : "#333"}
                color={isStarred ? "#4C4000" : "white"}
                _hover={{
                  bg: isStarred ? "#FFD700" : "#333",
                  color: isStarred ? "#4C4000" : "white",
                }}
              >
                {isStarred ? "Starred" : "Star"}
              </Button>
              <Button
                onClick={handleWatchlist}
                bg={isWatchlisted ? "green.400" : "#333"}
                color={isWatchlisted ? "black" : "white"}
                _hover={{
                  bg: isWatchlisted ? "green.400" : "#333",
                  color: isWatchlisted ? "black" : "white",
                }}
              >
                {isWatchlisted ? "Added to Watchlist" : "Add to Watchlist"}
              </Button>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default MovieDetailPage;
