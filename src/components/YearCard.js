import React, { useState } from "react";
import "./YearCard.css";

const YearCard = (props) => {
  const [isMonth, setIsMonth] = useState("W");
  const clickHandler = (event) => {
    event.preventDefault();
  };

  const monthChangeHandler = (event) => {
    //console.log(isMonth);
    setIsMonth(event.target.value);
  };
  return (
    <div className="YearCard">
      Year:{props.year}
      <button className="reset">Reset</button>
      <select onChange={monthChangeHandler} value={isMonth}>
        <option value="W">Jan-April</option>
        <option value="S">May-Aug</option>
        <option value="A">Sep-Dec</option>
      </select>
      <input id="one" type="number" defaultValue={0} />
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
      <input id="two" type="number" defaultValue={0} />
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
      <input id="three" type="number" defaultValue={0} />
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
      <input id="four" type="number" defaultValue={0} />
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
      <button onClick="clickHandler">Calculate</button>
    </div>
  );
};
export default YearCard;
