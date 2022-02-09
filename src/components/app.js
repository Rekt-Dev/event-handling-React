import React, { useState } from "react";

function App() {

const [headingText, setHeadingText]=useState("sup ")


function handleClick(){
  setHeadingText("Submitted")
  console.log("clicked bruh")
}
function handleMouseOver(){

console.log("mouseover bruh")
}



  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="what's ur name?" />
      <button style={{ backgroundColor:"white"}}onClick={handleClick}
      onMouseOver={handleMouseOver}
      >send it </button>
    </div>
  );
}

export default App;
