import React from 'react';

const NavBar = ({searchTerm, setSearchTerm, searchSingleKanji}) => {
  return (

      <div className="search">

        <h1>Kanji App</h1>

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Kanji"
        />
        <button onClick={() => searchSingleKanji(searchTerm)}>
          Search</button>

      </div>
  );
}

export default NavBar;
