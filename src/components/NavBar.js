import React from 'react';
import SearchIcon from './search.svg';

const NavBar = ({searchTerm, setSearchTerm, searchSingleKanji, setOnHomePage}) => {
  return (
    <div className="container">
      <div className="navbar">

        <img
          src="https://via.placeholder.com/200x100"
          onClick={() => setOnHomePage(true)}
        />

        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Kanji"
          />
          <img
            src={SearchIcon}
            alt='search'
            onClick={() => searchSingleKanji(searchTerm)}
          />
          {/*
            <button onClick={() => searchSingleKanji(searchTerm)}>
            Search</button>
          */}
        </div>

      </div>
    </div>
  );
}

export default NavBar;
