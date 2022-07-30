import React from 'react';

function HomePage() {
  return (
    <div className='ctr-homepage'>
        <p>
          Welcome to Kanji Info!
          <br />Enter a single Kanji character in the search bar to retrieve information about it.
          <br />Please note that the database is incomplete. It currently contains only 1,235 Jōyō Kanji.
          <br />Here are some example Kanji you can search: 雨 気 国 城 難
          <br />
          <br />Front-end created by Matthew Low.
          <br />Source code available on GitHub.
          <br />API and database provided by Kanji Alive.
          <br />UX and functionality programmed with ReactJS.
          <br />UI designed with WebFlow.
        </p>
    </div>
  );
}

export default HomePage;
