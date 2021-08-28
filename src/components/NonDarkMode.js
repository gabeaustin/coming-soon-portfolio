import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const NonDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  //   const darkModeStyle = <h1 style={{color: "red", backgroundColor: "#000"}}>Dark Mode</h1>
  const darkModeStyle = "Dark Mode";
  //   const lightModeStyle = <h1 style={{color: "green", backgroundColor: "#fff"}}>Light Mode</h1>
  const lightModeStyle = "Light Mode";

  //   const myFunction = () => {
  //       let element = document.getElementById("myDiv");
  //       element.classList.add("lightModeStyle");
  //   }

  let myFunction = () => {
    let element, name, arr;

    element = document.getElementById("myDIV").classList.add("myStyle");
    name = "myStyle";
    arr = element.className.split(" ");

    if (arr.indexOf(name) === -1) {
      element.className += " " + name;
    }
  };
  return (
    <div id="myDiv">
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} side={80} />
      {/* {isDarkMode ? darkModeStyle : lightModeStyle} */}
      {isDarkMode
        ? darkModeStyle && myFunction()
        : lightModeStyle && myFunction()}
    </div>
  );
};

export default NonDarkMode;
