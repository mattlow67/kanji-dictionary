import React from 'react';

function KanjiBox({ kanjidata }) {
  return (
    <div className='container'>

      { kanjidata.kanji ? (

          <div className="kanjibox">

            <img
              src={kanjidata.kanji.video.poster ? kanjidata.kanji.video.poster : "https://via.placeholder.com/300"}
              alt="No Image Found"
            />

            <p>
              Character: {kanjidata.kanji.character}
              <br/>Meaning: {kanjidata.kanji.meaning.english}
              <br/>Kunyomi: {kanjidata.kanji.kunyomi.hiragana}
              <br/>Onyomi: {kanjidata.kanji.onyomi.katakana}
            </p>

            <ul>
              <li>Grade: {kanjidata.references.grade}</li>
              <li>Kodansha: {kanjidata.references.kodansha}</li>
              <li>Nelson: {kanjidata.references.classic_nelson}</li>
            </ul>

            <ul>

              {(() => {
                const examples = [];
                for (let i = 0; i < kanjidata.examples.length && i < 6; i++) {
                  examples.push(<li>{kanjidata.examples[i].japanese}</li>);
                }
                return examples;
              })()}

            </ul>

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
