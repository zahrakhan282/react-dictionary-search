import React from "react";
import "./Definition.css";

export default function Definition(props) {
  return (
    <div>
      <div className="definition">{props.definition.definition}</div>
      <div className="example">{props.definition.example}</div>
    </div>
  );
}
