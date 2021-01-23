import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import "../styles.css";

/* THe help function that is called when the player clicks the help butoon. A modal pops up containing all the rules.
Modal also includes a close button to close the modal */
export default function Help(props) {
  return (
    <div>
      <Modal
        {...props}
        className="pop-up"
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Help and Rules
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
              <li>Match all the tiles in sets of 2</li>
              <li>Don't click the same card twice in a row!</li>
              <li>Match all 8 sets to Win the game</li>
              <li>You only have 10 tries to match all the tiles</li>
              <li>Restart the game at any point by clicking the reset button</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="close-btn">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

