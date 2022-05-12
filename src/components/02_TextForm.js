import React, {useState} from 'react'
import '../style/textForm.css'


export default function TextForm(props) {

  let rma = '555';
  rma += '8555';
  console.log(rma)

  const hg = ()=>{
    const randomWords = require('random-words')
    console.log(randomWords(5))
  }
  hg();
  const handleOnChange = (event)=>{
    // console.log("On Change function runing");
    setText(event.target.value);
  }

  const handleUpClicked = ()=>{
    let newText =  text.toLocaleUpperCase();
    // console.log("On upper case function runing" , text, newText);
    setText(newText);
    props.showAlert("sucess", "Converted to upperCase!");
  }
  


  const [text, setText] = useState("");
  //   text = "new text";         // wrong way to change the state
  //   setState("new text");   // wrong way to change the state
  return (
    <div className="main"  id={props.mode}>
      <div id="textForm" >
          <h1>{props.formHeading}</h1>
          <textarea name="formText" id="Text_box" cols="90" rows="14"  onChange={handleOnChange} value={text}></textarea>
          <button disabled={ text.length ===0? true : false} className="btn" onClick={handleUpClicked}>Convert to Upper case</button>
          
          <h2>Your text summary</h2>
          <p>{text.split(" ").filter( (words)=>{return words}).length} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").filter( (words)=>{return words}).length} Min read time</p>
          <h2>Preview</h2>
          <p id="preview">{text.length === 0 ? "Enter text " : text}</p>
      </div>
    </div>
  )
}
