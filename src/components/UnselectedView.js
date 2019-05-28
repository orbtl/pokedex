import React from "react";
import "./styles/DetailView.css";
import ash from "../img/ash.png";

const UnselectedView = ({ pokemon }) => {
  const { id, name, type, moves } = pokemon;

  return (
    <section className="detail-view">
      <img src={ash} className="sprite-image" alt="ash" />
      <div className="data-wrapper">
        <h1 className="data-name">
          ID: {id} {name}
        </h1>
        <p className="data-char">Type: {type}</p>
        <p className="data-char"> Move: {moves}</p>
      </div>
    </section>
  );
};

export default UnselectedView;
