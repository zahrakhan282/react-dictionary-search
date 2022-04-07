import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Click for phonetic
      </a>{" "}
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
