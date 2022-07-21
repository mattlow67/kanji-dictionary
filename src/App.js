import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';

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
    document.title = "Kanji App"
  }, []);

  const searchSingleKanji = async (k) => {
    const response = await fetch(`${API_URL}${k}`, HEADERS);
    const data = await response.json()
    console.log(data)

    if (!data.kanji) {
      setKanji(data);
    } else {
      setKanji(data.kanji);
    }

    setOnHomePage(false);
  }

  return (
    <div className="app">

      <NavBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchSingleKanji={searchSingleKanji}
        setOnHomePage={setOnHomePage}
      />

    {
      onHomePage ? (
        <HomePage />
      ): ( kanji.character ? (
            <div className="kanjiBlock">
              <img
                src={kanji.video.poster ? kanji.video.poster : "https://via.placeholder.com/300"}
                alt="No Image Found"
              />
              <div className="divider">
                <p>Character: {kanji.character}</p>
                <p>Meaning: {kanji.meaning.english}</p>
                <p>Kunyomi: {kanji.kunyomi.hiragana}</p>
                <p>Onyomi: {kanji.onyomi.katakana}</p>
              </div>

            </div>
          ): (
            <div>
              <p>no results found</p>
            </div>
          )
        )
    }
    
    </div>
  );
};

export default App;
