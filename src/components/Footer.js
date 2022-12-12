import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
    <div className="footer">
      <Link to="/about">
        <p>About</p>
      </Link>
      <a href="https://github.com/mattlow67/kanji-search" target="_blank" rel="noreferrer">
        <p>Source Code</p>
      </a>
      <a href="https://kanjialive.com/" target="_blank" rel="noreferrer">
        <p>Kanji Alive</p>
      </a>
    </div>
    )
}

export default Footer;