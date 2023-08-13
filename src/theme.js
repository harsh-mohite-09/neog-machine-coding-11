import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
    Button: {
      variants: {
        myRed: {
          bg: "red.400",
          color: "white",
          _hover: {
            bg: "red.400",
          },
          _active: {
            bg: "red.400",
          },
        },
      },
    },
  },
});

export default theme;
