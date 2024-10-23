//Create a react app from scratch.
import React from "react";
import reactDom from "react-dom";
//It should display 2 paragraph HTML elements.
var yourName: string = "Robin";
const Time: Date = new Date();

var currentYear = Time.getFullYear();
reactDom.render(
  <div>
    <p>HEllo How are you doing. My name is {yourName}</p>
    <p>Cuurent Year : {currentYear}</p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
