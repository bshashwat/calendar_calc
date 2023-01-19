import React, { useState } from "react";
import "./YearCard.css";

const YearCard = (props) => {
  const [isMonth, setIsMonth] = useState("W");
  const [isDisabled, setIsDisabled] = useState(false);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberThree, setNumberThree] = useState(0);
  const [numberFour, setNumberFour] = useState(0);

  const handleInputOne = (event) => {
    setNumberOne(event.target.value);
    setIsDisabled(false);
    //document.getElementById(event.value.id).disabled = false;
  };

  const handleInputTwo = (event) => {
    setNumberTwo(event.target.value);
    setIsDisabled(false);
    //document.getElementById(event.value.id).disabled = false;
  };

  const handleInputThree = (event) => {
    setNumberThree(event.target.value);
    setIsDisabled(false);
    //document.getElementById(event.value.id).disabled = false;
  };

  const handleInputFour = (event) => {
    setNumberFour(event.target.value);
    setIsDisabled(false);
    //document.getElementById(event.value.id).disabled = false;
  };
  const clickHandler = (event) => {
    event.preventDefault();

    var avg = (numberFour + numberOne + numberThree + numberTwo) / 4;

    setNumberOne(numberOne + Math.floor(Math.random() * 200) - 100);
    setNumberTwo(numberTwo + Math.floor(Math.random() * 200) - 100);
    setNumberThree(numberThree + Math.floor(Math.random() * 200) - 100);
    setNumberFour(numberFour + Math.floor(Math.random() * 200) - 100);
  };

  const resetHandler = (event) => {
    setNumberOne(0);
    setNumberTwo(0);
    setNumberThree(0);
    setNumberFour(0);
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
        id="one"
        type="number"
        value={numberOne}
        onChange={handleInputOne}
        disabled={isDisabled}
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
        id="two"
        type="number"
        defaultValue={0}
        value={numberTwo}
        onChange={handleInputTwo}
        disabled={isDisabled}
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
        id="three"
        type="number"
        defaultValue={0}
        value={numberThree}
        onChange={handleInputThree}
        disabled={isDisabled}
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
        id="four"
        type="number"
        defaultValue={0}
        value={numberFour}
        onChange={handleInputFour}
        disabled={isDisabled}
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
