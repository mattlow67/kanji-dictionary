import React from 'react';
import { useParams } from 'react-router-dom';

function KanjiBox({ kanjidata }) {
  const { kanjiid } = useParams();

  return (
    <div className='ctr-kanji'>

      { kanjidata.kanji ? (

        <>
        <div className='ctr-row1'>

          <div className='kanjilarge'>
              {kanjiid}
          </div>

          <div className="kanjifonts">
            <span className="kanjifonts1">{kanjidata.kanji.character}</span>
            <span className="kanjifonts2">{kanjidata.kanji.character}</span>
            <br /><span className="kanjifonts3">{kanjidata.kanji.character}</span>
            <span className="kanjifonts4">{kanjidata.kanji.character}</span>
          </div>

          <div className='kanjiinfo'>
            <p>
              {/*Character: {kanjidata.kanji.character}
              <br />*/}Meaning: {kanjidata.kanji.meaning.english}
              <br />Kunyomi: {kanjidata.kanji.kunyomi.hiragana}
              <br />Onyomi: {kanjidata.kanji.onyomi.katakana}
              <br />Stroke Count: {kanjidata.kanji.strokes.count}
              <br />Radical: {kanjidata.radical.character}

              {/*
              <div className='kanjifonts'>
                {kanjidata.kanji.character}{kanjidata.kanji.character}
                <br />{kanjidata.kanji.character}{kanjidata.kanji.character}
              </div>
              */}
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
          </div> {/*kanjiinfo*/}
        </div>  {/*ctr-row1*/}

          <div className='ctr-row2'>

            <div className='strokevid'>

              <video controls width="160" key={kanjidata.kanji.video.webm}>
                <source src={kanjidata.kanji.video.webm}
                        type="video/webm" />
                <source src={kanjidata.kanji.video.mp4}
                        type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>

              {/*
              <p>
                Stroke Count: {kanjidata.kanji.strokes.count}
                <br />Radical: {kanjidata.radical.character}
              </p>
              */}

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
