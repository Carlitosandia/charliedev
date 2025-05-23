import React, { useState } from "react";
import "./FirstGiftLetter.css"; // Cambiamos a CSS normal en lugar de módulos

export default function BirthdayGift() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="envlope-wrapperr">
        <div
          id="envelopee"
          className={isOpen ? "openn" : "closee"}
          onClick={handleOpen}
        >
          <div className="frontt flapp"></div>
          <div className="frontt pockett"></div>
          <div className="letterr">
            <div className="wordss">
              Para el amor de mi vida (Sofi):<br />
              Si lees esto es porque ya viste que ya cambio la carta
              y bueno la primera carta sigue estando aqui: <br />
              https://www.charliegallegos.com/firstletter <br />
              Solo que te tengo otra sorpresa que puedes ver si  <br />
              remplazas firstletter en la URL por la fecha en la que <br />
              que nos dijismos por primera vez que estabamso enamorados ❤️ Algo asi: /01-01-2025
            </div>
          </div>
          <div className="heartss">
            <div className="heartt aa1"></div>
            <div className="heartt aa2"></div>
            <div className="heartt aa3"></div>
          </div>
        </div>
      </div>

      <div className="resett">
        <button onClick={handleOpen} id="openn">OPEN</button>
        <button onClick={handleClose} id="resett">RESET</button>
      </div>
    </>
  );
}