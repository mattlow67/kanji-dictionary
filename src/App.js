import React, { useState, useEffect } from 'react';
import './App.css';

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
    searchSingleKanji('雨');
  }, []);

  const searchSingleKanji = async (k) => {
    const response = await fetch(`${API_URL}${k}`, HEADERS);
    const data = await response.json()
    console.log(data)
    setKanji(data.kanji);
  }

  return (
    <div className="app">

      <h1>Kanji App</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Kanji"
        />
        <button onClick={() => searchSingleKanji(searchTerm)}>
          Search</button>
      </div>

      {kanji.character ? (
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
      )}

    </div>
  );
};

export default App;
