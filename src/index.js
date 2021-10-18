// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [tesla, honda] = cars;

const { coloursByPopularity: teslaColor, speedStats: speed } = tesla;
const [teslaTopColour, backup] = teslaColor;
const { topSpeed: teslaTopSpeed, zeroToSixty } = speed;

const { coloursByPopularity: hondaColor, speedStats: race } = honda;
const [hondaTopColour, backplan] = hondaColor;
const { topSpeed: hondaTopSpeed } = race;

// console.log(hondaTopColour);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
