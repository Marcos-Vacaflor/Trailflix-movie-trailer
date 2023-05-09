import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo_personal.png";

import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header(props)  {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img style={{width:50}} src={logo} alt="Logo" />
          </Navbar.Brand>
          <SearchBar
            functionSetSearchBar={props.functionSetSearchBar}
            searchMovies={props.searchMovies}
            ></SearchBar>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#visualizer"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("visualizer")}
              >
                Visualizador
              </Nav.Link>
              <Nav.Link
                href="#moviesList"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("moviesList")}
              >
                Peliculas
              </Nav.Link>
             
            </Nav>
         
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default Header