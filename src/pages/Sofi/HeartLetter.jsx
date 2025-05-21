import React, { useState } from "react";
import "./HeartLetter.css"; // Cambiamos a CSS normal en lugar de módulos

export default function HeartLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="envlope-wrapper">
        <div
          id="envelope"
          className={isOpen ? "open" : "close"}
          onClick={handleOpen}
        >
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            <div className="words">
              Para Sofi:<br />
              En este día de las cartas<br />
              de amor quiero entregarte esta<br />
              para demostrarte lo mucho que te quiero y te adoro con toda mi alma❤️
            </div>
          </div>
          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </div>
      </div>

      <div className="reset">
        <button onClick={handleOpen} id="open">OPEN</button>
        <button onClick={handleClose} id="reset">RESET</button>
      </div>
    </>
  );
}