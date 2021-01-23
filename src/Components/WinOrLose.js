import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../styles.css";

/* The WinOrLose function it the modal that is called when the player either wins by matching all the tiles or loses by not being able to
match everthing in the 10 given tries. The Modal dispalys the result and includes a close button */
export default function WinOrLose(props) {
  return (
    <div>
      <Modal
        {...props}
        className="result-pop-up"
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Game Result
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{props.response}</h1>
          <br></br>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="close-btn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
