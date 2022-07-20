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

      <h1>Hello, world!</h1>

      <div>
        <br />{kanji.character}
        <br />{kanji.kunyomi.hiragana}
        <br />{kanji.meaning.english}
      </div>

      <div className="search">
        <input

        />
      </div>

    </div>
  );
};

export default App;
