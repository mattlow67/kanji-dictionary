import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import KanjiBox from './components/KanjiBox';
import About from './components/About';
import Footer from './components/Footer';
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

  useEffect(() => {
    //Default title "React App" still loads first
    //Can be changed in public/index.html in <title></title>
    document.title = "Kanji Info"

  }, []);

  const searchSingleKanji = async (k) => {
    const response = await fetch(`${API_URL}${k}`, HEADERS);
    const data = await response.json();
    console.log(data);
    setKanji(data);
  }

  return (

    <BrowserRouter>
      <div className="app">
        <NavBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchSingleKanji={searchSingleKanji}
          searchIcon={SearchIcon}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kanji" element={<KanjiBox kanjidata={kanji} />} />
          <Route path="/kanji/:kanjiid" element={<KanjiBox kanjidata={kanji} />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>

  /*
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
      <a href="https://github.com/mattlow67/kanji-search" target="_blank" rel="noreferrer">
        <p>Source Code</p>
      </a>
      <a href="https://kanjialive.com/" target="_blank" rel="noreferrer">
        <p>Kanji Alive</p>
      </a>
    </div>

  </div>
  */

  );
};

export default App;
