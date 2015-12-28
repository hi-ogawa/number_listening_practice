import React from "react";

class Question extends React.Component {
  speakUp() {
    let msg = new SpeechSynthesisUtterance();
    msg.text = this.inputRef.value;
    msg.rate = 0.5;
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
  }
  render() {
    if (!('speechSynthesis' in window)) {
      alert("Sorry, you need to use latest Chrome or Safari to use this site.")
    }
    return (
      <div>
        <input type="text" ref={(ref) => this.inputRef = ref} />
        <button onClick={this.speakUp.bind(this)}>
          Speak Up!
        </button>
      </div>
    )
  }
}

export default Question;
