import React, { useRef } from 'react';
import logo from "../assets/img/icono.svg";
function SearchBar( props ) {
    const botonRef = useRef();
  
    return (
      <form className="container mt-11" onSubmit={props.searchMovies}>
       
        <input
          type="text"
          placeholder="search"
          onChange={(e) => props.functionSetSearchBar(e.target.value)}
        />
        <button className="b-buscar" ref={botonRef}></button>
        <span className="navbar-text">
              <div className="social-icon">
                <a href="#trailer" target=""  onClick={(e) => {
              botonRef.current.click();
            }}>
                   <img src={logo} alt="" />
                </a>
                </div>
                
                </span>
      </form>
    );
  }
export default SearchBar  