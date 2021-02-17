/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const values = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let valuesLength = values.length;
  let ValueIndex = Math.floor(Math.random() * (valuesLength - 1));

  console.log(values[ValueIndex]);

  var vc = document.getElementById("valuecard");
  vc.innerHTML = values[ValueIndex];

  const icons = "♣♦♠♥";
  let iconsLength = icons.length;
  let IconIndex = Math.floor(Math.random() * iconsLength);

  console.log(icons[IconIndex]);

  var ph = document.getElementById("iconHeader");
  var pf = document.getElementById("iconFooter");
  ph.innerHTML = icons[IconIndex];
  pf.innerHTML = icons[IconIndex];

  var main = document.getElementById("card");

  if (icons[IconIndex] == "♣" || icons[IconIndex] == "♠") {
    main.style.color = "black";
  } else {
    main.style.color = "red";
  }
};
