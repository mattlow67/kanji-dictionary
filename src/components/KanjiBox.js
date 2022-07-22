import React from 'react';

function KanjiBox({ kanji }) {
  return (
    <div className='container'>

      { kanji.character ? (

          <div className="kanjibox">

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
      }

    </div>
  );
}

export default KanjiBox;
