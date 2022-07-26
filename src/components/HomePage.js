import React from 'react';

function HomePage() {
  return (
    <div className='ctr-homepage'>
        <p>
          Welcome to Kanji Search!
          <br />Enter a single Kanji character in the search bar to retrieve information about it.
          <br />Plase note that the database in incomplete. It currently contains only 1400 of 2200 Joyou Kanji.
          <br />Here are some example Kanji you can search:
          <br />
          <br />Project by Matthew Low
          <br />Source code available on GitHub
          <br />API and database provided by Kanji Alive
          <br />UX and functionality programmed with ReactJS
          <br />UI designed with WebFlow
        </p>
    </div>
  );
}

export default HomePage;
