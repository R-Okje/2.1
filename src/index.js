//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";
const myno = 8;
const name = "Viral";
var d = new Date();
var n = d.getFullYear();
const CustomStyle = {
  color: "blue",
  fontSize: "30px",
  border: "5px solid black"
};
CustomStyle.color = "green";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello World,Its Viral here
    </h1>
    <p className="headings">My lucky number is {myno}</p>
    <p style={CustomStyle}>This is created by {name}</p>
    <p>Copyright {n} </p>
    <img
      className="food-img"
      alt=""
      src="https://picsum.photos/500?grayscale"
    />
  </div>,
  document.getElementById("root")
);
