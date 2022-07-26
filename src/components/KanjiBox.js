import React from 'react';

function KanjiBox({ kanjidata }) {
  return (
    <div className='ctr-kanji'>

      { kanjidata.kanji ? (

        <>

          <img
            src={kanjidata.kanji.video.poster ? kanjidata.kanji.video.poster : "https://via.placeholder.com/300"}
            alt="No Image Found"
          />

          <p>
            {/*Character: {kanjidata.kanji.character}
            <br />*/}Meaning: {kanjidata.kanji.meaning.english}
            <br />Kunyomi: {kanjidata.kanji.kunyomi.hiragana}
            <br />Onyomi: {kanjidata.kanji.onyomi.katakana}
          </p>

          <p>
            Grade: {kanjidata.references.grade}
            <br />Kodansha: {kanjidata.references.kodansha}
            <br />Nelson: {kanjidata.references.classic_nelson}
          </p>

          <p>
            Examples:
            {(() => {
              const examples = [];
              for (let i = 0; i < kanjidata.examples.length && i < 6; i++) {
                examples.push(<><br />{kanjidata.examples[i].japanese}</>);
              }
              return examples;
            })()}

          </p>

          <div className='kanjifonts'>
            <p>
              {kanjidata.kanji.character}    {kanjidata.kanji.character}
              <br />
              {kanjidata.kanji.character}    {kanjidata.kanji.character}
            </p>
          </div>

          <div className='strokeseq'>
            {(() => {
              const stkseq = [];
              for (let i = 0; i < kanjidata.kanji.strokes.images.length; i++) {
                stkseq.push(<><img
                  src={kanjidata.kanji.strokes.images[i] ? kanjidata.kanji.strokes.images[i] : 'https://via.palceholder.com/100'}
                  alt='kanji' /></>);
              }
              return stkseq;
            })()}
          </div>

        </>

        ): (
          <>
            <p>No results found.</p>
          </>
          )
      }

    </div>
  );
}

export default KanjiBox;
