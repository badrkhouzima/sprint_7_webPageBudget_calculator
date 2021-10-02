import React, { useState } from "react";

import { GoInfo } from "react-icons/go";
import Popup from "./Popup";
import "./Inputs.css"
function PopUpButton() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="info_Btn" type="button" onClick={togglePopup}>
        <GoInfo className="info-icon" />
      </button>

      {isOpen && (
        <Popup
          content={
            <>
              <p>text loren tlkme</p>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
}
export default PopUpButton;

//size={30} 
