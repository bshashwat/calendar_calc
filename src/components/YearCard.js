import React, { useState } from "react";
import "./YearCard.css";

const YearCard = (props) => {
  const [isMonth, setIsMonth] = useState("W");
  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);
  const [isDisabled3, setIsDisabled3] = useState(false);
  const [isDisabled4, setIsDisabled4] = useState(false);

  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberThree, setNumberThree] = useState(0);
  const [numberFour, setNumberFour] = useState(0);

  const handleInputChange = (event) => {
    const name = event.target.name;

    if (name === "one") {
      setNumberOne(parseInt(event.target.value));
      setIsDisabled2(true);
      setIsDisabled3(true);
      setIsDisabled4(true);
    } else if (name === "two") {
      setNumberTwo(parseInt(event.target.value));
      setIsDisabled1(true);
      setIsDisabled3(true);
      setIsDisabled4(true);
    } else if (name === "three") {
      setNumberThree(parseInt(event.target.value));
      setIsDisabled1(true);
      setIsDisabled2(true);
      setIsDisabled4(true);
    } else {
      setNumberFour(parseInt(event.target.value));
      setIsDisabled1(true);
      setIsDisabled2(true);
      setIsDisabled3(true);
    }
  };

  const clickHandler = (event) => {
    var avg = (numberFour + numberOne + numberThree + numberTwo) / 4;

    setNumberOne(numberOne + Math.floor(Math.random() * 201) - 100);
    setNumberTwo(numberTwo + Math.floor(Math.random() * 201) - 100);
    setNumberThree(numberThree + Math.floor(Math.random() * 201) - 100);
    setNumberFour(numberFour + Math.floor(Math.random() * 201) - 100);
  };

  const resetHandler = (event) => {
    setNumberOne(0);
    setNumberTwo(0);
    setNumberThree(0);
    setNumberFour(0);

    setIsDisabled1(false);
    setIsDisabled2(false);
    setIsDisabled3(false);
    setIsDisabled4(false);
  };

  const monthChangeHandler = (event) => {
    //console.log(isMonth);
    setIsMonth(event.target.value);
  };
  return (
    <div className="YearCard">
      Year:{props.year}
      <button className="reset-button" onClick={resetHandler}>
        Reset
      </button>
      <select onChange={monthChangeHandler} value={isMonth}>
        <option value="W">Jan-April</option>
        <option value="S">May-Aug</option>
        <option value="A">Sep-Dec</option>
      </select>
      <input
        name="one"
        type="number"
        value={numberOne}
        onChange={handleInputChange}
        disabled={isDisabled1}
      />
      {(() => {
        switch (isMonth) {
          case "W":
            return <label>Jan</label>;
          case "S":
            return <label> May</label>;
          case "A":
            return <label>Sep</label>;
        }
      })()}
      <input
        name="two"
        type="number"
        value={numberTwo}
        onChange={handleInputChange}
        disabled={isDisabled2}
      />
      {(() => {
        switch (isMonth) {
          case "W":
            return <label>Feb</label>;
          case "S":
            return <label> June</label>;
          case "A":
            return <label>Oct</label>;
        }
      })()}
      <input
        name="three"
        type="number"
        value={numberThree}
        onChange={handleInputChange}
        disabled={isDisabled3}
      />
      {(() => {
        switch (isMonth) {
          case "W":
            return <label>Mar</label>;
          case "S":
            return <label> July</label>;
          case "A":
            return <label>Nov</label>;
        }
      })()}
      <input
        name="four"
        type="number"
        value={numberFour}
        onChange={handleInputChange}
        disabled={isDisabled4}
      />
      {(() => {
        switch (isMonth) {
          case "W":
            return <label>Apr</label>;
          case "S":
            return <label> Aug</label>;
          case "A":
            return <label>Dec</label>;
        }
      })()}
      <button onClick={clickHandler}>Calculate</button>
    </div>
  );
};
export default YearCard;
