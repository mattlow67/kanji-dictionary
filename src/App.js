import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import KanjiBox from './components/KanjiBox';
import SearchIcon from './search.svg';

const API_URL = 'https://kanjialive-api.p.rapidapi.com/api/public/kanji/';
const HEADERS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com',
    'X-RapidAPI-Key': '0d2f56666bmshb011cf5ae77339fp182053jsnb4d3b3653796'
  }
};

function App() {
  const [kanji, setKanji] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [onHomePage, setOnHomePage] = useState(true);

  useEffect(() => {
    setOnHomePage(true);
    document.title = "Kanji Info"
  }, []);

  const searchSingleKanji = async (k) => {
    const response = await fetch(`${API_URL}${k}`, HEADERS);
    const data = await response.json()
    console.log(data)

    setKanji(data);

    setOnHomePage(false);
  }

  return (
    <div className="app">

      <NavBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchSingleKanji={searchSingleKanji}
        setOnHomePage={setOnHomePage}
        searchIcon={SearchIcon}
      />

    { onHomePage ? (
      <HomePage />
    ): ( <KanjiBox kanjidata={kanji}/> )
    }

    <div className="footer">
      <p onClick={() => setOnHomePage(true)}>About</p>
      <a href="https://github.com/mattlow67/kanji-search" target="_blank">
        <p>Source Code</p>
      </a>
      <a href="https://kanjialive.com/" target="_blank">
        <p>Kanji Alive</p>
      </a>
    </div>

  </div>

  );
};

export default App;
