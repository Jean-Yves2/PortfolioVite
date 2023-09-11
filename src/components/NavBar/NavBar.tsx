import React from "react";
import "./NavBar.scss";
import { Modal, Button } from "@nextui-org/react";
function NavBar() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => {setVisible(true)
  console.log(visible)};
  const closeHandler = () => {
    setVisible(false);
    console.log(visible)
  };

  return (
    <div className="navBar">
      <div className="navBar__anchor">
        <a href="#">Profil</a>
        <a href="#sectionContainer__projectSection__white-projet--experience">
          Expériences
        </a>
        <a href="#sectionContainer__projectSection__white-projet--contact">
          Contact
        </a>
      </div>
      <div className="navBar--menu" >
        <Button auto onPress={handler}>
          <img src={`./bx-menu.svg`} alt={`Menu`} />
        </Button>
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Body>
            <a href="#" onClick={closeHandler}>Profil</a>
            <a href="#sectionContainer__projectSection__white-projet--experience" onClick={closeHandler}>
              Expériences
            </a>
            <a href="#sectionContainer__projectSection__white-projet--contact" onClick={closeHandler}>
              Contact
            </a>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default NavBar;
