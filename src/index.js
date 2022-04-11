//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
let title = "";
var d = new Date();
console.log(d);
var currentTime = d.getHours();
console.log(currentTime);
var f = {
  color: ""
};
if (currentTime < 12) {
  title = "Good Morning";
  f.color = "red";
}
if (12 < currentTime && currentTime < 18) {
  title = "Good Afternoon";
  f.color = "green";
}
if (18 < currentTime) {
  title = "Good night";
  f.color = "blue";
}

ReactDOM.render(<h1 style={f}>{title}</h1>, document.getElementById("root"));
