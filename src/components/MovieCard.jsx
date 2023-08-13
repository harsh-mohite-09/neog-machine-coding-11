import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";

const MovieCard = ({ movie, isInList }) => {
  const {
    state: { starred, watchlist },
    dispatch,
  } = useAppContext();

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
    <Card maxW="xs" boxShadow="lg">
      <CardBody p={0}>
        <Link to={`/detail/${movie.id}`}>
          <Box h="20rem" overflow="hidden">
            <Image
              src={movie.imageURL}
              alt={movie.title}
              borderRadius="lg"
              objectFit="cover"
            />
          </Box>
        </Link>

        <Stack spacing="3" p={4}>
          <Heading fontSize="1.5rem" textAlign="center">
            {movie.title}
          </Heading>
          <Text>{movie.summary}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
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
            {isStarred ? (isInList ? "Unstar" : "Starred") : "Star"}
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
            {isWatchlisted
              ? isInList
                ? "Remove Watchlist"
                : "Added to Watchlist"
              : "Add to Watchlist"}
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
