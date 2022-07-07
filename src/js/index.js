import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx"


let btn = document.querySelector("#btn")
let text = document.querySelector("#text")

// function disable(){ 
//     btn.remove();
//     text.remove();
//     btn.style.display = "none";
//     text.style.display = "none";
// }




ReactDOM.render(<Home/>, document.querySelector("#myGame"));