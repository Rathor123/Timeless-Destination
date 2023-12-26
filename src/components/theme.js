import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Nunito",
      },
    },
  },

  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      main: "#90ee91",
      sec: "#f5f5f5",
      third: "#e5f6df",
      four: "#caeec2",
      dark: "#1A202C",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontSize: "2xl", // Font size
        color: "brand.main", // Text color
        fontWeight: "bold", // Font weight
        marginBottom: "1rem", // Margin bottom
      },
    },
    Link: {
      baseStyle: {
        color: "red",
        _hover: {
          color: "#90ee91",
        },
      },
    },
    Text: {
      light: {
        color: "#605a5a",
      },
      dark: {
        color: "white",
      },
    },
    Button: {
      variants: {
        light: {
          bg: "brand.main", // Background color for light mode
          color: "white", // Text color for light mode
          _hover: {
            bg: "brand.sec", // Hover background color for light mode
          },
        },
        dark: {
          bg: "brand.dark", // Background color for dark mode
          color: "white", // Text color for dark mode
          _hover: {
            bg: "brand.sec", // Hover background color for dark mode
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Nunito",
      },
    },
  },
});

export default theme;
