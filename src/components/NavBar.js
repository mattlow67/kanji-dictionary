import React from 'react';

const NavBar = ({searchTerm, setSearchTerm, searchSingleKanji, searchIcon}) => {
  return (
    <div className="ctr-navbar">

      <h1>漢字 Kanji Info</h1>

      <div className="searchbar">

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Kanji..."
          onKeyPress={(e) => {
            if (e.key === "Enter") searchSingleKanji(searchTerm);
          }}
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
