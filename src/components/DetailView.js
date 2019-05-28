import React from "react";
import "./styles/DetailView.css";
import DropdownButton from "react-bootstrap/DropdownButton";

const DetailView = ({ pokemon, handleTypeClick, handleShinyClick }) => {
  const { id, name, type, moves, image, sprite, shiny } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className="sprite-image" alt="sprite" />

      <div className="data-wrapper">
        <h1 className="data-name">
          ID: {id} {name}
        </h1>
        <button onClick={() => handleShinyClick()}>Shiny </button>
        <button onClick={() => handleTypeClick(type)}>Type : {type}</button>
        <p className="data-char">Move: {moves}</p>
        <p>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button" />;
        </p>
      </div>
    </section>
  );
};

export default DetailView;
