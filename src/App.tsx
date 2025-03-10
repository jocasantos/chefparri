import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Box } from "@chakra-ui/react";
import Projects from "./components/HowItWorks";
import Contact from "./components/Contact";
import WhyChoose from "./components/WhyChoose";
import Price from "./components/Price";

function App() {
  return (
    <>
      <Navbar />
      <Box bg="white" pt={40}></Box>

      <Hero />
      <Box bg="white" pt={60}></Box>

      <About />
      <Box bg="white" pt={40}></Box>

      <WhyChoose />
      <Box bg="white" pt={40}></Box>

      <Price />
      <Box bg="white" pt={40}></Box>

      <Projects />
      <Box bg="white" pt={20}></Box>

      <Contact />
    </>
  );
}

export default App;
