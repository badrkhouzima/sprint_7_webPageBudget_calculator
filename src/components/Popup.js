import React from "react";
import "../App.css";

function Popup(props) {
  return (
    <div className="popup-box" onClick={props.handleClose}>
      <div>
        <div className="box">
          {props.content}
        </div>
      </div>
    </div>
  );
}

export default Popup;
