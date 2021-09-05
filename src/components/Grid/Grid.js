import React from "react";
import "./Grid.css";

function Grid({ title, desc }) {
  return (
    <div className="grid">
      <div className="grid-container">
        <p className="grid-paragraph">{title}</p>
        <h2 className="grid-heading">{desc}</h2>
      </div>
    </div>
  );
}

export default Grid;
