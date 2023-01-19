import React, { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import YearCard from "./components/YearCard";

const year = {
  one: false,
  two: false,
  three: false,
};

function App() {
  const [years, setYears] = useState(year);
  const checked = (data) => {
    setYears(data);
  };
  return (
    <div className="App">
      <Checkbox yearData={checked} />
      <div className="cardPanel">
        {years.one ? <YearCard year="2021" /> : <p> 2021 not selected </p>}
        {years.two ? <YearCard year="2022" /> : <p> 2022 not selected </p>}
        {years.three ? <YearCard year="2023" /> : <p> 2023 not selected </p>}
      </div>
    </div>
  );
}

export default App;
