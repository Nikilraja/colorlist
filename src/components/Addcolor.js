import React, { useState, useEffect } from "react";

const ColorArray = ({ colorList }) => {
  useEffect(() => {
    console.log("colors", colorList);
  }, [colorList]);

  return (
    <>
      {colorList.map((value, index) => (
        <div
          key={index}
          style={{
            backgroundColor: value,
            width: "300px",
            height: "20px",
            border: "1px solid black",
          }}
        ></div>
      ))}
    </>
  );
};

const Addcolor = () => {
  const [color, setColor] = useState("red");
  const [colorList, setColorList] = useState(["red"]);

  const style = {
    backgroundColor: color,
    textDecoration: "none",
  };

  return (
    <div>
      <input
        type="text"
        style={style}
        onChange={(e) => setColor(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>
      <ColorArray colorList={colorList} />
    </div>
  );
};

export default Addcolor;
