import React from "react";

export default function Definition(props) {
  console.log(props.definition);
  return (
    <div>
      <p>
        <strong>{props.definition.definition}</strong>

        <br />
        <em>{props.definition.example}</em>
      </p>
    </div>
  );
}
