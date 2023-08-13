import React from "react";
import { Flex, Link as ChakraLink, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const links = [
    { id: 1, title: "Movies", linkTo: "/" },
    { id: 2, title: "Watch List", linkTo: "/watchlist" },
    { id: 3, title: "Starred Movies", linkTo: "/starred" },
  ];

  return (
    <Flex
      bg="#323232"
      py={3}
      px={4}
      color="white"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading size="md">IMDB</Heading>
      <Searchbar />
      <Flex gap={8} mr={8}>
        {links.map((link) => {
          return (
            <ChakraLink
              key={link.id}
              as={NavLink}
              to={link.linkTo}
              color="#929292"
              _activeLink={{
                color: "white",
              }}
              _hover={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {link.title}
            </ChakraLink>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Navbar;
