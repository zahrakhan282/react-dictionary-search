import React from "react";

export default function Definition(props) {
  console.log(props.definition);
  return (
    <div>
      <p>
        <strong>Definition: </strong>
        {props.definition.definition}
        <br />

        <em>{props.definition.example}</em>
      </p>
    </div>
  );
}
