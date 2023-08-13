import { Input } from "@chakra-ui/react";
import React from "react";
import { useAppContext } from "../context/AppContextProvider";

const Searchbar = () => {
  const {
    state: {
      filters: { search },
    },
    dispatch,
  } = useAppContext();

  const handleSearch = (e) => {
    dispatch({
      type: "FILTER_BY_SEARCH",
      payload: { searchText: e.target.value },
    });
  };

  return (
    <Input
      w="20rem"
      bg="white"
      color="black"
      placeholder="Search movies by title, cast and director"
      value={search}
      onChange={handleSearch}
    />
  );
};

export default Searchbar;
