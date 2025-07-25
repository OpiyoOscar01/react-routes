import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';  // import styles

function PopupDemo() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>React Popover using reactjs-popup</h1>

      <Popup
        trigger={<button className="button"> Open Popover </button>}
        position="bottom center"
        closeOnDocumentClick
      >
        <div style={{ padding: '1rem' }}>
          This is the popover content!
        </div>
      </Popup>
    </div>
  );
}

export default PopupDemo;
