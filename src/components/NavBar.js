import React from 'react';

const NavBar = ({searchTerm, setSearchTerm, searchSingleKanji, setOnHomePage, searchIcon}) => {
  return (
    <div className="ctr-navbar">

      <h1>漢字 Kanji Search</h1>

      <div className="searchbar">

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Kanji..."
        />

        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchSingleKanji(searchTerm)}
        />
      {/*
        <button onClick={() => searchSingleKanji(searchTerm)}>
          Search</button>
      */}

      </div>


    </div>
  );
}

export default NavBar;
