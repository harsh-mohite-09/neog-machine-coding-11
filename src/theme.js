import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
    Button: {
      variants: {
        myBlack: {
          bg: "#333",
          color: "white",
          _hover: {
            bg: "#333",
          },
          _active: {
            bg: "#333",
          },
        },
      },
    },
  },
});

export default theme;
