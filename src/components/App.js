import Header from "./Header";
import {
  Box,
  ChakraProvider,
  ColorModeProvider,
  ColorModeScript,
  extendTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import theme from "./theme";
import ToggleColorMode from "./ToggleColorMode";
import Destinations from "./Destinations";

function App() {
  return (
    <Box overflow={"hidden"}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Clients" element={<Clients />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Destinations" element={<Destinations />} />
          </Routes>
        </Router>
        <Footer />
      </ChakraProvider>
    </Box>
  );
}

export default App;
