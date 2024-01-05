import React from "react";
import { Container, Navbar, Footer } from "./components/index";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import MyProjects from "./pages/AllProjects/MyProjects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myprojects" element={<MyProjects />} />
        </Routes>
        <Footer />
      </Router>
      <Toaster />
    </Container>
  );
};

export default App;
