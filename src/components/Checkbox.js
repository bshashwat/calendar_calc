import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  const [isCheckedOne, setIsCheckedOne] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);
  const [isCheckedThree, setIsCheckedThree] = useState(false);

  const checkBoxOneHandler = () => {
    setIsCheckedOne(!isCheckedOne);
  };
  const checkBoxTwoHandler = () => {
    setIsCheckedTwo(!isCheckedTwo);
  };
  const checkBoxThreeHandler = () => {
    setIsCheckedThree(!isCheckedThree);
  };
  const changeHandler = (event) => {
    const years = {
      one: isCheckedOne,
      two: isCheckedTwo,
      three: isCheckedThree,
      isCheckedThree,
    };

    props.yearData(years);
  };

  return (
    <div className="Checkbox" onChange={changeHandler}>
      <input
        type="checkbox"
        checked={isCheckedOne}
        onChange={checkBoxOneHandler}
      />
      2021
      <input
        type="checkbox"
        value="2022"
        checked={isCheckedTwo}
        onChange={checkBoxTwoHandler}
      />
      2022
      <input
        type="checkbox"
        value="2023"
        checked={isCheckedThree}
        onChange={checkBoxThreeHandler}
      />
      2023
    </div>
  );
};
export default Checkbox;
