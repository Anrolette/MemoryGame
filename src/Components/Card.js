import React from "react";
import PropTypes from "prop-types";
import "../styles.css";
import back from "../Back.jpg";


/* THe Card function below shows the various props we need and created per card. It also defines the bahviour needed on the front
and back and how to flipp between them */
export default function Card({
  handleClick,
  id,
  type,
  flipped,
  solved,
  height,
  width,
  disabled,
}) {
  let image = type;

  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{
        width,
        height,
      }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <img
          style={{
            height,
            width,
          }}
          className={flipped ? "front" : "back"}
          src={flipped || solved ? image : back}
          alt=""
        />
      </div>
    </div>
  );
}

/* We also declare all the porptypes in use below */
Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};
