import React from 'react'
import '../style/result.css'

const Result = (props) => {

  const {mistake, typingSpeed, totalWord, totalLetter} = props.data;
  


  return (
    <div id="resultContainer">
      <header>
        <h1 className='TextCenter'>Display your result</h1>
        <div className="close">
          <button className="closeBtn" onClick={props.showHideResultbox}>Close</button>
        </div>
      </header>
      
      <main>
      <div id="resultBox">
        <div id="leftSideItem">
          <div>Speed <br />{typingSpeed ? Math.floor(typingSpeed) : "0"}wpm</div>
          <div>Accuracy<br />{mistake===0 ? "100" : ((( totalLetter -  mistake )/ totalLetter)*100).toFixed()}<span className='FontDefault'>%</span></div>
          <div>Words <br />{totalWord}</div>
          <div>Mistake's <br />{mistake}</div>
        </div>

        <div id="graphBox">
          <span>
            
          </span>
        </div>
      </div>
      </main>

      <footer>
        <i>
        Powered by Fast Typing @ 2022
        </i>
      </footer>

    </div>
  )
}

export default Result
