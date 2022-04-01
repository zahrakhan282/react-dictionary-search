import React from "react";
import Definition from "./Definition";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <hr />
      <h4>{props.meaning.partOfSpeech}</h4>
      <hr />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <Definition definition={definition} />
          </div>
        );
      })}
    </div>
  );
}
