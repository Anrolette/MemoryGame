import React, { useState, useEffect } from "react";
import GameBoard from "./Components/GameBoard.js";
import initializeDeck from "./Components/Deck.js";
import Help from "./Components/Help.js";
import Button from "react-bootstrap/Button";
import "./styles.css";
import WinOrLose from "./Components/WinOrLose.js";

/* The App function consists of the various consts below used the declare all the useStates we need for the various functions we created to work. */
export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(300);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [resultModalShow, setResultModalShow] = useState(false);
  const [tries, setTries] = useState(10);
  const [response, setResponse] = useState("");

  /* The useEffect below calls the functions to resize the board and inititialize and set up the deck*/
  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  /* This useEffect below calls the preload images making the cards more responsive */
  useEffect(() => {
    preloadImages();
  });

  /* useEffect below calls the resizeBoard based on a Event listeners that we add and remove based on user behaviour */
  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);

    return () => window.removeEventListener("resize", resizeListener);
  });

  /* The handleClick function handles quite a few actions. For starters it checks whether a card has been flipped or if not it
  flips it, or matches it to one of the solved cards. It also shows the correct Win/Lose modal depending on the lenght of solved cards.
  the Lose modal is shown if the tries (set to 10 in the useState above) is less than 1. Lastly the clicked card is set to reset
  after 1.5 secconds. */
  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
        if (solved.length === 14) {
          setResponse("You Won!");
          setResultModalShow(true);
        }
      } else {
        if (tries > 1) {
          setTries(tries - 1);
        } else {
          setTries(0);
          setResponse("You Lose!");
          setResultModalShow(true);
        }
        setTimeout(resetCards, 1500);
      }
    }
  };

  /* The preloadImages function called above loads the array of images and returns them to ensure the images dont behave jerky */
  const preloadImages = () => {
    cards.map((card) => {
      const src = `../Images/${card.type}.jpg`;
      new Image().src = src;
      return src;
    });
  };

  /* The resetCards function called above has ann empty array again and makes all the cards clickable again */
  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  /* The sameCardClicked function checks the id of the flipped cards to see if its included in the flipped array */
  const sameCardClicked = (id) => flipped.includes(id);

  /* The isMatch function checks whether the clicked cards id matches any of the flipped cards id's and checks
  if both cards have the exact same card type */
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

   /* The resizeBoard function uses the lesser of the width and height of the card to set the dimension and make the board responsive */
  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

   /* In the returned elements we also pass in the "reset" button in the resultModal so that when you click 
   the close button it closes the modal and resets the board */
  return (
    <div className="body">
      <h1>Does Memory Serve?</h1>
      <div className="info-area">
        <Button
          className="help-btn"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Help
        </Button>
        <button
          className="restart-btn"
          onClick={() => window.location.reload(false)}
        >
          Restart
        </button>
        <h3>Tries Left: {tries}</h3>
      </div>
      <Help show={modalShow} onHide={() => setModalShow(false)} />
      <WinOrLose
        response={response}
        show={resultModalShow}
        onHide={
          (() => setResultModalShow(false), () => window.location.reload(false))
        }
      />
      <GameBoard
        className="game-board"
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      ></GameBoard>
    </div>
  );
}
