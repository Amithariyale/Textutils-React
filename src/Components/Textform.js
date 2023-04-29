import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter your text here");
  

  const handleOnChange = (event) => {
    setText(event.target.value);

  };

  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  };

  const handleLower = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  };
  

  const capitalize = () => {
    if (text.length > 1) {
      let newText = text[0].toLocaleUpperCase();
      for (let i = 1; i < text.length; i++) {
        newText += text[i];
      }
      setText(newText);
      props.showAlert("Senetence is Capitalized","success")
    }
  };

  const handleCopy=()=>{
    console.log("copy")
    var text=document.getElementById("myForm");
    text.select();
   
    navigator.clipboard.writeText(text.value);
    
    props.showAlert("Text Copied","success")
  }
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared","success")
  };

  let myStyle={
    color: props.mode==='light'?'black':'white',
    backgroundColor: props.mode==='light'? 'white':'#071a25',
  }
  

  return (
    <>
      <div className="container border my-3 py-3" >
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={myStyle}
            value={text}
            onChange={handleOnChange}
            id="myForm"
            rows="8"
          ></textarea>
        </div >
        <button className="btn-mybutton" onClick={handleUpper}>
          Convert to Uppercase
        </button>
        <button className="btn-mybutton" onClick={handleLower}>
          Convert to Lowercase
        </button>
        
        <button className="btn-mybutton" onClick={capitalize}>
          Capitalized Case
        </button>
        
        <button className="btn-mybutton" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn-mybutton" onClick={handleClear}>
          Clear
        </button>
      </div>
      
      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "} characters
        </p>
        <p>{0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "} Minutes to read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
