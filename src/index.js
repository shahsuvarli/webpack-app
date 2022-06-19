import _ from "lodash";
import "./style.css";
// import image from "./webpack-how-it-works.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./category/Header";

function Library() {
  const element = document.createElement("div");
  const APP = `
  <div class='container'>
    ${Header()}
  </div>`;
  //   const element = document.createElement("div");

  //   // Lodash, currently included via a script, is required for this line to work
  //   element.innerHTML = _.join(["Hello", "webpack"], " ");
  //   element.setAttribute("class", "red");
  element.innerHTML = APP;

  return element;
} 

document.body.appendChild(Library());
