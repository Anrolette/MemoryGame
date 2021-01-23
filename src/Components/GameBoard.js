import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "../styles.css";

/* The GameBoard function includes various props passed in and declared. And due the cards array we create and mapped the props are
applied to each card in the array as well as how to identify the prop we require */
export default function GameBoard({
  disabled,
  dimension,
  cards,
  flipped,
  solved,
  handleClick,
}) {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          type={card.type}
          width={dimension / 4.9}
          height={dimension / 4.9}
          flipped={flipped.includes(card.id)}
          solved={solved.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(card.id)}
        />
      ))}
    </div>
  );
}

GameBoard.propTypes = {
  disabled: PropTypes.bool.isRequired,
  dimension: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
};
