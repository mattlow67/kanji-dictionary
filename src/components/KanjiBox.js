import React from 'react';

function KanjiBox({ kanji }) {
  return (
    <>
    { kanji.character ? (

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
    }
  </>
  );
}

export default KanjiBox;
