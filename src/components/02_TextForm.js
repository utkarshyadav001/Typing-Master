import React, { Component } from 'react'
import '../style/textForm.css'
import randomWords from 'random-words'
import Result from './Result';

export default class TextForm extends Component {
  constructor() {
    super();
    this.state = {
      Dev: "Utkarsh Yadav",
      text: "",
      randomWord: randomWords({ exactly: 5, join: ' ' }),
      randomWordString: "",
      currentTime: 0,
      countMistakes: 0,
      typingSpeed: 0,
      totalTypedWord: 0,
      data: {},
      showResult: false,
    };
  }

  mistake = false;
  startBtn = false;
  restart = true;
  // stopBtn = true;
  endTyping = false;
  graph = [];
  startCalculatIngtime = false



  startTyping = async () => {
    // console.log(this.graph);
    await this.setState({ randomWordString: this.state.randomWord });
    document.getElementById("displayWord").innerText = this.state.randomWordString.slice(0, 90);
    // document.getElementById("Text_box").click()
    this.startBtn = true;
    this.startCalculatIngtime = true
    // this.stopBtn = false;
    this.restart = false;

  }

  // stopTyping = async () => {
  //   //  When user say to stop typing then stop time 

  // }

  restartTyping = async () => {
    await this.setState({ randomWordString: this.state.randomWord, currentTime: 0, totalTypedWord: 0, countMistakes: 0, typingSpeed: 0, text: "" });
    this.graph = [];
    this.endTyping = false
    document.getElementById("displayWord").innerText = this.state.randomWordString.slice(0, 90);
    this.startCalculatIngtime = true;
    // clearInterval(this.time);
  }


  calculateTypingSpeedFun = async () => {

    let time = setInterval(async () => {

      //  When user complete typing then stop time 
      if (this.state.randomWordString.length !== 0 && !this.startCalculatIngtime) {
        await this.setState({
          currentTime: this.state.currentTime + 1
        });

        /*  Updating typing speed -- typing speed formula --> ( (Total typed word /
        time)*60 ) */
        // console.log(this.state.totalTypedWord, this.state.currentTime)
        await this.setState({ typingSpeed: ((this.state.totalTypedWord / this.state.currentTime) * 60) });
        // console.log(this.state.typingSpeed)
        this.praph = this.graph.push(this.state.typingSpeed)
        // console.log(this.graph)
      }
      else {
        clearInterval(time);
      }

    }, 1000);

  }



  handleOnChange = async (event) => {
    if (this.startBtn && !this.endTyping) {

      if (this.startCalculatIngtime) {
        this.calculateTypingSpeedFun();
        this.startCalculatIngtime = false
      }

      await this.setState({ text: event.target.value });

      if (event.target.value === this.state.randomWordString.charAt(0)) {
        document.getElementById("displayWord").innerText = this.state.randomWordString.slice(1).substring(0, 90);
        // randomWordString = randomWordString.slice(1)
        // console.log(randomWordString)
        this.setState({ text: "", randomWordString: this.state.randomWordString.slice(1) });
        this.mistake = false
        this.setState({ totalTypedWord: this.state.randomWord.split(" ").length - this.state.randomWordString.split(" ").length })
      }
      else if (!this.endTyping) {
        if (this.mistake === false) {
          this.setState({ countMistakes: this.state.countMistakes + 1 });
        }
        this.mistake = true;
        this.props.showAlert("Danger", `"${this.state.text}" not this type this "${this.state.randomWordString.charAt(0)}"`); 
      }
      else {
      }

      //  When user complete typing then stop time and display result 
      if (this.state.randomWordString.length === 0) {
        document.getElementById("displayWord").innerText = "Well Done, Bro !";
        this.setState({ totalTypedWord: this.state.randomWord.split(" ").length });
        // this.stopBtn = true;
        // console.log(this.graph)
        this.endTyping = true;
        this.showHideResultbox()
        this.setState( {
          data: {
            totalWord : this.state.randomWord.split(" ").length,
            totalLetter : this.state.randomWord.length,
            typingSpeed: this.state.typingSpeed,
            mistake: this.state.countMistakes
          }
        });
      }

    }
    else if (this.endTyping){
      this.props.showAlert("Danger", `Please click on restart or next Typing button`);
    }
     else {
      this.props.showAlert("Danger", `Please click on start Typing button `);
    }

  }



  /* 
  async componentDidMount(){
  document.getElementById("displayWord").innerText = this.state.randomWord.toString().substring(0,58);
  }
  */

  showHideResultbox = async ()=>{
    await this.state.showResult ? this.setState({showResult: false}) : this.setState({showResult: true})
    if(!this.state.showResult){
      document.getElementById("displayWord").innerText = "Well Done, Bro !" 
    }
  }


  render() {

    return (

      <div id={this.props.mode} className="main">

        {
          this.state.showResult ?  <Result graph={this.graph} data={this.state.data} showHideResultbox={this.showHideResultbox} /> : ""
        }

        {
          !this.state.showResult ? 
          
          
      <div >
        <div id="textForm" >
          <p>{this.state.totalTypedWord}/{this.state.randomWord.split(" ").length}</p>
          {/* {this.startBtn? <p> {!this.endTyping ? this.state.randomWord.split(" ").length - this.state.randomWordString.split(" ").length : this.state.randomWord.split(" ").length}/{this.state.randomWord.split(" ").length} </p> : "0"+"/"+this.state.randomWord.split(" ").length} */}

          {/* {console.log(this.state.randomWordString)} */}
          <div id="displayWordBox">
            <pre id="displayWord">{this.props.formHeading}</pre>
          </div>
          <textarea name="formText" id="Text_box" rows="4" onChange={this.handleOnChange} value={this.state.text}></textarea>
          {/* <input name="formText" id="Text_box" style={{"height": "129px"}} onChange={this.handleOnChange} value={this.state.text}></input> */}
          {/* <button disabled={this.state.text.length === 0 ? true : false} className="btn" onClick={this.handleUpClicked}>Convert to Upper case</button> */}

          <div className="button">
            <button disabled={this.startBtn} className="btn" onClick={this.startTyping}>Start Typing</button>
            {/* <button disabled={this.stopBtn} className="btn" onClick={this.stopTyping}>Stop Typing</button> */}
            <button disabled={this.restart} className="btn" onClick={this.restartTyping}>Restart Typing</button>
          </div>



          <div id="summary">

            <span>Summary</span>
            <p>Typing Speed {this.state.typingSpeed.toFixed()}</p>
            <p>Mistakes {this.state.countMistakes}</p>
            <p>Total Words {this.startBtn && !this.endTyping ? this.state.randomWordString.split(" ").length : 0}/{this.state.randomWord.split(" ").length} and Characters  {this.state.randomWordString.length}/{this.state.randomWord.length}</p>

          </div>
          
        </div>
      </div>
     : ""
        }
      </div>
    )
  }
}


