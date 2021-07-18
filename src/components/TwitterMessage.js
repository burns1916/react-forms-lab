import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super()
    this.state = {
      charsLeft: props.maxChars,
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({
        text: event.target.value,
        charsLeft: this.state.charsLeft -1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.text} onChange={this.handleChange}/>
        <p>Characters Left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
