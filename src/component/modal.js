import React, { useState } from "react";
import "./modal.css";



export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="update-button">
    Update
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Update Score</h2>
            <div className="horizontal-lines"></div>
            <div class="update-rank">Update your rank</div>
            <button class="text-btn">12890</button>
            <div class="update-rank2">Update your percentile</div>
            <button class="text-btn2">37</button>
            <div class="update-rank3">Update your current score (out of 15)</div>
            <button class="text-btn3">07/15</button>
            <button className="cancel-button" onClick={toggleModal}>
              Cancel
            </button>
            <button className="save-button">
              Save
            </button>
            <img className="images-boxs" src='./image/html.png'alt="img" />
          </div>
          


        </div>
      )}
     
    </>
  );
}