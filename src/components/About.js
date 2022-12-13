import React from 'react';

function About() {
    return (
        <div className="container">
            <div className="about">
                <div className="abouttext">
                    <p>
                        Website created by Matthew Low.
                        <br />Front-end powered by React.js and JavaScript.
                        <br />API and database provided by Kanji Alive.
                        <br />Deployed via Netlify.
                        <br /><br />Updates:
                        <br />12/12/22 - Improved routing. Revised Homepage and About Page
                        <br />7/31/22 - Initial deployment of Websit
                    </p>
                </div>

                <img src="https://jyuluck-do.com/sp702653-japanese-kanji-calligraphy.jpg" alt="https://via.placeholder.com/600" />

            </div>
        </div>
    );
}

export default About;