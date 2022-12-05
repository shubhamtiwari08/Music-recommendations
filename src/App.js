import React, { useState } from "react";

import "./styles.css";

var indie = {
  song1: "Tum - Anurag Vashisht",
  song2: "Riha - Anuv Jain",
  song3: "aziyat - pratyush dhiman",
  song4: "Mazaak - Anuv Jain"
};

var bollywood = {
  song1: "Kesariya - arijit singh",
  song2: "jai ho - A R rehmaan",
  song3: " barfi -Mohit chauhan",
  song4: "Khair mangadi - bilal saeed"
};

var ninety = {
  song1: "hum tum yug yug - lata mageshkar, muskesh",
  song2: "ek pyar ka nagma hai - lata mangeshkar",
  song3: " aaj unse pehli mulaqaat hogi -RD Barman",
  song4: "Badan pe sitare lapete huey - Md. Rafi"
};

var ninetySongs = Object.values(ninety);
var bollywoodSongs = Object.values(bollywood);
var indieSongs = Object.values(indie);

export default function App() {
  var [songList, setSongList] = useState("");

  function indieClickHandler() {
    var songList = indieSongs.map((item) => {
      return (
        <li
          style={{
            listStyle: "none",
            padding: "10px 10px"
          }}
        >
          {item}
        </li>
      );
    });
    setSongList(songList);
  }

  function bollywoodClickHandler() {
    var songList = bollywoodSongs.map((item) => {
      return <li style={{ listStyle: "none" }}>{item}</li>;
    });
    setSongList(songList);
  }

  function ninetyClickHandler() {
    var songList = ninetySongs.map((item) => {
      return <li style={{ listStyle: "none" }}>{item}</li>;
    });
    setSongList(songList);
  }

  return (
    <div className="App">
      <h1> 🎶 Music Recommedation</h1>
      <button className="music-btn" onClick={indieClickHandler}>
        Indie
      </button>
      <button className="music-btn" onClick={bollywoodClickHandler}>
        bollywood
      </button>
      <button className="music-btn" onClick={ninetyClickHandler}>
        90's
      </button>

      <div className="recco-list">
        <ul>{songList}</ul>
      </div>
    </div>
  );
}
