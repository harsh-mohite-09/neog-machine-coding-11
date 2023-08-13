import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { useAppContext } from "../context/AppContextProvider";

const initialState = {
  title: "",
  summary: "",
  year: "",
  cast: [],
  genre: [],
  rating: "",
  director: "",
  writer: "",
  imageURL: "",
};

const AddMovie = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [movieDetails, setMovieDetails] = useState(initialState);
  const { dispatch } = useAppContext();

  const addMovieHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_MOVIE",
      payload: {
        movie: {
          ...movieDetails,
          rating: +movieDetails.rating,
          year: +movieDetails.year,
          cast: movieDetails.cast.map((item) => item.trim()),
          genre: movieDetails.genre.map((item) => item.trim()),
          id: uuid(),
        },
      },
    });
    onClose();
    setMovieDetails(initialState);
  };

  const handleInputs = (e) => {
    setMovieDetails((movieDetails) => ({
      ...movieDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleArrayInputs = (e) => {
    setMovieDetails((movieDetails) => ({
      ...movieDetails,
      [e.target.name]: e.target.value.split(","),
    }));
  };

  return (
    <>
      <Button variant="myBlack" onClick={onOpen}>
        Add a Movie
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg" m="2">
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Add Movie</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={addMovieHandler}>
            <ModalBody justifyContent="space-between">
              <Flex flexDir="column" gap={2}>
                <FormControl isRequired>
                  <FormLabel>Title</FormLabel>
                  <Input
                    name="title"
                    value={movieDetails.title}
                    onChange={handleInputs}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Summary</FormLabel>
                  <Input
                    name="summary"
                    value={movieDetails.summary}
                    onChange={handleInputs}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Year</FormLabel>
                  <Input
                    type="number"
                    min={0}
                    name="year"
                    value={movieDetails.year}
                    onChange={handleInputs}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Cast (Enter comma separated values)</FormLabel>
                  <Input
                    name="cast"
                    value={movieDetails.cast.join(",")}
                    onChange={handleArrayInputs}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Genre (Enter comma separated values)</FormLabel>
                  <Input
                    name="genre"
                    value={movieDetails.genre.join(",")}
                    onChange={handleArrayInputs}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Rating</FormLabel>
                  <Input
                    type="number"
                    min={0}
                    name="rating"
                    value={movieDetails.rating}
                    onChange={handleInputs}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Director</FormLabel>
                  <Input
                    name="director"
                    value={movieDetails.director}
                    onChange={handleInputs}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Writer</FormLabel>
                  <Input
                    name="writer"
                    value={movieDetails.writer}
                    onChange={handleInputs}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    name="imageURL"
                    value={movieDetails.imageURL}
                    onChange={handleInputs}
                  />
                </FormControl>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} colorScheme="teal" type="submit">
                Add Movie
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddMovie;
