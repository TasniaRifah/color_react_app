import React, { useState } from "react";

import "./style.css";

const Color = () => {
  const [color, setColor] = useState("white");
  const onSetColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <textarea style={{ backgroundColor: color }}></textarea>
      <br />
      <br />

      <input
        type="text"
        placeholder="Color Name / Code"
        onKeyUp={onSetColor}
      />
    </div>
  );
};

export default Color;
