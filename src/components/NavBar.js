import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({searchTerm, setSearchTerm, searchSingleKanji, searchIcon}) => {
  const navigate = useNavigate()
  const handleClick = (term) => {
    searchSingleKanji(term);
    if (term) {
      navigate(`/kanji/${term}`);
    }
    else {
      navigate("/kanji");
    }
  };

  return (
    <div className="ctr-navbar">
      <Link to="/">
        <h1>漢字 Kanji Info</h1>
      </Link>

      <div className="searchbar">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Kanji..."
          onKeyPress={(e) => {
            if (e.key === "Enter") handleClick(searchTerm);
          }}
        />

        <img
          src={searchIcon}
          alt="search"
          onClick={() => handleClick(searchTerm)}
        />

      </div>
    </div>
  );
}

export default NavBar;
