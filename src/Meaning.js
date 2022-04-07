import React from "react";
import Definition from "./Definition";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <Definition definition={definition} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
      <br />
    </div>
  );
}
