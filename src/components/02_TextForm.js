import React, { Component } from 'react'
import '../style/textForm.css'
import randomWords from 'random-words'

export default class TextForm extends Component {
  constructor(){
    super();
    this.state = {
      Dev: "Utkarsh Yadav",
      text: "",
      randomWord: randomWords({ exactly: 15, join: ' ' }),
      currentTime: new Date(),
      typingStartTtime: false,
      typingSpeed: NaN
    };
  }


  startTyping = async ()=>{
    await this.setState({randomWordString: this.state.randomWord, typingStartTtime: new Date()})
    document.getElementById("displayWord").innerText = this.state.randomWordString.substring(0,58);
    // this.handleOnChange();
    this.typingSpeed()
  }
  
  
  handleOnChange = async (event) => {
    // console.log("On Change function runing");
    // console.log(this.state.getRandomWords.join(' '));
    await this.setState({
      text: event.target.value,
    });
    
    if (event.target.value === this.state.randomWordString.charAt(0)) {
      document.getElementById("displayWord").innerText = this.state.randomWordString.slice(1).substring(0,58);
      // randomWordString = randomWordString.slice(1)
      // console.log(randomWordString)
      this.setState({text: "",randomWordString: this.state.randomWordString.slice(1)});
    }
    else{
      this.props.showAlert("Danger", `"${this.state.text}" not this type this "${this.state.randomWordString.charAt(0)}"`);
      document.getElementById("displayWord").innerText = this.state.randomWordString.substring(0,58);
    }

  }

  typingSpeed = async ()=>{
    // console.log(this.state.currentTime.getTime().toString().substring(0, 10))
    // console.log(this.typingStartTtime)
    setInterval( async () => {
      await this.setState({
        currentTime: new Date(),
      })
      // await console.log(Number(this.state.currentTime.getTime().toString().substring(7, 10)))
      // await console.log((Number(this.state.typingStartTtime.getTime().toString().substring(7, 10))))
      // await console.log(this.state.typingSpeed)
      // await console.log(this.state.randomWord.length)
      // await console.log(this.state.randomWordString.length)
      await this.setState({typingSpeed: (this.state.randomWord.length - this.state.randomWordString.length) / (Number(this.state.currentTime.getTime().toString().substring(7, 10)) - Number(this.state.typingStartTtime.getTime().toString().substring(7, 10)))*60})
      console.log(this.state.typingSpeed)
    }, 1000);
  }

  handleUpClicked = () => {
    let newText = this.state.text.toLocaleUpperCase();
    // console.log("On upper case function runing" , text, newText);
    // setText(newText);
    this.setState({
      text: newText,
    });
    this.props.showAlert("sucess", "Converted to upperCase!");
  }



  render() {
    return (

      <div className="main" id={this.props.mode}>
        <div id="textForm" >
          <pre id="displayWord">{this.props.formHeading}</pre>
          <textarea name="formText" id="Text_box" rows="4" onChange={this.handleOnChange} value={this.state.text}></textarea>
          <button disabled={this.state.text.length === 0 ? true : false} className="btn" onClick={this.handleUpClicked}>Convert to Upper case</button>
          <button className="btn" onClick={this.startTyping}>Start Typing</button>

          <h2>Summary</h2>
          <h2>{this.state.typingSpeed.toFixed()}</h2>
          <p>{this.state.text.split(" ").filter((words) => { return words }).length} words and {this.state.text.length} characters</p>
          <p>{0.008 * this.state.text.split(" ").filter((words) => { return words }).length} Min read time</p>
          <h2>Preview</h2>
          <p id="preview">{this.state.text.length === 0 ? "Enter text " : this.state.text}</p>
        </div>
      </div>
    )
  }
}
