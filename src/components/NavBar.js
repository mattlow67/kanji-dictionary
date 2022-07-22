import React from 'react';

const NavBar = ({searchTerm, setSearchTerm, searchSingleKanji, setOnHomePage}) => {
  return (
    <div className="container">
      <div className="navbar">

        <img
          src="https://via.placeholder.com/200x100"
          onClick={() => setOnHomePage(true)}
        />

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Kanji"
        />
        <button onClick={() => searchSingleKanji(searchTerm)}>
          Search</button>

      </div>
    </div>
  );
}

export default NavBar;
