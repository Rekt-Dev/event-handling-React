import React, { useState } from "react";

function App() {

const [headingText, setHeadingText]=useState("sup ")
const [isMousedOver, setMouseOver] = useState(false)

function handleClick(){
  setHeadingText("Submitted")
  console.log("clicked bruh")
}
function handleMouseOver(){
setMouseOver(true)
}

function handleMouseOut(){
setMouseOver(false)
}



  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="what's ur name?" />
      <button style=
      {{ backgroundColor: isMousedOver ? "black" : "white"}}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >send it </button>
    </div>
  );
}

export default App;
