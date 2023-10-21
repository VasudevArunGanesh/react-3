// ColorPicker.js
import "../App.css"


import React, { useState } from 'react';

function ColourPick({ colors }) {
  const [isColorListVisible, setColorListVisible] = useState(false);

  const handleColorClick = (color) => {
    setColorListVisible(false);
    document.body.style.backgroundColor = color;
  };

  const toggleColorList = () => {
    setColorListVisible(!isColorListVisible);
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>Pick a color</button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => {handleColorClick(color)}}
            ></div>
          ))}
        </div>
      )}
       
    </div>
  );
}

export default ColourPick;
